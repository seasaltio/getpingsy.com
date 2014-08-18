require "capistrano/ext/multistage"
require 'capistrano_colors'

def template(from, to)
  erb = File.read(File.expand_path("../templates/#{from}", __FILE__))
  put ERB.new(erb).result(binding), to
end

set :stages, %w(production)
set :use_sudo, false
set :deploy_via, :remote_cache

ssh_options[:forward_agent] = true

############################

namespace :deploy do

  task :default do
    update_code
    cleanup
  end

  desc "Update the deployed code."
  task :update_code, except: { no_release: true } do
    run "cd #{deploy_to}; git fetch origin; git checkout #{branch}; git reset --hard origin/#{branch}"
  end

  task :cleanup do
    logger.info "Nothing to cleanup!"
  end

  task :create_symlink do
    logger.info "Nothing to symlink!"
  end

  task :setup, except: { no_release: true } do
    run "git clone #{repository} #{deploy_to};"
    run "cd #{deploy_to}; git fetch origin; git checkout #{branch}; git reset --hard origin/#{branch}"
    config
  end

  task :config do
    nginx.config
  end

  task :export do
  end

  task :cold do
    update_code
  end
end

####

namespace :nginx do
  %w[start stop restart].each do |command|
    desc "#{command} nginx"
    task command, roles: :web do
      run "sudo /etc/init.d/nginx #{command}"
    end
  end

  task :config, roles: :web do
    template "nginx.erb", "/tmp/nginx.conf"
    run "#{sudo} mv /tmp/nginx.conf /etc/nginx/sites-enabled/#{application}.conf"
    run "mkdir -p /home/#{user}/www; touch /home/#{user}/www/index.html"
    nginx.restart
  end
end
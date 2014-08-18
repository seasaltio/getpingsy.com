Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class='home-wrapper'>\n  <div class='home container'>\n    <section class='home-top'>\n      <h1 class='home-header'>\n        <span>Pingsy</span>\n      </h1>\n      <p class='home-desc'>Coming soon to the App Store.</p>\n    </section>\n    <section class='home-images'>\n      <div class='home-image'>\n        <img alt='Send a Pingsy!' src='/assets/media/home-1.png'>\n      </div>\n      <div class='home-image'>\n        <img alt='Respond to a Pingsy!' src='/assets/media/home-2.png'>\n      </div>\n    </section>\n    <div class='clear'></div>\n  </div>\n</div>\n<div class='footer-wrapper'>\n  <footer class='footer'>\n    <a class='footer-logo' href='/' role='presentation' title='Home'>\n      <img src='/assets/media/footer-logo.png'>\n    </a>\n    <br>\n    <br>\n    <ul class='footer-menu' role='menu'>\n      <li class='footer-menu'>\n        <a class='footer-link' href='https://twitter.com/getpingsy' title='Pingsy on Twitter'>\n          <span class='icon-twitter'></span>\n          Pingsy on Twitter\n        </a>\n      </li>\n    </ul>\n  </footer>\n</div>\n");
  
});

Ember.TEMPLATES["no_route"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class='home-wrapper'>\n  <div class='home container'>\n    <section class='home-top'>\n      <h1 class='home-header'>\n        <span>Pingsy</span>\n      </h1>\n      <p class='home-desc'>Ruh roh. Not found.</p>\n      <br>\n      <br>\n    </section>\n  </div>\n</div>\n<div class='footer-wrapper'>\n  <footer class='footer'>\n    <a class='footer-logo' href='/' role='presentation' title='Home'>\n      <img src='/assets/media/footer-logo.png'>\n    </a>\n    <br>\n    <br>\n    <ul class='footer-menu' role='menu'>\n      <li class='footer-menu'>\n        <a class='footer-link' href='https://twitter.com/getpingsy' title='Pingsy on Twitter'>\n          <span class='icon-twitter'></span>\n          Pingsy on Twitter\n        </a>\n      </li>\n    </ul>\n  </footer>\n</div>\n");
  
});
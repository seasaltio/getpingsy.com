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
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        <span class='icon-chevron-right'>\n          Privacy Policy\n        </span>\n        ");
  }

  data.buffer.push("<div class='home-wrapper'>\n  <div class='home container'>\n    <section class='home-top'>\n      <h1 class='home-header'>\n        <span>Pingsy</span>\n      </h1>\n      <p class='home-desc'>Coming soon to the App Store.</p>\n    </section>\n    <section class='home-images'>\n      <div class='home-image'>\n        <img alt='Send a Pingsy!' src='/assets/media/home-1.png'>\n      </div>\n      <div class='home-image'>\n        <img alt='Respond to a Pingsy!' src='/assets/media/home-2.png'>\n      </div>\n    </section>\n    <div class='clear'></div>\n  </div>\n</div>\n<div class='footer-wrapper'>\n  <footer class='footer'>\n    <a class='footer-logo' href='/' role='presentation' title='Home'>\n      <img src='/assets/media/footer-logo.png'>\n    </a>\n    <br>\n    <br>\n    <ul class='footer-menu' role='menu'>\n      <li class='footer-menu'>\n        <a class='footer-link' href='https://twitter.com/getpingsy' title='Pingsy on Twitter'>\n          <span class='icon-twitter'></span>\n          Pingsy on Twitter\n        </a>\n      </li>\n      <li class='footer-menu'>\n        <a class='footer-link' href='mailto:support@getpingsy.com' title='Pingsy Support'>\n          <span class='icon-plus'></span>\n          Pingsy Support\n        </a>\n      </li>\n      <li class='footer-menu'>\n        ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("footer-link")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "privacy", options) : helperMissing.call(depth0, "link-to", "privacy", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </li>\n    </ul>\n  </footer>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["no_route"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class='home-wrapper'>\n  <div class='home container'>\n    <section class='home-top'>\n      <h1 class='home-header'>\n        <span>Pingsy</span>\n      </h1>\n      <p class='home-desc'>Ruh roh. Not found.</p>\n      <br>\n      <br>\n    </section>\n  </div>\n</div>\n<div class='footer-wrapper'>\n  <footer class='footer'>\n    <a class='footer-logo' href='/' role='presentation' title='Home'>\n      <img src='/assets/media/footer-logo.png'>\n    </a>\n    <br>\n    <br>\n    <ul class='footer-menu' role='menu'>\n      <li class='footer-menu'>\n        <a class='footer-link' href='https://twitter.com/getpingsy' title='Pingsy on Twitter'>\n          <span class='icon-twitter'></span>\n          Pingsy on Twitter\n        </a>\n      </li>\n    </ul>\n  </footer>\n</div>\n");
  
});

Ember.TEMPLATES["privacy"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        <span class='icon-chevron-right'>\n          Privacy Policy\n        </span>\n        ");
  }

  data.buffer.push("<div class='home-wrapper'>\n  <div class='home container'>\n    <section class='home-top'>\n      <h1 class='home-header'>\n        <span>Pingsy</span>\n      </h1>\n      <p class='home-desc'>Privacy Policy</p>\n    </section>\n    <section class='home-content'>\n      <p>\n        Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information. The following outlines our privacy policy.\n      </p>\n      <ul>\n        <li>\n          Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.\n        </li>\n        <li>\n          We will collect and use personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.\n        </li>\n        <li>\n          We will only retain personal information as long as necessary for the fulfillment of those purposes.\n        </li>\n        <li>\n          We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.\n        </li>\n        <li>\n          Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.\n        </li>\n        <li>\n          We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.\n        </li>\n        <li>\n          We will make readily available to customers information about our policies and practices relating to the management of personal information.\n        </li>\n      </ul>\n      <p>\n        We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained.\n      </p>\n    </section>\n    <div class='clear'></div>\n  </div>\n</div>\n<div class='footer-wrapper'>\n  <footer class='footer'>\n    <a class='footer-logo' href='/' role='presentation' title='Home'>\n      <img src='/assets/media/footer-logo.png'>\n    </a>\n    <br>\n    <br>\n    <ul class='footer-menu' role='menu'>\n      <li class='footer-menu'>\n        <a class='footer-link' href='https://twitter.com/getpingsy' title='Pingsy on Twitter'>\n          <span class='icon-twitter'></span>\n          Pingsy on Twitter\n        </a>\n      </li>\n      <li class='footer-menu'>\n        <a class='footer-link' href='mailto:support@getpingsy.com' title='Pingsy Support'>\n          <span class='icon-plus'></span>\n          Pingsy Support\n        </a>\n      </li>\n      <li class='footer-menu'>\n        ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("footer-link")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "privacy", options) : helperMissing.call(depth0, "link-to", "privacy", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </li>\n    </ul>\n  </footer>\n</div>\n");
  return buffer;
  
});
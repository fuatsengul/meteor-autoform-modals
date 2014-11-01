Package.describe({
  name: 'fuatsengul:meteor-autoform-modals',
  summary: 'Schema added to yogiben:meteor-autoform-modals',
  version: '1.0.7',
  git: 'https://github.com/fuatsengul/meteor-autoform-modals'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');


 api.use(['jquery','templating','less','session','coffeescript','ui','aldeed:autoform@3.2.0','raix:handlebar-helpers@0.1.2'], 'client');
 
 api.addFiles('lib/client/modals.html', 'client');
 api.addFiles('lib/client/modals.coffee', 'client');
 api.addFiles('lib/client/modals.less', 'client');

});

import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

if (config.forceHttps && window.location.protocol !== "https:") {
  window.location.replace(window.location.href.replace(/^[^\/]+/, "https:"));
  throw "transitioning to https";
}

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

if (config.serviceWorker.enabled) {
  if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('./service-worker.js', {scope: './'})
         .catch(function(error) {
             console.error('Error registering service worker:'+error);
         });
   } else {
       console.error('service worker not supported');
   }
}

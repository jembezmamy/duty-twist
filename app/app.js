import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('./service-worker.js', {scope: './'})
       .catch(function(error) {
           alert('Error registering service worker:'+error);
       });
 } else {
     alert('service worker not supported');
 }

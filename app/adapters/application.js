import DS from 'ember-data';
import LocalStorageFallback from "duty-twist/mixins/local-storage-fallback";
import config from 'duty-twist/config/environment';

export default DS.RESTAdapter.extend(LocalStorageFallback, {
  host: Ember.computed(function() {
    return [
      config.backendless.host,
      config.backendless.applicationId,
      config.backendless.apiKey
    ].join("/");
  }),
  namespace: config.backendless.namespace,

  headers: {
    "application-type": "REST",
    "Content-Type": "application/json"
  }
});

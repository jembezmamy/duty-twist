import DS from 'ember-data';
import LocalStorageFallback from "duty-twist/mixins/local-storage-fallback";
import config from 'duty-twist/config/environment';

export default DS.RESTAdapter.extend(LocalStorageFallback, {
  host: config.backendless.host,
  namespace: config.backendless.namespace,

  headers: {
    "application-id": config.backendless.applicationId,
    "secret-key": config.backendless.secretKey,
    "application-type": "REST",
    "Content-Type": "application/json"
  }
});

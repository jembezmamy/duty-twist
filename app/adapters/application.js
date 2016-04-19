import Ember from 'ember';
import FirebaseAdapter from 'emberfire/adapters/firebase';
import LocalStorageFallback from "duty-twist/mixins/local-storage-fallback";

const { inject } = Ember;

export default FirebaseAdapter.extend(LocalStorageFallback, {
  firebase: inject.service(),
});

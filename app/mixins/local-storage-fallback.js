import Ember from "ember";

function cachingProxy(buildId) {
  return function() {
    let cacheId = buildId(...arguments);
    return new Ember.RSVP.Promise((resolve, reject) => {
      this._super(...arguments).then((response) => {
        resolve(this.setResponseCache(cacheId, response));
      }, (error) => {
        let response = this.getResponseCache(cacheId);
        response ? resolve(response) : reject(error);
      });
    });
  }
}

export default Ember.Mixin.create({
  localStorage: Ember.inject.service(),

  createRecord: cachingProxy((store, type, snapshot) => { return `${type}:${snapshot.id}`; }),
  updateRecord: cachingProxy((store, type, snapshot) => { return `${type}:${snapshot.id}`; }),
  findRecord: cachingProxy((store, type, id) => { return `${type}:${id}`; }),
  findAll: cachingProxy((store, type) => { return `${type}:index`; }),
  query: cachingProxy((store, type, query) => { return `${type}:${JSON.stringify(query)}`; }),

  setResponseCache(id, response) {
    if (response) {
      this.set(`localStorage.dataFallback:${id}`, response);
    }
    return response;
  },

  getResponseCache(id) {
    return this.get(`localStorage.dataFallback:${id}`);
  }
});

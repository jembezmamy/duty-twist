import DS from "ember-data";

export default DS.RESTSerializer.extend({
  attrs: {
    id: "objectId"
  },

  _normalizeResponse(store, primaryModelClass, payload, id, requestType, isSingle) {
    let normalizedPayload = {};
    normalizedPayload[primaryModelClass.modelName] = payload.data || payload;
    return this._super(store, primaryModelClass, normalizedPayload, id, requestType, isSingle);
  },

  serializeIntoHash(data, type, record, options) {
    jQuery.extend(data, this.serialize(record, options));
  },

  serialize(snapshot, options) {
    let data = this._super(snapshot, options);
    data.___class = snapshot.modelName.pluralize();
    data.objectId = data.id;
    return data;
  }
});

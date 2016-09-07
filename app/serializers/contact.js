import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType)
  {
        console.log('1',payload);

    payload = {contact: payload.records[0]};
    console.log('2',payload);

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
  // ,
  // normalizeSingleResponse(store, primaryModelClass, payload, id, requestType)
  // {
  //   payload.posts.user = payload.posts.userId;
  //   delete payload.posts.userId;
  //
  //   return this._super(store, primaryModelClass, payload, id, requestType);
  // },
  // normalizeArrayResponse(store, primaryModelClass, payload, id, requestType)
  // {
  //   payload.posts.forEach((post) => {
  //     post.user = post.userId;
  //     delete post.userId;
  //   });
  //   return this._super(store, primaryModelClass, payload, id, requestType);
  // }
});

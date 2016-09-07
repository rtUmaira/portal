import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(transition) {
  //     // console.log('session: ', (this.get('session').isAuthenticated));
      if (this.get('contactID') === undefined || this.get('contactID') === '0') {
        // console.log('i');
        this.transitionTo('signin');
      } else {
        // console.log('s');
        this.transitionTo('index');
      }
    //  console.log('contacts', this.store.findAll('contact'));
    }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
	    logout() {
		    // set contactID = undefined and tranistion to sign in page
	        this.set('contactID', '0');
	        this.transitionToRoute('signin');

	    }
	}
});
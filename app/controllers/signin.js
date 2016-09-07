import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
	    login() {
	      	var u_name = this.get('username').split(" ");
	      	var password = this.get('password');
	      	var that = this;
			// console.log(u_name[0]+ 'ggggggg' + u_name[1]);
			this.store.queryRecord('contact', {
						   "filter":[
						      {
						         "first_name":{
						            "$starts": u_name[0]
						         },
						         "last_name": {
						            "$ends" : u_name[1]
						         }
						      }
						   ]
						}).then(function(data){
			                // that.set('mydata',data);
                			// console.log('data', data.get('id'));
			               	that.set('contactID', data.get('id'));
			            },
			            function(error){
			                alert(error);
			            });
	      this.transitionToRoute('index');

	    }
	}
});

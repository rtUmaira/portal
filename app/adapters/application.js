import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://localhost/SugarPro-Full-7.6.0.0',
	namespace: 'rest/v10',
	pathForType: function(modelName) {
		modelName = modelName+'s';
				// console.log('modelName', modelName);

       return Ember.String.capitalize(modelName);
   },
	headers: Ember.computed('token', function() {
		return {
			'OAuth-Token': this.get('token').token, 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': '*',
							 'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type'
		};
	})
});

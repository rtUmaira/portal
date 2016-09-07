export default  Ember.Object.create({
	// var auth = {
			token: null,
	  	getToken: function() {
				var that = this;
		    $.ajax({
				url: "http://localhost/SugarPro-Full-7.6.0.0/rest/v10/oauth2/token",
				async: false,
				type: "POST",
				data: {  "grant_type": "password", "client_id": "sugar", "client_secret" : "", "username" : "admin",
				            "password": "123", "platform" : "base"},
				headers : {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': '*',
				             'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type'},
				dataType: "json",
				success: function(result) {
					 that.set('token', result.access_token);
				},
				error: function(result) {
				    console.log('error while oauth', result);
				}
			});
		}
	// }

});

// Token.toString = function() { return 'Token'};
// export default Token;

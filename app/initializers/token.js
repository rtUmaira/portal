import sugarOauth from '../utils/token';

export function initialize(application)
{
		var class_token = sugarOauth;
		class_token.getToken();
		// console.log('token',class_token.token);
		application.register('util:aouth', class_token, {instantiate:false});

		application.inject('route', 'token', 'util:aouth');
		application.inject('adapter', 'token', 'util:aouth');

		application.inject('route', 'ContactID', 'util:aouth');
		application.inject('controller', 'ContactID', 'util:aouth');

}

export default {
  name: 'token',
  initialize
};

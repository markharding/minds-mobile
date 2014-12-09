/**
 * Minds::mobile
 * OAuth 2.0 service
 * 
 * THIS CURRENTLY DOES NOT DO AN API REQUEST, BUT WILL SOON
 * 
 * @author Mark Harding
 */

define(['angular'], function (angular) {
    "use strict";

    var factory = function ($rootScope, OAuthConfig, $http) {

		var time = Math.round(new Date().getTime() / 1000);

        return {
        	
			client_id : OAuthConfig.client_id,
			client_secret : OAuthConfig.client_secret,
			redirect_uri : $rootScope.node_url + 'news',
			//refresh_token : localStorage.getItem('refresh_token'),
			access_token : null,
			timestamp : 0,
			
			login: function(username, password, callback){

				$http({
					method : 'POST',
					url: $rootScope.node_url + 'oauth2/token',
					data: {
						'grant_type': 'password',
						'client_id': '389108873258078208',
						'client_secret': '360aebf8fe2747c5af044a2c8a3e69eb',
						'username': username,
						'password': password
					},
					headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
				}).
				  success(function(data, status, headers, config) {
				  	alert('woohooo! you\'re access token is' + data.access_token);
				  	alert('we are now going to commence the grant');
			
				  }).
				  error(function(data, status, headers, config) {
				    console.log('fail..', data, status, headers, config);
				    alert('fail...');
				  });
			
				//callback(true);
				
			}

		};

    };

    factory.$inject = ['$rootScope', 'OAuthConfig', '$http'];
    return factory;
});
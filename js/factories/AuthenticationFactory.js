/**
 * Created by BlueX on 6/9/16.
 */
angular
    .module('TK-WEB-PITCH')
    .factory('AuthenticationFactory',function($http){

        function login(userName,password){

            return $http.get('http://10.10.10.245:8888/TK-API/sportclubs.json');
        }
        return {
            login: login

        }

    });
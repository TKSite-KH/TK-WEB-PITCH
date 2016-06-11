/**
 * Created by BlueX on 6/9/16.
 */
angular
    .module('TK-WEB-PITCH')
    .factory('HttpFactory',function($http){

        var config = {headers:  {
            'Content-Type': 'application/x-www-form-urlencoded',
            'secret_key' : '123'}};

        function login(url,data){
            return $http.post(url, data, config);
        }
        return {
            login: login

        }




    });
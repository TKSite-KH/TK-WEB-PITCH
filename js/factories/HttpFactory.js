/**
 * Created by BlueX on 6/9/16.
 */
angular
    .module('TK-WEB-PITCH')
    .factory('HttpFactory',function($http){

        var config = {headers:  {
            'Content-Type': 'application/x-www-form-urlencoded',
            'secret_key' : '123'

        }};

        function login(url,data){
            $http.defaults.useXDomain = true;
            delete $http.defaults.headers.common['X-Requested-With'];
            return $http.post(url, data, config);
            //$http.get('http://192.168.1.101:8888/TK-API/sportclubs.json')
        }
        return {
            login: login

        }




    });
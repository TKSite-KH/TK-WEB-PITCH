/**
 * Created by BlueX on 6/11/16.
 */
angular
    .module('TK-WEB-PITCH')
    .factory('ConstantFactory', function(localStorageService){

            var API_URL = 'http://10.10.10.155:8888/TK-API/';
            //  return $http.get('http://192.168.1.100:8888/TK-API/sportclubs.json', config);
        return {
            API_URL: API_URL

        }

    });
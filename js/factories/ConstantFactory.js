/**
 * Created by BlueX on 6/7/16.
 */
angular
    .module('TK-WEB-PITCH')
    .factory('ConstantFactory', function($http){



        var testData = []

        function getData(){
            return $http.get('data/data.json');
        }

        return {
            getData: getData
        }

    });
/**
 * Created by BlueX on 6/7/16.
 */
angular
    .module('TK-WEB-PITCH',[])
    .controller('AuthenticationController', function($scope, AuthenticationFactory){
        //alert("hello");
        $scope.userEmail = "";
        $scope.userPassword = "";
        $scope.login = function(){
            AuthenticationFactory.login($scope.userEmail, $scope.userPassword).success(function(data){
                alert("success");
            }).error(function(error){
                //alert(error);
                console.log(error);
            });

        }

    });
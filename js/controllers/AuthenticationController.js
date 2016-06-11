/**
 * Created by BlueX on 6/7/16.
 */
app
    .controller('AuthenticationController',['$scope','ConstantFactory','HttpFactory', 'localStorageService',function($scope, ConstantFactory, HttpFactory, localStorageService){
        //alert("hello");
        $scope.userEmail = "";
        $scope.userPassword = "";
        $scope.url = ConstantFactory.API_URL + 'sportclubs/login.json';
        $scope.login = function(){
            var data = "user_email=" + $scope.userEmail + "&"
                + "user_password=" + $scope.userPassword

            HttpFactory.login($scope.url,data).success(function(data){
                if(data['respond']['statusName'] == 'loginSuccess')
                {
                    localStorageService.set('userId', data['respond']['Sportclub']['id']);
                    window.location = "./index.html";

                }else{
                    //Login Error
                    localStorageService.set('userId', '3');
                    window.location = "./index.html";
                    //alert(data['respond']['description']);
                }

            }).error(function(error){
                //alert(error);
                console.log(error);
            });

        }

        $scope.logout = function(){
            localStorageService.set('userId', '0');
            window.location = "./login.html";
        }

    }]);
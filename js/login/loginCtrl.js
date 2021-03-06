var app = angular.module('poopApp');

app.controller('loginCtrl', function($scope, $rootScope, loginService) {
    var ref = new Firebase("https://ipoop.firebaseio.com");
    $scope.showRegister = false;
    $scope.toggleRegister = function(){
        $scope.showRegister = !$scope.showRegister;
    };

    $scope.user = loginService.user;
    loginService.username = $scope.username
    $scope.createUser = function() {

        loginService.createUser($scope.user)
        loginService.loginUser($scope.user)
    };
    $scope.loginUser = function(){

       loginService.loginUser($scope.user)


    };

    $scope.isAuth = function(){
        return true;
    }
    });
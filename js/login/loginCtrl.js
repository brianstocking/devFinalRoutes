var app = angular.module('poopApp');

app.controller('loginCtrl', function($scope, loginService) {
    var ref = new Firebase("https://ipoop.firebaseio.com");
    $scope.user ={}
    $scope.createUser = function() {

        loginService.createUser($scope.user)
    }
    $scope.loginUser = function(){

       loginService.loginUser($scope.user)

    }

    $scope.isAuth = function(){
        return true;
    }
    });
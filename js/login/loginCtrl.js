var app = angular.module('poopApp');

app.controller('loginCtrl', function($scope) {
    var ref = new Firebase("https://ipoop.firebaseio.com");

    $scope.createUser = function() {

        ref.createUser({
            email: $scope.user.name,
            password: $scope.user.PW
        }, function (error, userData) {
            if (error) {
                console.log("Error creating user:", error);
            } else {
                console.log("Successfully created user account with uid:", userData.uid);
            }


        });
    }

    $scope.loginUser = function(){

        ref.authWithPassword({
            email    : $scope.user.email,
            password : $scope.user.password
        }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
            }
        });
    }
    });
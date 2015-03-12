var app = angular.module('poopApp');

app.service('loginService', function ($firebase) {

    var ref = new Firebase("https://ipoop.firebaseio.com");
    this.createUser = function (user) {

        ref.createUser({
            email: user.name,
            password: user.PW
        }, function (error, userData) {
            if (error) {
                console.log("Error creating user:", error);
            } else {
                console.log("Successfully created user account with uid:", userData.uid);
            }


        });
    }
    this.loginUser = function (user) {

        ref.authWithPassword({
            email: user.email,
            password: user.password
        }, function (error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                location.hash = '#/pageOne';
                console.log("Authenticated successfully with payload:", authData);
            }
        });
    }

    this.isAuth = function () {
        var authData = ref.getAuth();
        if (authData){
            console.log('auth user id' + authData.uid)
            return true
        }
        console.log('not logged in')
        return false
    }
});
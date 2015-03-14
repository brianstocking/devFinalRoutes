var app = angular.module('poopApp');

app.service('loginService', function ($firebase) {
    var myUser = null;
    var ref = new Firebase("https://ipoop.firebaseio.com" );

    var FBEmail = function(email){
        var key = email.replace('@', "^");
        if (key.indexOf('.') !==-1){
            return key.split('.').join('*');
        }
        return key
    };

    //var addNewUsertoFB = function(newUser){
    //    var key = FBEmail(newUser.email)
    //    ref.child('user').child(key).set(newUser)
    //};

    this.createUser = function (user) {

        ref.createUser({
            email: user.name,
            password: user.PW,
        }, function (error, userData) {
            if (error) {
                console.log("Error creating user:", error);
            } else {
                console.log("Successfully created user account with uid:", userData.uid);
                //addNewUsertoFB({email: user.name});
            }


        });
    };
    this.loginUser = function (user) {

        ref.authWithPassword({
            email: user.email,
            password: user.password,
        }, function (error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                myUser = user.email;
                location.hash = '#/pageOne';
                console.log("Authenticated successfully with payload:", authData);
            }
        });
    };

    this.getUser = function () {
        console.log(ref.getAuth());
        return FBEmail(ref.getAuth().password.email);
    }

    this.isAuth = function () {
        var authData = ref.getAuth();
        if (authData){
            //console.log(authData);
            console.log('auth user id ' + authData.uid);
            return true
        }
        console.log('not logged in');
        return false
    }


});
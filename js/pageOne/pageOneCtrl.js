var app = angular.module('poopApp')

app.controller('pageOneCtrl', function ($scope, $firebase, mainService, loginService) {
    var user = loginService.getUser();
    var ref = new Firebase("https://ipoop.firebaseio.com/" + "user/" + user + '/' + mainService.date + "/times");


    $scope.setValue = function(value){
        ref.set({
            times: value
        })
        mainService.setNumberTimes(value);
    }


});

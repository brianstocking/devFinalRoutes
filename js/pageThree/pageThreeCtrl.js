var app = angular.module('poopApp')




app.controller('pageThreeCtrl', function($scope, $firebase, mainService, loginService){
    var user = loginService.getUser();
    var ref = new Firebase("https://ipoop.firebaseio.com/" + "user/" + user + '/' + mainService.date + "/stomach");

    $scope.stomachFun = function(){
        ref.set({
            stomach: $scope.newData

        })
    }
});

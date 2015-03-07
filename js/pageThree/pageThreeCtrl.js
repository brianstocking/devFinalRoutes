var app = angular.module('poopApp')




app.controller('pageThreeCtrl', function($rootScope, $scope, $firebase, mainService){

    var ref = new Firebase("https://ipoop.firebaseio.com/" + mainService.date + "/stomach");

    $scope.stomachFun = function(){
        ref.set({
            stomach: $scope.newMessages

        })
    }
})

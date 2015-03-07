var app = angular.module('poopApp')




app.controller('pageTwoCtrl', function($scope, $firebase, mainService){


    var ref = new Firebase("https://ipoop.firebaseio.com/"+ mainService.date +"/con");

    $scope.conFun = function(){
        ref.set({
            con: $scope.newMessages
        })



    }

})

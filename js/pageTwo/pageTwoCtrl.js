var app = angular.module('poopApp')




app.controller('pageTwoCtrl', function($scope, $firebase, mainService){


    var ref = new Firebase("https://ipoop.firebaseio.com/"+ mainService.date +"/consistency");

    $scope.conFun = function(){
        ref.set({
            consistency: $scope.newData
        })



    }

})

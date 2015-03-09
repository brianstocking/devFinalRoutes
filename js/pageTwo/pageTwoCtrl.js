var app = angular.module('poopApp')




app.controller('pageTwoCtrl', function($scope, $firebase, mainService){


    var ref = new Firebase("https://ipoop.firebaseio.com/"+ mainService.date +"/consistency");
    var consistency = []
    $scope.conFun = function(){
        for(var i = 0; i < $scope.selectorList.length; i++) {
         consistency.push($scope.selectorList[i].newData)


        };
            ref.set(consistency)




    };



    $scope.numberSelectors = mainService.getNumberTimes();

    $scope.selectorList = [];
    for (var i = 0; i < $scope.numberSelectors; i++) {
        $scope.selectorList.push({id: i, newData: 5});
    }


});

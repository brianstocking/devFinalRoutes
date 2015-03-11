var app = angular.module('poopApp')




app.controller('pageTwoCtrl', function($scope, $firebase, mainService){


    var ref = new Firebase("https://ipoop.firebaseio.com/"+ mainService.date +"/consistency");
    var consistency = {};
    var num_items = 0;
    $scope.conFun = function(){
        for(var i = 0; i < $scope.selectorList.length; i++) {
            consistency[num_items] = {
                value: $scope.selectorList[i].newData
            };
            num_items++;

        }

            ref.set(consistency)
    };



    $scope.numberSelectors = mainService.getNumberTimes();

    $scope.selectorList = [];
    for (var i = 0; i < $scope.numberSelectors; i++) {
        $scope.selectorList.push({id: i, newData: 5});
    }


});

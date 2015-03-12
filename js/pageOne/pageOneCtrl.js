var app = angular.module('poopApp')

app.controller('pageOneCtrl', function ($scope, $firebase, mainService, loginService) {
    var ref = new Firebase("https://ipoop.firebaseio.com/"  + mainService.date + "/times");


    $scope.timesFun = function () {
        ref.set({
            times: $scope.numberTimes
        });
        mainService.setNumberTimes($scope.numberTimes);

    };
$scope.numberTimes = mainService.getNumberTimes();

});

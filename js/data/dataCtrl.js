var app = angular.module('poopApp');

app.controller('dataCtrl', function($scope, $firebase, loginService ){
    var user = loginService.getUser();


    var ref = new Firebase('ipoop.firebaseio.com/');

    var sync = $firebase(ref.child('user/' + user));

    $scope.data = sync.$asArray();




    //console.log($scope.data)

    $scope.showData = false;
    $scope.toggleData = function(){
        $scope.showData = !$scope.showData;
    };

});

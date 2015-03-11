var app = angular.module('poopApp');

app.controller('dataCtrl', function($scope, $firebase){
    var ref = new Firebase('ipoop.firebaseio.com/TueMar102015')

    var sync = $firebase(ref)

    $scope.data = sync.$asArray();

    console.log($scope.data.stomach)

});

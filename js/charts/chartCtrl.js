var app = angular.module('poopApp');

app.controller('chartCtrl', function($scope, $firebase, loginService){


    var user = loginService.getUser();


    var ref = new Firebase('ipoop.firebaseio.com/');

    var sync = $firebase(ref.child('user/' + user));

    $scope.firebaseData = sync.$asArray();
    $scope.firebaseData.$loaded().then(function(res){
        console.log($scope.firebaseData)
        $scope.data = {
            series: ['Times'],
            data: [{
                x: xData(),
                y:  yData()


            } ]
        };
    })
    function yData () {
        var newArray = [];

        for (var i = 0; i < $scope.firebaseData.length; i++) {
            newArray.push(Number($scope.firebaseData[i].times.times))
        }
        console.log(newArray);
        return newArray;
    }
    function xData () {
        var newXArray = [];

        for (var i = 0; i < $scope.firebaseData.length; i++) {
            newXArray.push($scope.firebaseData[i].$id)
        }
        console.log(newXArray);
        return newXArray;
    }



        $scope.chartType = 'bar';

        $scope.config1 = {
            labels: false,
            title: "iPoop",
            legend: {
                display: true,
                position: 'left'
            },
            innerRadius: 0
        };


});
//app.controller( 'chartCtrl',function($scope) {
//    $scope.config = {
//        title: 'Products',
//        labels: false,
//
//        legend: {
//            display: true,
//            //could be 'left, right'
//            position: 'right'
//        }
//    };
//
//    $scope.data = {
//        series: ['Sales', 'Income', 'Expense'],
//        data: [{
//            x: "Laptops",
//            y: [100, 500, 0],
//        }, {
//            x: "Desktops",
//            y: [300, 100, 100]
//        },
//        ]
//    };
//})

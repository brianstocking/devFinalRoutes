var app = angular.module('poopApp');

app.controller('chartCtrl', function($scope, $firebase, loginService){


    var user = loginService.getUser();


    var ref = new Firebase('ipoop.firebaseio.com/');

    var sync = $firebase(ref.child('user/' + user));

    $scope.firebaseData = sync.$asArray();
    $scope.firebaseData.$loaded().then(function(res){
        $scope.data = {
            series: ['Times','stomach'],
            data: [{
                x: [xData()[0]],
                y:  [yData()[0], syData()[0]]
            } ,
                {
                    x: [xData()[1]],
                    y:  [yData()[1], syData()[1]]


                },
                {
                    x: [xData()[2]],
                    y:  [yData()[2], syData()[2]]


                },
                {
                    x: [xData()[3]],
                    y:  [yData()[3], syData()[3]]


                },
                {
                    x: [xData()[4]],
                    y:  [yData()[4], syData()[4]]


                },
                {
                    x: [xData()[5]],
                    y:  [yData()[5], syData()[5]]


                },
                {
                    x: [xData()[6]],
                    y:  [yData()[6], syData()[6]]


                },


            ]
        };
    })
    function yData () {
        var newArray = [];
        if($scope.firebaseData.length >= 7) {


            for (var i = $scope.firebaseData.length - 7; i < $scope.firebaseData.length; i++) {
                newArray.push(Number($scope.firebaseData[i].times.times))
            }
        }else{
                for(var i = 0; i < $scope.firebaseData.length; i++)
                    newArray.push(Number($scope.firebaseData[i].times.times))

            }
        return newArray;
    }
    function xData () {
        var newXArray = [];
        if($scope.firebaseData.length >= 7) {

            for (var i = $scope.firebaseData.length - 7; i < $scope.firebaseData.length; i++) {
                newXArray.push($scope.firebaseData[i].$id)
            }
        }else{
            for(var i = 0; i < $scope.firebaseData.length; i++)
            newXArray.push($scope.firebaseData[i].$id)

        }
        return newXArray;
    }

    function syData () {
        var newSYArray = [];
        if($scope.firebaseData.length >= 7) {


            for (var i = $scope.firebaseData.length - 7; i < $scope.firebaseData.length; i++) {
                newSYArray.push(Number($scope.firebaseData[i].stomach.stomach))
            }
        }else{
            for(var i = 0; i < $scope.firebaseData.length; i++)
            newSYArray.push(Number($scope.firebaseData[i].stomach.stomach))

        }
        return newSYArray;
    }



    $scope.chartType = 'bar';

    $scope.config = {
        labels: true,
        legend: {
            display: true,
            position: 'left'
        },
        innerRadius: 0
    };

    $scope.showChart = false;
    $scope.toggleChart = function() {
        $scope.showChart = !$scope.showChart;
    }

});


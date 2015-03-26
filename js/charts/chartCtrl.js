var app = angular.module('poopApp');

app.controller('chartCtrl', function($scope, $firebase, loginService){


    var user = loginService.getUser();


    var ref = new Firebase('ipoop.firebaseio.com/');

    var sync = $firebase(ref.child('user/' + user));

    $scope.firebaseData = sync.$asArray();
    $scope.firebaseData.$loaded().then(function(res){
        console.log($scope.firebaseData)
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

        for (var i =  $scope.firebaseData.length - 7; i < $scope.firebaseData.length; i++) {
            newArray.push(Number($scope.firebaseData[i].times.times))
        }
        //console.log(newArray);
        return newArray;
    }
    function xData () {
        var newXArray = [];

        for (var i = $scope.firebaseData.length - 7; i < $scope.firebaseData.length; i++) {
            newXArray.push($scope.firebaseData[i].$id)
        }
        //console.log(newXArray);
        return newXArray;
    }

    function syData () {
        var newSYArray = [];

        for (var i =  $scope.firebaseData.length - 7; i < $scope.firebaseData.length; i++) {
            newSYArray.push(Number($scope.firebaseData[i].stomach.stomach))
        }
        //console.log(newSYArray);
        return newSYArray;
    }



    $scope.chartType = 'bar';

    $scope.config = {
        labels: false,
        title: "iPoop",
        legend: {
            display: true,
            position: 'right'
        },
        innerRadius: 0
    };


});


var app = angular.module('poopApp');

app.controller('chartCtrl', function($scope, $firebase, loginService){


    var user = loginService.getUser();


    var ref = new Firebase('ipoop.firebaseio.com/');

    var sync = $firebase(ref.child('user/' + user));

    $scope.firebaseData = sync.$asArray();
    $scope.firebaseData.$loaded().then(function(res){
        //console.log($scope.firebaseData)
        $scope.data = {
            series: ['Times'],
            data: [{
                x: [xData()[0]],
                y:  [yData()[0]]
            } ,
                {
                    x: [xData()[1]],
                    y:  [yData()[1]]


                },
                {
                    x: [xData()[2]],
                    y:  [yData()[2]]


                },
                {
                    x: [xData()[3]],
                    y:  [yData()[3]]


                },
                {
                    x: [xData()[4]],
                    y:  [yData()[4]]


                },
                {
                    x: [xData()[5]],
                    y:  [yData()[5]]


                },
                {
                    x: [xData()[6]],
                    y:  [yData()[6]]


                },


            ]
        };
    })
    function yData () {
        var newArray = [];

        for (var i = 0; i < $scope.firebaseData.length; i++) {
            newArray.push(Number($scope.firebaseData[i].times.times))
        }
        //console.log(newArray);
        return newArray;
    }
    function xData () {
        var newXArray = [];

        for (var i = 0; i < $scope.firebaseData.length; i++) {
            newXArray.push($scope.firebaseData[i].$id)
        }
        //console.log(newXArray);
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


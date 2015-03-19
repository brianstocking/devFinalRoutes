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
                x: "times",
                y:  yData()

                //function(){
                //        for (var i = 0; i<$scope.data.length; i++){
                //            $scope.data[i].times.times = Number($scope.data[i].times.times)
                //        }
                //        console.log($scope.data);
                //
                //    }
                //


            } ]
        };
    })
    function yData () {
        var newArray = [];
        //console.log($scope.firebaseData.length);
        for (var i = 0; i < $scope.firebaseData.length; i++) {
            //console.log($scope.firebaseData[i].times.times);
            newArray.push(Number($scope.firebaseData[i].times.times))
        }
        console.log(newArray);
        return newArray;
    }

    //$scope.data = {
    //        series: ['Times'],
    //        data: [{
    //            x: "times",
    //            y:  yData()
    //
    //            //function(){
    //            //        for (var i = 0; i<$scope.data.length; i++){
    //            //            $scope.data[i].times.times = Number($scope.data[i].times.times)
    //            //        }
    //            //        console.log($scope.data);
    //            //
    //            //    }
    //            //
    //
    //
    //        } ]
    //    };
//console.log($scope.data.data[0].y)


        $scope.chartType = 'bar';

        $scope.config1 = {
            labels: false,
            title: "Products",
            legend: {
                display: true,
                position: 'left'
            },
            innerRadius: 0
        };

        $scope.config2 = {
            labels: false,
            title: "HTML-enabled legend",
            legend: {
                display: true,
                htmlEnabled: true,
                position: 'right'
            },
            lineLegend: 'traditional'
        }

});

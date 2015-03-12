var app = angular.module('poopApp');

app.service('mainService', function(){
    var numberTimes = 0;
    //this.date = new Date().toDateString()
this.date = "Mon Mar 09 2015"

    this.getNumberTimes = function () {
        return numberTimes;
    };
    this.setNumberTimes = function (num) {
        numberTimes = num;
    }
});



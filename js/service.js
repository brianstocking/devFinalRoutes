var app = angular.module('poopApp');

app.service('mainService', function(){
    var numberTimes = 0;
    this.date = new Date().toDateString()
    this.getNumberTimes = function () {
        return numberTimes;
    };
    this.setNumberTimes = function (num) {
        numberTimes = num;
    }
});



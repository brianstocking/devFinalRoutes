var app = angular.module('poopApp');

app.service('mainService', function(){
    var numberTimes = 0;
    this.date = moment().format('ll');
    this.getNumberTimes = function () {
        return numberTimes;
    };
    this.setNumberTimes = function (num) {
        numberTimes = num;
    }
});



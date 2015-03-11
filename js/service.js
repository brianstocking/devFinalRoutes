var app = angular.module('poopApp');

app.service('mainService', function(){
    var numberTimes = 0;
    var theDate = new Date().toDateString()
    this.date = theDate.split(' ').join('')


    this.getNumberTimes = function () {
        return numberTimes;
    };
    this.setNumberTimes = function (num) {
        numberTimes = num;
    }
});



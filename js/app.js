var app = angular.module('poopApp',['ngRoute', 'firebase'])

app.config(function ($routeProvider) {

    $routeProvider
        .when('/pageOne', {
            templateUrl: 'js/pageOne/pageOneTmpl.html',
            controller: 'pageOneCtrl'
        })
        .when('/pageTwo', {
            templateUrl: 'js/pageTwo/pageTwoTmpl.html',
            controller: 'pageTwoCtrl'
        })
        .when('/pageThree', {
            templateUrl: 'js/pageThree/pageThreeTmpl.html',
            controller: 'pageThreeCtrl'
        })
        .when('/login',{
            templateUrl: 'js/login/loginTmpl.html',
            controller: 'loginCtrl'
        })

        .when('/charts', {
            templateUrl: 'js/charts/chartTmpl.html',


        })

        .when('/data', {
            templateUrl: 'js/data/dataTmpl.html',
            controller: 'dataCtrl'
        })

        .otherwise({
            redirectTo: '/login'
        })
})
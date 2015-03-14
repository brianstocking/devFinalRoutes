var app = angular.module('poopApp',['ngRoute', 'firebase'])

app.config(function ($routeProvider) {

    $routeProvider
        .when('/pageOne', {
            templateUrl: 'js/pageOne/pageOneTmpl.html',
            controller: 'pageOneCtrl',
            authenticate: true
        })
        .when('/pageTwo', {
            templateUrl: 'js/pageTwo/pageTwoTmpl.html',
            controller: 'pageTwoCtrl',
            authenticate: true

        })
        .when('/pageThree', {
            templateUrl: 'js/pageThree/pageThreeTmpl.html',
            controller: 'pageThreeCtrl',
            authenticate: true

        })
        .when('/login',{
            templateUrl: 'js/login/loginTmpl.html',
            controller: 'loginCtrl'
        })

        .when('/charts', {
            templateUrl: 'js/charts/chartTmpl.html',
            authenticate: true



        })

        .when('/data', {
            templateUrl: 'js/data/dataTmpl.html',
            controller: 'dataCtrl',
            authenticate: true

        })

        .otherwise({
            redirectTo: '/data'
        })

});

app.run(function($rootScope, loginService, $routeParams){
    $rootScope.$on('$routeChangeStart', function(event,next, current){
        if(next.$$route && next.$$route.authenticate && !loginService.isAuth()){
            location.hash = '#/login';
        }

    })
});
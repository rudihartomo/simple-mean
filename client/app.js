var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
            controller: 'TransactionsController',
            templateUrl: 'views/transaction/summary.html'
        })
        .when('/summary/transaction/:date', {
            controller: 'TransactionsController',
            templateUrl: 'views/transaction/summary_date.html'
        })
        .when('/categories', {
            controller: 'CategoriesController',
            templateUrl: 'views/category/index.html'
        })
        .when('/categories/details/:id', {
            controller: 'CategoriesController',
            templateUrl: 'views/category/detail.html'
        })
        .when('/categories/add', {
            controller: 'CategoriesController',
            templateUrl: 'views/category/add.html'
        })
        .when('/categories/edit/:id', {
            controller: 'CategoriesController',
            templateUrl: 'views/category/edit.html'
        })

    .when('/items', {
            controller: 'ItemsController',
            templateUrl: 'views/item/index.html'
        })
        .when('/items/details/:id', {
            controller: 'ItemsController',
            templateUrl: 'views/item/detail.html'
        })
        .when('/items/add', {
            controller: 'ItemsController',
            templateUrl: 'views/item/add.html'
        })
        .when('/items/edit/:id', {
            controller: 'ItemsController',
            templateUrl: 'views/item/edit.html'
        })

    .when('/transactions', {
            controller: 'TransactionsController',
            templateUrl: 'views/transaction/index.html'
        })
        .when('/transactions/details/:id', {
            controller: 'TransactionsController',
            templateUrl: 'views/transaction/detail.html'
        })
        .when('/transactions/add', {
            controller: 'TransactionsController',
            templateUrl: 'views/transaction/add.html'
        })
        .when('/transactions/edit/:id', {
            controller: 'TransactionsController',
            templateUrl: 'views/transaction/edit.html'
        })

    .otherwise({
        redirectTo: '/'
    });
});
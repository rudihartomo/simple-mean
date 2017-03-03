var myApp = angular.module('myApp');

myApp.controller('ItemsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    console.log('ItemsController loaded...');

    $scope.getItems = function() {
        $http.get('/api/items').success(function(response) {
            $scope.items = response;
        });
    }

    $scope.getCategories = function() {
        $http.get('/api/categories').success(function(response) {
            $scope.categories = response;
        });
    }

    $scope.getItem = function() {
        var id = $routeParams.id;
        $http.get('/api/items/' + id).success(function(response) {
            $scope.item = response;
        });
    }

    $scope.addItem = function() {
        console.log($scope.item);
        $http.post('/api/items/', $scope.item).success(function(response) {
            window.location.href = '#/items';
        });
    }

    $scope.updateItem = function() {
        var id = $routeParams.id;
        $http.put('/api/items/' + id, $scope.item).success(function(response) {
            window.location.href = '#/items';
        });
    }

    $scope.removeItem = function(id) {
        $http.delete('/api/items/' + id).success(function(response) {
            window.location.href = '#/items';
        });
    }
}]);
var myApp = angular.module('myApp');

myApp.controller('CategoriesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    console.log('CategoriesController loaded...');

    $scope.getCategories = function() {
        $http.get('/api/categories').success(function(response) {
            $scope.categories = response;
            console.log(response);
        });
    }

    $scope.getCategory = function() {
        var id = $routeParams.id;
        $http.get('/api/categories/' + id).success(function(response) {
            $scope.category = response;
        });
    }

    $scope.addCategory = function() {
        console.log($scope.category);
        $http.post('/api/categories/', $scope.category).success(function(response) {
            window.location.href = '#/categories';
        });
    }

    $scope.updateCategory = function() {
        var id = $routeParams.id;
        $http.put('/api/categories/' + id, $scope.category).success(function(response) {
            window.location.href = '#/categories';
        });
    }

    $scope.removeCategory = function(id) {
        $http.delete('/api/categories/' + id).success(function(response) {
            window.location.href = '#/categories';
        });
    }
}]);
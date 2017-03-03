var myApp = angular.module('myApp');

myApp.controller('TransactionsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    console.log('TransactionsController loaded...');

    $scope.getSummaryTransactionsToday = function() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var today = dd + "-" + mm + "-" + yyyy;
        
        $http.get('/api/summary/transactions/' + today).success(function(response) {
            $scope.transactions = response;
        });
    }

    $scope.getSummaryTransactions = function() {
        var date= $routeParams.date;
        $http.get('/api/summary/transactions/' + date).success(function(response) {
            $scope.transactions = response;
        });
    }

    $scope.getTransactions = function() {
        $http.get('/api/transactions').success(function(response) {
            $scope.transactions = response;
        });
    }
    $scope.getItems = function() {
        $http.get('/api/items').success(function(response) {
            $scope.items = response;
        });
    }

    $scope.getItemId = function(transaction) {
        transaction.item = {};
        $http.get('/api/items/' + transaction._id).success(function(data) {
            transaction.item = data;
        });
    }

    $scope.getTransaction = function() {
        var id = $routeParams.id;
        $http.get('/api/transactions/' + id).success(function(response) {
            $scope.transaction = response;
        });
    }

    $scope.addTransaction = function() {
        $http.post('/api/transactions/', $scope.transaction).success(function(response) {
            window.location.href = '#/transactions';
        });
    }

    $scope.updateTransaction = function() {
        var id = $routeParams.id;
        $http.put('/api/transactions/' + id, $scope.transaction).success(function(response) {
            window.location.href = '#/transactions';
        });
    }

    $scope.removeTransaction = function(id) {
        $http.delete('/api/transactions/' + id).success(function(response) {
            window.location.href = '#/transactions';
        });
    }
}]);
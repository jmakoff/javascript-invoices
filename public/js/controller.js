app.controller('mainCtrl', ["$scope", "$http", function ($scope, $http) {

    $scope.productsClick = function () {
        $scope.shownContent = 'showProducts'
    };
    $scope.customersClick = function () {
        $scope.shownContent = 'showCustomers'
    };
    $scope.invoicesClick = function () {
        $scope.shownContent = 'showInvoices'
    };
    $scope.mainClick = function () {
        $scope.shownContent = 'showMain';
    };
}]);
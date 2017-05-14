app.controller('mainCtrl', ["$scope", "$http","REST_CONST", function ($scope, $http, REST_CONST) {

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
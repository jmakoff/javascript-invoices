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


    /*$scope.showProducts = false;
    $scope.showCustomers = false;
    $scope.showInvoices = false;
    $scope.showMain = false;
    $scope.productsClick = function () {
        $scope.showProducts = !$scope.showProducts;
        $scope.showCustomers = false;
        $scope.showInvoices = false;
        $scope.showMain = false;
    };
    $scope.customersClick = function () {
        $scope.showCustomers = !$scope.showCustomers;
        $scope.showProducts = false;
        $scope.showInvoices = false;
        $scope.showMain = false;
    };
    $scope.invoicesClick = function () {
        $scope.showInvoices = !$scope.showInvoices;
        $scope.showProducts = false;
        $scope.showCustomers = false;
        $scope.showMain = false;
    }
    $scope.mainClick = function () {
        $scope.showMain = !$scope.showMain;
        $scope.showProducts = false;
        $scope.showCustomers = false;
        $scope.showInvoices = false;
    }

*/
}]);
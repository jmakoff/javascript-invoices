app.controller('newCustomerCtrl', ["$scope", "$http", "REST_CONST","$rootScope", function ($scope, $http, REST_CONST, $rootScope) {
    $scope.createCustomer = function () {
        $http.post(REST_CONST.url + "/customers", {
            name: $scope.newCustomerName,
            phone: $scope.newCustomerPhone,
            address: $scope.newCustomerAddress
        }).then(function (resp) {
            console.log('New Customer Added: ' + resp.data.name );
            $scope.newCustomerName = '';
            $scope.newCustomerPhone = '';
            $scope.newCustomerAddress = '';
            $http.get(REST_CONST.url + '/customers').then(function (resp) {
                    $rootScope.customerData = resp.data;
                }
            )
        })
    }

}]);
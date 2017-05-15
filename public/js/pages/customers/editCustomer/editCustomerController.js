app.controller('editCustomerCtrl', ["$scope", "$http", "REST_CONST","$rootScope", function ($scope, $http, REST_CONST, $rootScope) {
    $rootScope.editCustomer=function (customer_id) {
        $http.get(REST_CONST.url + "/customers/" + customer_id).then(function (resp) {
            $scope.editedCustomerName = resp.data.name;
            $scope.editedCustomerPhone = resp.data.phone;
            $scope.editedCustomerAddress = resp.data.address;
            $scope.editedCustomerId = customer_id;
        })
    };
    $scope.sendEditedData = function () {
        $http.put(REST_CONST.url + "/customers/" + $scope.editedCustomerId, {
            name: $scope.editedCustomerName,
            phone: $scope.editedCustomerPhone,
            address: $scope.editedCustomerAddress
        }).then(function (resp) {
            console.log('Customer Edited: ' + resp.data.id );
            alert('Customer Edited: ' + resp.data.name );
            $http.get(REST_CONST.url + '/customers').then(function (resp) {
                    $rootScope.customerData = resp.data; // for updating customers list
                }
            )
        })
    }

}]);
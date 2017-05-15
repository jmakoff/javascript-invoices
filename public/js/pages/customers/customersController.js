app.controller('customersCntrl', ["$scope", "$http","REST_CONST", "$rootScope", function ($scope, $http, REST_CONST, $rootScope) {
    $http.get(REST_CONST.url + '/customers').then(function (resp) {
        $rootScope.customerData = resp.data;
            console.log(resp)
        }
    );
    $scope.removeCustomerFromTable= function (customerId) {
        var confirm = window.confirm("Are you sure want to delete this customer?");
        console.log(confirm);
        if(confirm) {
            $http.delete(REST_CONST.url + '/customers/' + customerId).then(function (resp) {
                console.log('Deleted customer with id ' + resp.data.id);
                $http.get(REST_CONST.url + '/customers').then(function (resp) {
                        $rootScope.customerData = resp.data;
                    }
                )
            })
        } else {
            console.log("Deleting prevented from console");
            return false
        }
    }

}]);
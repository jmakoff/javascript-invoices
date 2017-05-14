app.controller('customersCntrl', ["$scope", "$http","REST_CONST", "$rootScope", function ($scope, $http, REST_CONST, $rootScope) {
    $http.get(REST_CONST.url + '/customers').then(function (resp) {
        $rootScope.customerData = resp.data;
            console.log(resp)
        }
    );
    $scope.removeCustomerFromTable= function (customerId) {
        $http.delete(REST_CONST.url + '/customers/' + customerId).then(function (resp) {
            console.log('Deleted customer with id '+ resp.data.id);
            $http.get(REST_CONST.url + '/customers').then(function (resp) {
                    $rootScope.customerData = resp.data;
                }
            )
        })
    }

}]);
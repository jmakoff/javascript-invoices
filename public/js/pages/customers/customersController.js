app.controller('customersCntrl', ["$scope", "$http","REST_CONST", function ($scope, $http, REST_CONST) {
    $http.get(REST_CONST.url + '/customers').then(function (resp) {
        $scope.customerData = resp.data;
            console.log(resp)
        }
    )
}]);
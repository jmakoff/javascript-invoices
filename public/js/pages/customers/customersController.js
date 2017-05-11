app.controller('customersCntrl', ["$scope", "$http", function ($scope, $http) {
    $http.get('http://localhost:8000/api/customers').then(function (resp) {
        $scope.customerData = resp.data;
            console.log(resp)
        }
    )
}]);
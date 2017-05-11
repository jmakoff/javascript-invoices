app.controller('productsCntrl', ["$scope", "$http", function ($scope, $http) {
    $http.get('http://localhost:8000/api/products').then(function (resp) {
            $scope.productsData = resp.data;
            console.log(resp)
        }
    )
}]);
app.controller('modalCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://localhost:8000/api/customers').then(function (resp) {
    $scope.customersList = resp.data;
    console.log("Customer list uploaded: " + $scope.customersList);
});
    $http.get('http://localhost:8000/api/products').then(function (resp) {
        $scope.productsList = resp.data;
        console.log("Prodcts list uploaded: " + $scope.productsList);
    });
}]);
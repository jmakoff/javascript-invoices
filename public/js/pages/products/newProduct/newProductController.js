app.controller('newProdCtrl', ["$scope", "$http", "REST_CONST", function ($scope, $http, REST_CONST) {
    $scope.createProduct = function () {
        $http.post(REST_CONST.url + "/products", {
            name: $scope.newProductName,
            price: $scope.newProductPrice
        }).then(function (resp) {
            console.log('New Product Added: ' + resp.data.name+ resp.data.price)
        })
    }
}]);
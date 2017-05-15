app.controller('editProductCtrl', ["$scope", "$http", "REST_CONST","$rootScope", function ($scope, $http, REST_CONST, $rootScope) {
 $rootScope.editProduct = function (product_id) {
     $http.get(REST_CONST.url + '/products/'+ product_id).then(function (resp) {
         $scope.editedProductName = resp.data.name;
         $scope.editedProductPrice = resp.data.price;
     })
 };
    $scope.createProduct = function () {
        $http.post(REST_CONST.url + "/products", {
            name: $scope.newProductName,
            price: $scope.newProductPrice
        }).then(function (resp) {
            console.log('New Product Added: ' + resp.data.name +' '+ resp.data.price + '$');
            $scope.newProductName = '';
            $scope.newProductPrice = '';
            $http.get(REST_CONST.url + '/products').then(function (resp) {
                    $rootScope.productsData = resp.data;
                }
            )
        })
    }

}]);
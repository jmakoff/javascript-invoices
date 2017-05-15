app.controller('editProductCtrl', ["$scope", "$http", "REST_CONST","$rootScope", function ($scope, $http, REST_CONST, $rootScope) {
 $rootScope.editProduct = function (product_id) {
     $http.get(REST_CONST.url + '/products/'+ product_id).then(function (resp) {
         $scope.editedProductName = resp.data.name;
         $scope.editedProductPrice = resp.data.price;
         $scope.editedIndex = product_id;
     })
 };
    $scope.sendEditedProduct = function () {
        $http.put(REST_CONST.url + "/products/" + $scope.editedIndex , {
            name: $scope.editedProductName,
            price: $scope.editedProductPrice
        }).then(function (resp) {
            console.log('Product Edited, index: ' + resp.data.id );
            $http.get(REST_CONST.url + '/products').then(function (resp) {
                    $rootScope.productsData = resp.data;
                }
            )
        })
    }

}]);
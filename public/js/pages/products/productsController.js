app.controller('productsCntrl', ["$scope", "$http","REST_CONST","$rootScope", function ($scope, $http, REST_CONST,$rootScope) {
    $http.get(REST_CONST.url + '/products').then(function (resp) {
        $rootScope.productsData = resp.data;
            console.log(resp)
        }
    );
    $scope.removeProductFromTable= function (productId) {
    $http.delete(REST_CONST.url + '/products/' + productId).then(function (resp) {
        console.log('Deleted product with id '+ resp.data.id);
        $http.get(REST_CONST.url + '/products').then(function (resp) {
            $rootScope.productsData = resp.data;
            }
        )
    })
    }
}]);
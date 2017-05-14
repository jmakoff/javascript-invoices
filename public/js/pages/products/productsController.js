app.controller('productsCntrl', ["$scope", "$http","REST_CONST", function ($scope, $http, REST_CONST) {
    $http.get(REST_CONST.url + '/products').then(function (resp) {
            $scope.productsData = resp.data;
            console.log(resp)
        }
    )
    $scope.addNewProduct = function () {

    }
}]);
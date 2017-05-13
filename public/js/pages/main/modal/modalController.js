app.controller('modalCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://localhost:8000/api/customers').then(function (resp) {
    $scope.customersList = resp.data;
    console.log("Customer list uploaded: " + $scope.customersList);
});
    $http.get('http://localhost:8000/api/products').then(function (resp) {
        (function addQuantityAndDiscount() {
            for(var i = 0; i < resp.data.length; i++ ){
                resp.data[i].quantity = 1;
                resp.data[i].discount = 0;
            }
        })();
        $scope.productsList = resp.data;
        console.dir($scope.productsList);
    });
    $scope.invoiceProducts = [];
    $scope.removeProduct = function (index) {
        $scope.invoiceProducts.splice(index, 1);
    };
    $scope.invoiceTotalPrice = 0;
    $scope.totalDiscount = 0;
    $scope.addProduct = function () {
        $scope.invoiceProducts.push({
            name: $scope.selectedProduct.name,
            product_id: $scope.selectedProduct.id,
            price: $scope.selectedProduct.price,
            quantity: $scope.selectedProduct.quantity,
            discount: $scope.selectedProduct.discount
        });
        (function totalUpd () {
            for (var i=0; i<$scope.invoiceProducts.length; i++){
                $scope.totalDiscount += (+$scope.invoiceProducts[i].price * +$scope.invoiceProducts[i].quantity)/ 100 * +$scope.invoiceProducts[i].discount ;
                $scope.invoiceTotalPrice += ((+$scope.invoiceProducts[i].price * +$scope.invoiceProducts[i].quantity)-$scope.totalDiscount);
            }
        })();

        $http.post("http://localhost:8000/api/invoices/", {
            discount: $scope.totalDiscount.toFixed(2),
            customer_id: $scope.selectedCustomer.id,
            total: $scope.invoiceTotalPrice.toFixed(2)
        }).then(function (resp) {

            $http.post("http://localhost:8000/api/invoices/" + resp.data.id + "/items", {
                product_id: $scope.invoiceProducts[$scope.invoiceProducts.length-1].product_id,
                quantity: $scope.invoiceProducts[$scope.invoiceProducts.length-1].quantity
            }).then(function (resp) {
                console.log(resp);

            })
        })
    };


}]);
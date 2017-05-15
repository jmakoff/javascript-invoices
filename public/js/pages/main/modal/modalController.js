app.controller('modalCtrl', ['$scope', '$http','$rootScope', "REST_CONST", function ($scope, $http, $rootScope, REST_CONST) {
    $http.get(REST_CONST.url + '/customers').then(function (resp) {
    $scope.customersList = resp.data;
    console.log("Customer list uploaded: " + $scope.customersList);
});
    $http.get(REST_CONST.url + '/products').then(function (resp) {
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
        console.log("Deleting URL : " + REST_CONST.url + "/invoices/" + $rootScope.newInvoiceId + "/items/"+ $scope.invoiceProducts[index].invoiceItem_id);

        $http.delete(REST_CONST.url + "/invoices/" + $rootScope.newInvoiceId + "/items/"+ $scope.invoiceProducts[index].invoiceItem_id);

        $scope.totalDiscount -= (+$scope.invoiceProducts[index].price * +$scope.invoiceProducts[index].quantity)/ 100 * +$scope.invoiceProducts[index].discount ;
        $scope.invoiceTotalPrice -= ((+$scope.invoiceProducts[index].price * +$scope.invoiceProducts[index].quantity)-$scope.totalDiscount);
        $scope.invoiceProducts.splice(index, 1);

    };
    $scope.invoiceTotalPrice = 0;
    $scope.totalDiscount = 0;
    $scope.addProduct = function () {
        console.log($scope.selectedProduct);
        $scope.invoiceProducts.push({
            name: $scope.selectedProduct.name,
            product_id: $scope.selectedProduct.id,
            price: $scope.selectedProduct.price,
            quantity: $scope.selectedProduct.quantity,
            discount: $scope.selectedProduct.discount
        });
        (function totalUpd (i) {
                $scope.totalDiscount += (+$scope.invoiceProducts[i].price * +$scope.invoiceProducts[i].quantity)/ 100 * +$scope.invoiceProducts[i].discount ;
                $scope.invoiceTotalPrice += ((+$scope.invoiceProducts[i].price * +$scope.invoiceProducts[i].quantity)-$scope.totalDiscount);

        })( $scope.invoiceProducts.length - 1);
        $http.put(REST_CONST.url + "/invoices/" + $rootScope.newInvoiceId, {
            discount: $scope.totalDiscount.toFixed(2),
            customer_id: $scope.selectedCustomer.id,
            total: $scope.invoiceTotalPrice.toFixed(2)
        }).then(function (resp) {
            $http.post(REST_CONST.url + "/invoices/" + $rootScope.newInvoiceId + "/items", {
                product_id: $scope.invoiceProducts[$scope.invoiceProducts.length-1].product_id,
                quantity: $scope.invoiceProducts[$scope.invoiceProducts.length-1].quantity
            }).then(function (resp) {
                $scope.invoiceProducts[ $scope.invoiceProducts.length-1].invoiceItem_id = resp.data.id;
                console.log("invoiceItem_id:" + $scope.invoiceProducts[ $scope.invoiceProducts.length-1].invoiceItem_id)
            })
        })
    };

    $('#newInvoice').on('hidden.bs.modal', function (e) {
        $scope.selectedProduct = ''; //cleaning modal
        $scope.selectedCustomer = '';
    })


}]);
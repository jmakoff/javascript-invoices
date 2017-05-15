app.controller('mainPageCtrl', ["$scope", "$http", "$rootScope", "REST_CONST", function ($scope, $http, $rootScope, REST_CONST) {
    $http.get('http://localhost:8000/api/invoices').then(function (resp) {
        $scope.invoicesData = resp.data;
    });
    $scope.createNewInvoice = function () {
        $http.post(REST_CONST.url + "/invoices/", {}).then(function (resp) {
            $rootScope.newInvoiceId = resp.data.id;
        })
    }
}]);
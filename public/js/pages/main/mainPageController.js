app.controller('mainPageCtrl', ["$scope", "$http", function($scope, $http){
$http.get('http://localhost:8000/api/invoices').then(function (resp) {
    $scope.invoicesData = resp.data;
    console.log($scope.invoicesData);
})
}]);
var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('sellerController', ['$scope', '$http', '$window', function($scope, $http, $window){
    
    $http.get('seller.json').then(
        function(response){
            console.log(response.data);
            $scope.seller = response.data;
            $scope.allseller = response.data;
        },
        function(response){
            alert("AJAX connection error!");
        }
    );

    $scope.type = [ "Organic", "Hydroponic"];

    $scope.goShopee = function(url) {
        $window.open(url);
    };

    $scope.filtertype = function() {
        if ($scope.selected == "Organic") {
            $scope.seller = $scope.allseller.filter(function(filteredseller) {
                return (filteredseller.type == "organic")
            });
        }
        else if ($scope.selected == "Hydroponic") {
            $scope.seller = $scope.allseller.filter(function(filteredseller) {
                return (filteredseller.type == "hydroponic")
            });
        }
        else
            $scope.seller = $scope.allseller;
    };
}]);
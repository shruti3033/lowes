var myApp = angular.module('LowesApp',['ngRoute']);

myApp.controller('LowesController', ['$scope','$http', function($scope,$http) {
    var url = 'https://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=20&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1';
    $http({
    method: 'GET',
    url: url
    }).then(function successCallback(response) {
       $scope.Products = response.data;
        $scope.heroProduct = $scope.Products[0];

    });

    $scope.selectedProduct = function(product){
        $scope.heroProduct = product;

    }
    }]);


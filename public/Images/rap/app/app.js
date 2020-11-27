var RapApp = angular.module("rapapp",['ngRoute','ngAnimate']);

RapApp.controller("storeController",['$scope',function($scope){

  $scope.products = [
    {
      name:"Loco T-shirt ",
      price: 50
    }
  ];


}]);

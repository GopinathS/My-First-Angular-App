'use strict';

/* Controllers */

function HomeContrl($scope,$http){

 
 $http.get('states/states.json').success(function(data) {
    $scope.states = data;
  });
  
  
  /*$scope.states = State.query();;*/
  
  $scope.orderState = 'population';
   $scope.orderState = 'Literacy';
}


function stateDetailCtrl($scope, $routeParams,$http) {
  //$scope.id = $routeParams.id;
  
  
  $http.get('states/'+$routeParams.id+'.json').success(function(data) {
    $scope.addstates = data;
	$scope.mainImageUrl = data.images[0];
  });
  /*
  $scope.addstates=State.get({id: $routeParams.id}, function(states) {
    $scope.mainImageUrl = states.images[0];
  });*/
  
  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams'];

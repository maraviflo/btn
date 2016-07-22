var app = angular.module('btn', ['ngRoute']);

app.config (['$routeProvider',function ($routeProvider) {
	$routeProvider
		.when ('/',{
			templateUrl: 'views/home.html',
			controller: 'boton'
		})

		.when('/:tipo',{
		templateUrl: 'views/home.html',
		controller: 'tipoViewController'
		})

		.otherwise({
		redirectTo: '/'
		
		})


}]);

app.controller('boton',['$scope','$http', function($scope,$http){
    $scope.boton = 'button';
    
    $http.get("json/btn.json").success (function (data){
        $scope.btn = data;
    });
}]);

app.controller ("tipoViewController",['$scope','$http','$routeParams',function ($scope,$http,$routeParams){
	$scope.tipo = $routeParams.tipo;
	$http.get("json/btn.json").success (function (data){
        $scope.btn = data;

    });
}]);

app.directive('hheader',function(){
	return{
		restrict: 'E', // PAra custom de html
		/*template: "<div>{{expense.description}}</div>"*/
		templateUrl: 'views/header.html'
	}
})

app.directive('carta',function(){
	return{
		restrict: 'E', // PAra custom de html
		/*template: "<div>{{expense.description}}</div>"*/
		templateUrl: 'views/carta.html'
	}
})
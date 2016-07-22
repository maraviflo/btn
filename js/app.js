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

		.when ('/botones/cronometro',{
			templateUrl: 'views/botones/cronometro.html',
			controller: 'cron'
		})

		.when ('/botones/abrirGoogle',{
			templateUrl: 'views/botones/abrirGoogle.html',
			controller: 'abrir'

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

//Controladores de las vistas correspondientes a los botones.
//Id:1
app.controller('cron',['$scope','$http', function($scope,$http){
    $scope.cron = 'cron';
    $scope.nombre = 'cronometro';
    
    $http.get("json/btn.json").success (function (data){
        $scope.btn = data;
    });
}]);
//Id:2

app.controller('abrir',['$scope','$http', function($scope,$http){
    $scope.abrir = 'abrir';
    $scope.nombre = 'abrirGoogle';
    
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
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

		.when ('/botones/horario',{
			templateUrl: 'views/botones/horario.html',
			controller: 'horario'

		})

		.when ('/botones/cambiaColor',{
			templateUrl: 'views/botones/cambiaColor.html',
			controller: 'cambiaColor'

		})

		.when ('/botones/cambiarEstilo',{
			templateUrl: 'views/botones/cambiarEstilo.html',
			controller: 'cambiarEstilo'

		})

		.when ('/botones/binario',{
			templateUrl: 'views/botones/binario.html',
			controller: 'binario'

		})

		.when ('/botones/navegador',{
			templateUrl: 'views/botones/navegador.html',
			controller: 'navegador'

		})

		.when ('/botones/numero1a100',{
		templateUrl: 'views/botones/numero1a100.html',
		controller: 'numero1a100'

		})

		.when ('/botones/numerosParar',{
		templateUrl: 'views/botones/numerosParar.html',
		controller: 'numerosParar'

		})	//arreglar

		.when ('/botones/test',{
		templateUrl: 'views/botones/test.html',
		controller: 'test'

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

//Id:3

app.controller('horario',['$scope','$http', function($scope,$http){
    $scope.horario = 'horario';
    $scope.nombre = 'horario';
    
    $http.get("json/btn.json").success (function (data){
        $scope.btn = data;
    });
}]);

//id:4

app.controller('cambiaColor',['$scope','$http', function($scope,$http){
    $scope.cambiaColor = 'cambiaColor';
    $scope.nombre = 'cambiaColor';
    
    $http.get("json/btn.json").success (function (data){
        $scope.btn = data;
    });
}]);

//id:5

app.controller('cambiarEstilo',['$scope','$http', function($scope,$http){
    $scope.cambiarEstilo = 'cambiarEstilo';
    $scope.nombre = 'cambiarEstilo';
    
    $http.get("json/btn.json").success (function (data){
        $scope.btn = data;
    });
}]);

//id:6

app.controller('binario',['$scope','$http', function($scope,$http){
    $scope.binario = 'binario';
    $scope.nombre = 'binario';
    
    $http.get("json/btn.json").success (function (data){
        $scope.btn = data;
    });
}]);

//id:7

app.controller('navegador',['$scope','$http', function($scope,$http){
    $scope.navegador = 'navegador';
    $scope.nombre = 'navegador';
    
    $http.get("json/btn.json").success (function (data){
        $scope.btn = data;
    });
}]);

//id:8

app.controller('numero1a100',['$scope','$http', function($scope,$http){
    $scope.numero1a100 = 'numero1a100';
    $scope.nombre = 'numero1a100';
    
    $http.get("json/btn.json").success (function (data){
        $scope.btn = data;
    });
}]);

//id:9

app.controller('numerosParar',['$scope','$http', function($scope,$http){
    $scope.numerosParar = 'numerosParar';
    $scope.nombre = 'numerosParar';
    
    $http.get("json/btn.json").success (function (data){
        $scope.btn = data;
    });
}]);

//id:10 

app.controller('test',['$scope','$http', function($scope,$http){
    $scope.test = 'test';
    $scope.nombre = 'test';
    
    $http.get("json/btn.json").success (function (data){
        $scope.btn = data;
    });
}]);


app.directive('hheader',function(){
	return{
		restrict: 'E', 
		templateUrl: 'views/header.html'
	}
})

app.directive('headerButton',function(){
	return{
		restrict: 'E', 
		templateUrl: 'views/headerButton.html'
	}
})



app.directive('carta',function(){
	return{
		restrict: 'E', 
		templateUrl: 'views/carta.html'
	}
})


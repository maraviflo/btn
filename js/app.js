var app = angular.module('btn', ['ngRoute','hljs']);

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

		.when ('/botones/palabraAleatoria',{
		templateUrl: 'views/botones/palabraAleatoria.html',
		controller: 'palabraAleatoria'

		})	//arreglar

		.when ('/botones/test',{
		templateUrl: 'views/botones/test.html',
		controller: 'test'

		})

		.when ('/botones/dado',{
		templateUrl: 'views/botones/dado.html',
		controller: 'dado'

		})

		.when ('/botones/lista',{
		templateUrl: 'views/botones/lista.html',
		controller: 'lista'

		})

		.when ('/botones/cambiarParrafo',{
		templateUrl: 'views/botones/cambiarParrafo.html',
		controller: 'cambiarParrafo'

		})

		.when ('/botones/alert',{
		templateUrl: 'views/botones/alert.html',
		controller: 'alert'

		})

		.when ('/botones/volverArriba',{
		templateUrl: 'views/botones/volverArriba.html',
		controller: 'volverArriba'

		})

		.when ('/botones/switch',{
		templateUrl: 'views/botones/switch.html',
		controller: 'switch'

		})

		.when ('/botones/carga',{
		templateUrl: 'views/botones/carga.html',
		controller: 'carga'

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

app.controller('palabraAleatoria',['$scope','$http', function($scope,$http){
    $scope.palabraAleatoria = 'palabraAleatoria';
    $scope.nombre = 'palabraAleatoria';
    
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

//id:11

app.controller('dado',['$scope','$http', function($scope,$http){
    $scope.dado = 'dado';
    $scope.nombre = 'dado';
    
    $http.get("json/btn.json").success (function (data){
        $scope.btn = data;
    });
}]);

//id:12

app.controller('lista',['$scope','$http', function($scope,$http){
    $scope.lista = 'lista';
    $scope.nombre = 'lista';
    
    $http.get("json/btn.json").success (function (data){
        $scope.btn = data;
    });
}]);

//id:13

app.controller('cambiarParrafo',['$scope','$http', function($scope,$http){
    $scope.cambiarParrafo = 'cambiarParrafo';
    $scope.nombre = 'cambiarParrafo';
    
    $http.get("json/btn.json").success (function (data){
        $scope.btn = data;
    });
}]);

//id:14
app.controller('alert',['$scope','$http', function($scope,$http){
    $scope.alert = 'alert';
    $scope.nombre = 'alert';
    
    $http.get("json/btn.json").success (function (data){
        $scope.btn = data;
    });
}]);


//id:15


app.controller('volverArriba',['$scope','$http', function($scope,$http){
    $scope.volverArriba = 'volverArriba';
    $scope.nombre = 'volverArriba';
    
    $http.get("json/btn.json").success (function (data){
        $scope.btn = data;
    });
}]);


//id:16
app.controller('switch',['$scope','$http', function($scope,$http){
    $scope.switch = 'switch';
    $scope.nombre = 'switch';
    
    $http.get("json/btn.json").success (function (data){
        $scope.btn = data;
    });
}]);

//id:17

app.controller('carga',['$scope','$http', function($scope,$http){
    $scope.carga = 'carga';
    $scope.nombre = 'carga';
    
    $http.get("json/btn.json").success (function (data){
        $scope.btn = data;
    });
}]);



//directivas

app.directive('hheader',function(){
	return{
		restrict: 'E', 
		templateUrl: 'views/header.html'
	}
})


app.directive('carta',function(){
	return{
		restrict: 'E', 
		templateUrl: 'views/carta.html'
	}
})

app.directive('h2header',function(){
	return{
		restrict: 'E', 
		templateUrl: 'views/header.html'
	}
})

//Funcion para hightlight

btn.config(function (hljsServiceProvider) {
  hljsServiceProvider.setOptions({
    // replace tab with 4 spaces
    tabReplace: '  '
  });
  

});



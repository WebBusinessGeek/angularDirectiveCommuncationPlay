var app = angular.module('app', [])

app.directive('directiveA', function(){
	return{
		controller: function($scope){
			$scope.name = 'directiveA';

			this.sayHello = function(newName){
				$scope.name = newName ;
			}
		},

		link: function(scope, element, attrs){
			element.bind('click', function(){
				alert(scope.name);
			})
		}
	}
})


app.directive('directiveB', function(){
	return{
		restrict: 'A',
		require: '^directiveA',
		link: function(scope, element, attrs, directiveACtrl){
			directiveACtrl.sayHello('I am from directiveB');
		}
	}
})
describe('Testing AngularJS Test Suite', function(){
	describe('Testing mainCtrl', function(){

		it('should initialize the title in the scope', function(){

			module('pillarApp');

			var scope = {};
			var ctrl;

			inject(function($controller){
				ctrl = $controller('mainCtrl', {$scope:scope});
			});

			expect(scope.title).toBeDefined();
			expect(scope.title).toBe('Pillar Kata');
		});

	});

});
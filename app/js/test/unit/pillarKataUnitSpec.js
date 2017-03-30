describe('Testing AngularJS Test Suite', function(){
	beforeEach(module('pillarApp'));


	describe('Testing mainCtrl', function(){
		var scope, ctrl;
		
		beforeEach(inject(function($controller, $rootScope){
				scope = $rootScope.$new();
				ctrl = $controller('mainCtrl', {$scope:scope});
			}));

		afterEach(function(){
			//cleanup code
		});

		it('should initialize the title in the scope', function(){
			expect(scope.title).toBeDefined();
			expect(scope.title).toBe('Pillar Kata');
		});

	});

});
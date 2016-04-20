
'use strict';

(function() {
	angular.module('meanshopApp').controller('ProductNewController',
			ProductNewController);

	ProductNewController.$inject = [ 'Products', '$state' ];

	function ProductNewController(Products, $state) {
		var vm = this;
		console.log('creating the product new controller');
		vm.product = {};
		
		vm.createProduct = createProduct;
		
		function createProduct()	{
			console.log('creating a new product');
			Products.create(vm.product);
			$state.go('products');
		}
	}

})();


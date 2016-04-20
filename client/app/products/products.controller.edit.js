'use strict';

(function() {
	angular.module('meanshopApp').controller('ProductEditController',
			ProductEditController);

	ProductEditController.$inject = [ 'Products', '$stateParams', '$state' ];

	function ProductEditController(Products, $stateParams, $state) {
		var vm = this;
		vm.editProduct = editProduct;
		console.log('creating the product edit controller');
		
		vm.product = Products.get({
			id : $stateParams.id
		});
		
		function editProduct()	{
			console.log('editing the current product');
			Products.update(vm.product);
			$state.go('products');
		}
	}

})();



'use strict';

(function() {
	angular.module('meanshopApp').controller('ProductViewController',
			ProductViewController);

	ProductViewController.$inject = [ 'Products', '$stateParams', '$state' ];

	function ProductViewController(Products, $stateParams, $state) {
		var vm = this;
		vm.deleteProduct = deleteProduct;
		
		console.log('creating the product view controller');
		
		vm.product = Products.get({
			id : $stateParams.id
		});
		
		function deleteProduct()	{
			console.log('deleting the current product');
			Products.remove(vm.product);
			$state.go('products');
		}
	}

})();


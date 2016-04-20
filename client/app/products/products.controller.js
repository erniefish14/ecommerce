
'use strict';

(function(){
	angular.module('meanshopApp').controller('ProductsController',
			ProductsController);

	ProductsController.$inject = [ 'Products' ];

	function ProductsController(Products) {
		var vm = this;
		console.log('creating the product list controller');
		vm.products = Products.query();
	}
})();


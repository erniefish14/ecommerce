//'use strict';

angular.module('meanshopApp').config(function($stateProvider) {
	$stateProvider.state('products', {
		url : '/products',
		templateUrl: 'app/products/templates/product-list.html',
	    controller: 'ProductsController',
	    controllerAs: 'productsCntrl'
	}).state('viewProduct', {
		url : '/products/:id',
		templateUrl: 'app/products/templates/product-view.html',
	    controller: 'ProductViewController',
	    controllerAs: 'productView'
	}).state('editProduct', {
		url : '/products/:id/edit',
		templateUrl: 'app/products/templates/product-edit.html',
	    controller: 'ProductEditController',
	    controllerAs: 'productCntrl'
	}).state('newProduct', {
		url : '/product-new', // /products/new will resolve to viewProduct (new is the :id)
		templateUrl: 'app/products/templates/product-new.html',
	    controller: 'ProductNewController',
	    controllerAs: 'productCntrl'
	});
});

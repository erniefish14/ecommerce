'use strict';

describe('Service: products', function () {

  // load the service's module
  beforeEach(module('meanshopApp'));

  // instantiate service
  var Product;
  beforeEach(inject(function($injector) {
    Product = $injector.get('Products');
  }));

  it('should do something', function () {
    expect(!!Product).to.be.true;
  });

});

'use strict';

describe('Filter: compactJSON', function () {

  // load the filter's module
  beforeEach(module('vleApp'));

  // initialize a new instance of the filter before each test
  var compactJSON;
  beforeEach(inject(function ($filter) {
    compactJSON = $filter('compactJSON');
  }));

  it('should return the input prefixed with "compactJSON filter:"', function () {
    var text = 'angularjs';
    expect(compactJSON(text)).toBe('compactJSON filter: ' + text);
  });

});

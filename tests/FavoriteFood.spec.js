describe('Favorite Food Filter', function () {
  var $controller;

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $filter = $injector.get('$filter');
  }));

  it('should filter on favorite food correctly', function () {
    var data = [{
      name: 'Person',
      favoriteFood: 'Cookies'
    }, {
      name: 'Another Person',
      favoriteFood: 'Cheese'
    }]

    var results = $filter('favoriteFood')(data, 'Cheese');

    expect(results.length).toBe(1);
    expect(results[0].name).toBe('Another Person');
  });
});


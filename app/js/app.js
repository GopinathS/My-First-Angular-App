'use strict';

/* App Module */

angular.module('routeState', ['stateFilters']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/states', {templateUrl: 'partials/state-list.html',   controller: HomeContrl}).
      when('/states/:id', {templateUrl: 'partials/state-detail.html', controller: stateDetailCtrl}).
      otherwise({redirectTo: '/states'});
}]);

'use strict';

/* App Module */

angular.module('phonecat', ['phonecatFilters', 'phonecatServices','stateServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/phones', {templateUrl: 'partials/phone-list.html',   controller: PhoneListCtrl}).
      when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
      otherwise({redirectTo: '/phones'});
}]);


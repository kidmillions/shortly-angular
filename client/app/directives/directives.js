angular.module('shortly.directives', [])
  .directive('navbar', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/partials/navbar.html'
    };
  })
  .directive('detailedLink', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/partials/detailedlink.html',
      scope: {
        link: '='
      }
    };
  });



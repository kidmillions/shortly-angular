angular.module('shortly.directives', [])
  .directive('navbar', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/partials/navbar.html'
    };
  });


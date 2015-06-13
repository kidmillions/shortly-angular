angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function (link) {
    Links.postLinks(link).then(function () {
      $location.path('/links');
    });
  };

  $scope.submitForm = function (isValid) {
    if (isValid) {
      console.log('i am valid');
      $scope.addLink($scope.link);
    }
    else{
      console.log('form not valid');
    }
  };
});


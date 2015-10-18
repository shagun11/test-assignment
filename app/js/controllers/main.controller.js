'use strict';

angular.module('testApp')
  .controller("testController", function ($scope, DATE_CONSTANTS) {
   $scope.months = DATE_CONSTANTS.months;
   $scope.years = DATE_CONSTANTS.years;
   $scope.testScore = 0;
   $scope.testScore = $scope.test.reading ? scope.testScore + $scope.test.reading : 0;
   $scope.finalScore = function() {
     $(".sat-form").append("<div test-Form></div>");
   }
})

  .directive('testForm', function() {
   return {
    templateUrl: 'test-form.html'
    };
  });
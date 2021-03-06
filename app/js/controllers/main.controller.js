'use strict';

angular.module('testApp')
  .controller("testController", function ($scope, DATE_CONSTANTS) {
      $scope.oneAtATime = true;

   var formObj = {reading: '', writing: '', maths: '', testScore: '####', month: '', year: ''};
   $scope.months = DATE_CONSTANTS.months;
   $scope.years = DATE_CONSTANTS.years;

   $scope.satTest = [angular.copy(formObj)];
   $scope.sat2Test = [angular.copy(formObj)];
   $scope.toeflTest = [angular.copy(formObj)];
   $scope.actTest = [angular.copy(formObj)];
   $scope.examList = [
    {name: 'SAT', exam: $scope.satTest},
    {name: 'SAT II', exam: $scope.sat2Test},
    {name: 'ACT', exam: $scope.toeflTest},
    {name: 'TOEFL \ IELTS', exam: $scope.actTest}
   ];

    $scope.updateTestScore = function(object) {
      object.testScore = object.reading + object.writing + object.maths;
    }
      
   $scope.addTest = function(exam) {
   exam.push(angular.copy(formObj));
   };
      $scope.removeTest = function(index, exam) {
        if (exam.length > 1) {
          exam.splice(index, 1);
        }
      }
      $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
      };

})




var app = angular.module('myAppNavigate', []);
app.controller('navigateCtrl', function($scope,$location){     

$scope.login=function()
   {
    window.location.href = 'Student.html';
  }
});

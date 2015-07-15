var app = angular.module('myApp', []);
app.controller('userCtrl', function($scope) {
   $scope.fName='Venkata';
   $scope.mName='';
   $scope.lName='Turaga';
   $scope.saddress='Harrisburg';
   $scope.save  = function() {alert("Record Saved");};
   
});





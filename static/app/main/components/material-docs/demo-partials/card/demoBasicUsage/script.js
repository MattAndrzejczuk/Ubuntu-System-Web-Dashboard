
angular.module('cardDemo1', ['ngMaterial'])

.controller('AppCtrl', function($scope) {
  $scope.imagePath = '/static/assets/angular-material-assets/img/washedout.png';
})
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});

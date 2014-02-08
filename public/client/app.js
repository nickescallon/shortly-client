var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      controller: 'LinksController',
      templateUrl: '/templates/links.html'
    }).when('/shorten', {
      controller: 'ShortenController',
      templateUrl: '/templates/shorten.html'
    }).otherwise({
        redirectTo: '/'
    });
}]);

app.controller('FrameController', function($scope){

});

app.controller('LinksController', function($scope, $http){
  $http({
    method: 'GET',
    url: '/links'
  }).then(function(response){
    $scope.links = response.data;
  });
});

app.controller('ShortenController', function($scope, $http){
  
})





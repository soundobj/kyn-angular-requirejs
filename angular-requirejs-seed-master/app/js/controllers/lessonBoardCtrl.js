define([], function() {
	return ['$scope', '$http', "$routeParams", function($scope, $http, $routeParams) {
		$scope.welcomeMessage = 'hey this is lessonBoard.js!';
		console.log($routeParams);
		 $http.get('app/resources/' + $routeParams.instrument  + '.json').success(function(data) {
			 $scope.instrument = data;
			 console.log(data);
		 });
		// because this has happened asynchroneusly we've missed
		// Angular's initial call to $apply after the controller has been loaded
		// hence we need to explicityly call it at the end of our Controller constructor
		$scope.$apply();
		
		$scope.stringSeparation = [20,40,60,80,100,120,140,160];
		$scope.fretSeparation = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35];
		$scope.noteSeparation = [0,3.5,7,10.5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35];
	}];
});
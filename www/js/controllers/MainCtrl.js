/**
 * Created by Administrator on 2014-08-30.
 */
define(function () {
	angular.module('app').controller('MainCtrl', controller);
	function controller($scope, $timeout) {
		console.log('call main controller!!');
		$scope.map = {center: {latitude : 0, longitude : 0}, zoom: 16};
		$scope.options = {scrollwheel: true};

		var onSuccess = function(position) {
			console.log('call getCurrentPositon!!');
			$scope.map.center = {latitude : position.coords.latitude, longitude : position.coords.longitude};
		};

		var onError = function(err) {
			console.log(err);
		};

		$scope.$on('mapInitialized', function(event, map) {
			console.log('is map init??');
		});

		$timeout(function () {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(onSuccess, onError);
			}
		}, 100);
	}

	//https://github.com/allenhwkim/angularjs-google-maps <-- 요기에 다있다
});


/**
 * Created by Administrator on 2014-08-30.
 */
define(function () {
	angular.module('app').controller('MainCtrl', controller);
	function controller($scope) {
		$scope.currentLocation = {
			latitude: 37.554673,
			longitude: 126.970698
		};

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(onSuccess, onError);
		}

		$scope.map = {center: $scope.currentLocation, zoom: 13 };
		$scope.options = {scrollwheel: true};

		function onSuccess(position) {
			$scope.currentLocation.latitude = position.coords.latitude;
			$scope.currentLocation.longitude = position.coords.longitude;
		}

		function onError(err) {
			console.log(err);
		}
	}
});


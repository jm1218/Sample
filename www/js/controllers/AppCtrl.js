/**
 * Created by Administrator on 2014-08-30.
 */
define(['angular-config'], function (app) {
	var controller = function($scope) {
		(function registerLoading() {
			//page loading
			$scope.$on("$routeChangeStart", function () {
				$scope.pageLoading = true;
				//페이지 이동시 사이드바 감추기
				$scope.toggle('mainSidebar', 'off');
			});
			$scope.$on("$routeChangeSuccess", function () {
				$scope.pageLoading = false;
			});

			//location change interceptor
			$scope.$on('$locationChangeStart', function (event, newLocation, previousLocation) {
			});
			$scope.$on('$locationChangeSuccess', function (object, newLocation, previousLocation) {
			});

			//http loading
			$scope.$on("$httpLoadingStart", function () {
				$scope.httpLoading = true;
			});

			$scope.$on("$httpLoadingComplete", function () {
				$scope.httpLoading = false;
			});
		})();
	};
	app.controller('AppCtrl', controller);
});
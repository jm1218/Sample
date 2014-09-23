/**
 * Created by Administrator on 2014-08-30.
 */
define(['angular-config'], function (app) {
	//filePath에 해당하는 파일을 동적으로 로드
	var resolvePage = function(filePath){
		return {
			load : function($q, $rootScope, $timeout) {
				console.log('load js file : ' + filePath );
				var deferred = $q.defer();
				requirejs(filePath, function () {
					$rootScope.$apply(function () {
						$timeout(function () {deferred.resolve()}, 500);
					});
				});
				return deferred.promise;
			}
		}
	};
	//라우팅 설정
	var routeConfig = function($routeProvider) {
		$routeProvider
			.when('/main', {
				templateUrl: 'partials/main.html',
				resolve: resolvePage(['controllers/MainCtrl', 'directives/history-back'])
			})
			.when('/registerRoom/addedRoomList', {
				templateUrl: 'partials/registerRoom/addedRoomList.html',
				resolve: resolvePage(['controllers/registerRoom/AddedRoomListCtrl'])
			})
			.when('/registerRoom/addRoomInfo', {
				templateUrl: 'partials/registerRoom/addRoomInfo.html',
				resolve: resolvePage(['controllers/registerRoom/AddRoomInfoCtrl'])
			})
			.when('/registerRoom/addPhoto', {
				templateUrl: 'partials/registerRoom/addPhoto.html',
				resolve: resolvePage(['controllers/registerRoom/AddPhotoCtrl'])
			})
			.when('/carousels/carouselTest', {
				templateUrl: 'partials/carousels/carouselTest.html',
				resolve: resolvePage(['controllers/carousels/CarouselTestCtrl', 'directives/carouselExampleItem'])
			})

			.otherwise({redirectTo: '/main'});
	};
	app.config(routeConfig);
});
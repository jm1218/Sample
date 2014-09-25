/**
 * Created by Administrator on 2014-08-29.
 */
requirejs.config({
	//By default load any module IDs from js/lib
	baseUrl: 'js',
	//except, if the module ID starts with "app",
	//load it from the js/app directory. paths
	//config is relative to the baseUrl, and
	//never includes a ".js" extension since
	//the paths config could be for a directory.
	waitSeconds : 100,
	paths: {
		async : '../bower_components/requirejs-plugins/src/async', //alias to plugin
		angular : '../bower_components/angular/angular',
		ngRoute : '../bower_components/angular-route/angular-route',
		mobileUi : '../bower_components/mobile-angular-ui/mobile-angular-ui',
		ngTouch : '../bower_components/angular-touch/angular-touch',
		underScore : 'http://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.underscore',
		ngGoogleMap : '../bower_components/angular-ui/angular-google-maps'
	},
	shim : {
		ngRoute : {
			deps : ['angular']
		},
		mobileUi : {
			deps : ['angular']
		},
		ngTouch : {
			deps : ['angular']
		},
		ngGoogleMap : {
			deps : ['underScore', 'angular']
		}
	}
});



// Start the main app logic.
requirejs([
	'angular-config',
	'route-config',
	'controllers/AppCtrl',
	'async!http://maps.googleapis.com/maps/api/js?libraries=weather,geometry,visualization&sensor=false&language=ko&v=3.14'], function () {
	angular.element(document).ready(function () {
		angular.bootstrap(document, ['app']);
		console.log('>>> ANGULAR LOAD COMPLETE!!');
	});
});

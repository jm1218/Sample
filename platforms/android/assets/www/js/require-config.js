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
	paths: {
		angular : '../bower_components/angular/angular',
		ngRoute : '../bower_components/angular-route/angular-route',
		mobileUi : '../bower_components/mobile-angular-ui/mobile-angular-ui'
	},
	shim : {
		ngRoute : {
			deps : ['angular']
		},
		mobileUi : {
			deps : ['angular']
		}
	}
});

// Start the main app logic.
requirejs(['angular-config', 'route-config', 'controllers/AppCtrl'], function () {
	angular.element(document).ready(function () {
		angular.bootstrap(document, ['app']);
		console.log('>>> ANGULAR LOAD COMPLETE!!');
	});
});

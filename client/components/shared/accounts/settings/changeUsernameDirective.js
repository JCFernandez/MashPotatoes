'use strict';

angular.module('mashPotatoes').directive('changeUsername', ['utils', 'user', function (utils, user) {
	return {
		restrict: 'E', // E = element, A = attribute, C = class, M = comment
		scope: { // @ = local scope (string), = = bi-directional binding, & = parent execution binding (function)

		},
		templateUrl: 'client/components/shared/accounts/settings/changeUsernameView.ng.html',
		controller: function ($scope) {

		},
		link: function ($scope, element, attrs, ctrl) {

			//$scope.$watch(function() { return user.currentUser.profile.name; }, function(newVal) {
			//
			//})
			$scope.cp = { username: '' };
			user.onReady(function() {
				console.log('user', user);
				$scope.originalUsername = user.currentUser.username;
				$scope.cp.username = user.currentUser.username;
			});

			$scope.setUsername = function(name) {
				Meteor.call('setUsername', name, function(err) {
					if (!err) {
						utils.toast('Username Updated', utils.TOAST_TYPE.SUCCESS);
						$scope.originalUsername = name;
						user.currentUser.username = name;
					} else {
						utils.toast('Username Update Error: ' + err.message, utils.TOAST_TYPE.FAIL);
					}
				});
			};
		}
	}
}]);
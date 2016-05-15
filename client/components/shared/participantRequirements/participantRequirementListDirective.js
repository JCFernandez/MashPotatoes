'use strict';

angular.module('mashPotatoes').directive('participantRequirementList', ['$compile', 'settings', '$log', '$mdDialog', '$mdMedia', function ($compile, settings, $log, $mdDialog, $mdMedia) {
	return {
		restrict: 'E', // E = element, A = attribute, C = class, M = comment
		scope: { // @ = local scope (string), = = bi-directional binding, & = parent execution binding (function)
            'ngModel': '=',
			'ngDisabled': '=',
			'title': '=?'
		},
		templateUrl: 'client/shared/participantRequirements/participantRequirementListView.ng.html',
		controller: function ($scope) {
		},
		link: function ($scope, element, attrs) {
			if (!$scope.title) $scope.title = 'Notes';

			$scope.add = function(ev) {
				$scope.ngModel.push({ edit: true, owner: Meteor.userId(), createdAt: new Date() });
			}

			$scope.remove = function(ev, obj) {
				$scope.ngModel.splice($scope.ngModel.indexOf(obj), 1);
			}
		}
	}
}]);
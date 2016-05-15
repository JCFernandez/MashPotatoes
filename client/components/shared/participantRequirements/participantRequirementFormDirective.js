'use strict';

angular.module('mashPotatoes').directive('participantRequirementForm', ['$compile', 'settings', '$log', function ($compile, settings, $log) {
	return {
		restrict: 'E', // E = element, A = attribute, C = class, M = comment
		scope: { // @ = local scope (string), = = bi-directional binding, & = parent execution binding (function)
            'ngModel': '=',
            'onSubmit': '&'
		},
		templateUrl: 'client/shared/participantRequirements/participantRequirementFormView.ng.html',
		controller: function ($scope) {

		},
		link: function ($scope, element, attrs) {
		    $scope.showHints = false;

		    $scope.add = function () {

				$scope.onSubmit({ obj: $scope.ngModel, type: 'add' });
		    };

		    $scope.edit = function () {
		        $scope.onSubmit({ obj: $scope.ngModel, type: 'edit' });
		    }
		}
	}
}]);
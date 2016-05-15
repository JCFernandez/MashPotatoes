angular.module('mashPotatoes').directive('projectList', ['$state', function($state) {
    return {
        restrict: 'E', // E = element, A = attribute, C = class, M = comment
        scope: { // @ = local scope (string), = = bi-directional binding, & = parent execution binding (function)
            'projects': '=ngModel'
        },
        templateUrl: 'client/components/shared/projects/projectListView.ng.html',
        controller: function ($scope) {

        },
        link: function ($scope, element, attrs) {

            $scope.getListItemClass = function(proj) {
                if (proj.owner == Meteor.userId()) {
                    return 'leftBorder';
                }
                return '';
            }

            $scope.openProject = function(proj) {
                $state.go('projectDetail', { id: proj._id });
            }
        }
    }
}]);
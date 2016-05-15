angular.module('mashPotatoes').controller('ProjectsController', ['$scope', '$reactive', '$state', 'utils', function($scope, $reactive, $state, utils) {
    $reactive(this).attach($scope);

    $scope.helpers({
        projects: function() {
            return Projects.find({ $or: [{ owner: Meteor.userId() }, { participants: Meteor.userId() }] });
        }
    });

    $scope.displayCreate = function(ev) {
        utils.dialog(ev, 'client/components/projects/projectCreateView.ng.html', 'ProjectCreateController');
        //$state.go('projectCreate');
    }

    $scope.getListItemClass = function(proj) {
        if (proj.owner == Meteor.userId()) {
            return 'leftBorder';
        }
        return '';
    }

    $scope.openProject = function(proj) {
        $state.go('projectDetail', { id: proj._id });
    }
}]);
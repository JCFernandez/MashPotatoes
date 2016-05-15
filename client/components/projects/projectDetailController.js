angular.module('mashPotatoes').controller('ProjectDetailController', ['$scope', '$reactive', '$stateParams', 'user', function($scope, $reactive, $stateParams, s_user) {
    $reactive(this).attach($scope);

    let projectId = $stateParams.id;

    $scope.settings = {
        view: 'overview'
    };

    $scope.helpers({
        project: function() {
            return Projects.findOne({ _id: projectId });
        }
    });


    s_user.onReady(function() {
        $scope.user = s_user.currentUser;
    });
}]);
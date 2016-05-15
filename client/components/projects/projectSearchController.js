angular.module('mashPotatoes').controller('ProjectSearchController', ['$scope', '$reactive', function($scope, $reactive) {

    $reactive(this).attach($scope);

    $scope.helpers({
        projects: function() {
            let query = {};
            query['participants.userId'] = { $exists: false };
            return Projects.find(query);
        }
    });
}]);
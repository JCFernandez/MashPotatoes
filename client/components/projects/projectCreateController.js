angular.module('mashPotatoes').controller('ProjectCreateController', ['$scope', function($scope) {
    $scope.formFields = {
        name: '',
        owner: Meteor.userId(),
        desc: '',
        expectedTimeSpan: { length: 1, type: 'Months'},
        isProfit: true,
        participants: []
    };
    $scope.c = Constants;
    $scope.expectedTimeSpanTypes = lodash.values(Constants.ExpectedTimeSpanType);

    $scope.addParticipantRequirement = function(obj) {
        if (!obj) obj = [];
        obj.push({
            skillRequirements: [],
            minReviewCount: 0,
            minStarRating: 0
        });
    }

    $scope.addSkillRequirement = function(pr) {
        if (!pr) pr = [];
        pr.push({ skill: '', isRequired: true });
    }

    $scope.create = function(){
        console.log($scope.formFields);
        Projects.insert($scope.formFields);
        //$scope.onSubmit({ obj: $scope.formFields, type: 'add' });
    }
}]);
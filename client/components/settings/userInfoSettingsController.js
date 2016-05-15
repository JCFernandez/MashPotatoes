'use strict';

angular.module('mashPotatoes').controller('UserInfoSettingsController', ['$scope', '$log', '$reactive', function ($scope, $log, $reactive) {
    $scope.$on('$viewContentLoaded', function () {

    });

    var reactiveContext = $reactive(this).attach($scope);
    var me = this;


    $scope.showChangePassword = function() {
        console.log('huhhh');
        $scope.showChangePasswordView = true;
    }
}]);
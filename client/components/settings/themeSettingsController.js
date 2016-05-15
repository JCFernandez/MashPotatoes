'use strict';

angular.module('mashPotatoes').controller('ThemeSettingsController', ['$scope', '$log', '$reactive', function ($scope, $log, $reactive) {
    $scope.$on('$viewContentLoaded', function () {

    });

    var reactiveContext = $reactive(this).attach($scope);
    var me = this;
}]);
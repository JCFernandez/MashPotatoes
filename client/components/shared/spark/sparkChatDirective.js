angular.module('mashPotatoes').directive('sparkChat', ['spark', function(s_spark) {
    return {
        restrict: 'E', // E = element, A = attribute, C = class, M = comment
        scope: { // @ = local scope (string), = = bi-directional binding, & = parent execution binding (function)
            'roomId': '=',
            'user': '='
        },
        templateUrl: 'client/components/shared/spark/sparkChatView.ng.html',
        controller: function ($scope) {

        },
        link: function ($scope, element, attrs) {

        }
    }
}]);
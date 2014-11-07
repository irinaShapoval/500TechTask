/**
 * Created by irina on 11/7/2014.
 */

(function(angular) {
    var widgetDrtv = function($sce) {
        var drtvObj = {
            templateUrl: 'views/widgetView.html',
            scope: {
                content: '=content'
            },
            link: function(scope, element, attrs) {
                scope.content = scope.content || {};
                scope.renderHtml = function(html_code)
                {
                    return $sce.trustAsHtml(html_code);
                };
            }
        };
        return  drtvObj;
    };
    angular.module('feedsApp').directive('widgetDrtv', ['$sce', widgetDrtv])
})(angular);
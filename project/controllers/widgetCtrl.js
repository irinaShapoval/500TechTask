/**
 * Created by irina on 11/7/2014.
 */

(function(angular) {
    var widgetCtrl = function($scope, dataSourceService, $filter) {
        $scope.d = {
            widgetsNum: 5,
            showDate: false
        };
        $scope.getFeeds = function () {
            var prom = dataSourceService.parseFeedUrl($scope.d.url);
            prom.then(function(res) {
                $scope.d.widgetContent = [];
                var res = res.data.responseData.feed.entries;
                for (var i = 0; i < $scope.d.widgetsNum; ++i) {
                    var item = {
                        title: res[i].title,
                        content: res[i].content
                    };
                    if ($scope.d.showDate && res[i].publishedDate) {
                        item.date = $filter('date')(new Date(res[i].publishedDate),'fullDate')
                    }
                    $scope.d.widgetContent.push(item);
                }
            }, function (e) {})
        }
    };
    angular.module('feedsApp').controller('widgetCtrl', ['$scope', 'dataSourceService', '$filter', widgetCtrl]);
})(angular);
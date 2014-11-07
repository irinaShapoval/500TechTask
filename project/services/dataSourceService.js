/**
 * Created by irina on 11/7/2014.
 */

(function(angular) {
    var dataSourceService = function ($http) {
        this.parseFeedUrl = function (url) {
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        };
    };
    angular.module('feedsApp').service('dataSourceService', dataSourceService)
})(angular);

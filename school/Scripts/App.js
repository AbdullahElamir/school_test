var app = angular.module('adventureModule', []);
app.factory('studentService', function ($http) {
    var factory = {};
    factory.getallrecords = function () {
        return $http.get('api/student/GetAllStudent');
    }
    return factory;
});

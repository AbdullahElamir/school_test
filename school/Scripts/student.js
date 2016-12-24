app.controller('studentCtrl', function ($scope, $http, studentService) {
    $scope.personData = null;
    studentService.getallrecords().then(function (d) {
        $scope.personData = d.data;
    }, function (response) {
        alert('error occurred'+response.data.ExceptionMesage);
    });
 
    $scope.student = {
        id: '',
        FirstName: '',
        LastName: '',
        Age: '',
        City: ''
    };
 
    $scope.clear = function () {
        $scope.student.id = '',
        $scope.student.FirstName = '',
        $scope.student.LastName = '',
        $scope.student.Age = '',
        $scope.student.City = ''
        $scope.addnewdiv = false;
        $scope.updatediv = false;
    };
    //Add new record
 
    $scope.save = function () {
        console.log($scope.student);
        if ($scope.student.FirstName != '' && $scope.student.LastName != '' && $scope.student.Age != '' && $scope.student.City != '') {
            $http({
                method: 'POST',
                url: 'api/student/AddPerson',
                data: $scope.student
 
            }).then(function successCallback(response) {
                $scope.personData.push(response.data);
                $scope.clear();
                //alert('Inserted successfully!!');
                $scope.addnewdiv = false;
            }, function errorCallback(response) {
 
                alert('error:' + response.data.ExceptionMesage);
            });
        }
        else {
            alert('Please enter all the values!!');
        }
 
    };
 
    //Edit records
    $scope.edit = function (data) {    
        $scope.student = { id: data.id, FirstName: data.FirstName, LastName: data.LastName, Age: data.Age, City: data.City }
        $scope.updatediv = true;
    };
 
    //Cancel record
 
    $scope.cancel = function () {
        $scope.clear();
    };
 
    //Update record
    $scope.update = function () {
        if ($scope.student.FirstName != '' && $scope.student.LastName != '' && $scope.student.Age != '' && $scope.student.City != '') {
            $http({
                method: 'PUT',
                url: 'api/student/UpdatePerson',
                data: $scope.student
 
            }).then(function successCallback(response) {
                $scope.personData = response.data;
                $scope.clear();
                alert('Updated successfully!!');
                $scope.updatediv = false;
            }, function errorCallback(response) {
              
                alert('error:' + response.data.ExceptionMesage);
            });
        }
        else {
            alert('Please enter all the values!!');
        }
    };
 
    //Delete record
    $scope.delete = function (index) {
        alert(index);
        $http({
            method: 'DELETE',
            url: 'api/student/DeletePerson/' + $scope.personData[index].id,
        }).then(function successcallback(response) {
            $scope.personData = response.data;
            $scope.clear();
            alert('record deleted successfully');
        }, function failurecallback(response) {
            alert('error:' + response.data)
        });
    };
});

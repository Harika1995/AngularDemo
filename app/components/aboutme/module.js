let myapp = angular.module("Myapp",[]);

let mycontroller = function($scope){
    $scope.message = "Hello World";
}

myapp.controller("MyController",mycontroller);


let JSONController = function($scope){
    let Student= {
        FirstName: "Harika",
        LastName: "Naidu",
        Email: "S533711@nwmissouri.edu",
        Password: "********"
    }

    $scope.Student=Student;

}

myapp.controller("Student",JSONController);
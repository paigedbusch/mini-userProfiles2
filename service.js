angular.module('userProfiles').service('mainService', function($http) {

  this.getUsers = function(pageNum) {
    return $http({
        method: 'GET',
        url: 'https://reqres.in/api/users?page=' + pageNum
    }).then(function(response) {
        if(response.status === 200) {
            return response.data;
        } else {
            return "Error" + response.status;
        }
    })
  }

});

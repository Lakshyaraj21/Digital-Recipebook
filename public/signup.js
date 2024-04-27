app.controller('SignupController', function($scope, $http, $location) {
    $scope.signup = function() {
        var data = {
            username: $scope.username,
            password: $scope.password
        };

        $http.post('/api/signup', data)
        .then(function(response) {
            // Handle successful signup (e.g., redirect user)
            console.log('Signup successful');
            $location.path('/'); // Redirect to login page after successful signup
        })
        .catch(function(error) {
            // Handle signup error (e.g., display error message)
            $scope.errorMessage = 'Error signing up';
            console.error('Signup error:', error);
        });
    };
});

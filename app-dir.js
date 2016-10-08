angular.module('timeProject')
    .directive('timer', function() {

        return {
            restrict: 'E',
            templateUrl: 'app-temp.html',
            controller: function($scope) {
                console.log('hi');


                $scope.showInfo = function(name) {
                    console.log(name);
                    $scope.show = true;
                    var d = new Date();
                    $scope.time = d.toString();

                }


            }

        }
    })

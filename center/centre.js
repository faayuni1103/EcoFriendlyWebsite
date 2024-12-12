angular.module('centre', [])
    .controller('CentreCtrl', function($scope, $http) {
        $http.get('recycle-centers.json')
            .then(function(response) {
                $scope.centers = response.data;
                $scope.filteredCenters = $scope.centers;
                
                // Extract unique states from centers
                $scope.states = Array.from(new Set($scope.centers.map(center => center.state)));
            })
            .catch(function(error) {
                console.log('Error retrieving recycle centers:', error);
            });

        $scope.filterCenters = function() {
            $scope.filteredCenters = $scope.centers.filter(function(center) {
                return (
                    (!$scope.selectedState || center.state === $scope.selectedState) &&
                    (!($scope.searchText && $scope.searchText.length > 0) ||
                        (center.name.toLowerCase().includes($scope.searchText.toLowerCase())))
                );
            });
        };
    });

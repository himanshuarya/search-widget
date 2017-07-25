(function() {
    
    angular.module('app', [])
        .controller('AppCtrl', function($http){
            var vm = this;
            vm.searchFields = ['name', 'policyNum'];
            vm.placeholderText = 'SEARCH (Client Name / Policy Number)';
            $http.get('data.json').then(function(data) {
                vm.items = data.data;
            }, function() {
                console.log("No data found..");
            });
        });
        
})();


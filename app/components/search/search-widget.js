(function() {
    
    angular.module('app')
        .component('searchWidget', {
            templateUrl: 'components/search/search.html',
            bindings:{
                data : '<',
                searchFields: '<',
                placeholder: '@'
            },
            controller: [ 
                function(){
                    var ctrl = this;
                                       
                    ctrl.filterData = function(item){
                        angular.forEach(ctrl.searchFields, function(field){
                            if(item[field] && item[field].toLowerCase().indexOf(ctrl.searchInput) !== -1){
                                return item;
                            } 
                        });
                    };                                                                      
                }
            ]
        });   
})();
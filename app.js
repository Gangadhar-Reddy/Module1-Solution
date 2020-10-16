(function () {
    "use strict";

    angular.module("LunchCheck",[])

    .controller("LunchCheckController",LunchCheckController);

    LunchCheckController.$inject=["$scope","$filter"];

    function LunchCheckController($scope,$filter){
        $scope.result='';
    
        
        $scope.calculate=function () {
            var temp=$scope.elements;
            var res=checkcount(temp);
            $scope.result=res;
            
        };
        $scope.upper = function () {
            var upCase = $filter('uppercase');
            $scope.elements = upCase($scope.elements);
          };

        function checkcount(string){
            
            
            if(typeof string=='undefined'){
                
                $scope.myStyle={color:'red'};
                $scope.eleStyle={'border-color':'red'};
                return "Please Enter data First";
            }
            var re = /^[A-Za-z]+$/;

            if(string.includes(',')){
                var array=string.split(',');
                var len=0;
                for(var i=0;i<array.length;i++)
                {
                    if(re.test(array[i]))
                    {
                        len+=1;
                    }
                }
                if(len==0)
                {
                    $scope.myStyle={color:'red'};
                    $scope.eleStyle={'border-color':'red'};
                    return "Please Enter data First";
                }
                if(len<=3)
                {
                    $scope.myStyle={color:'green'};
                    $scope.eleStyle={'border-color':'green'};
                    return "Enjoy!"
                }
                else
                {
                    $scope.myStyle={color:'green'};
                    $scope.eleStyle={'border-color':'green'};
                    return "Too much!"
                }
            }
            if ( /^[a-zA-Z]+$/.test(string)) {
                $scope.myStyle={color:'green'};
                $scope.eleStyle={'border-color':'green'};
                return "Enjoy!";
            }
            else{
                $scope.myStyle={color:'red'};
                $scope.eleStyle={'border-color':'red'};
                return "Please Enter data first";
            }
            
        }
    }
    
})();
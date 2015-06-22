'use strict';

/* Controllers */
//
var spreeMarketController = angular.module('spreeMarketController', []);

spreeMarket.controller('MainCtrl',['$scope','$log','$controller',function($scope,$log,$controller){

    $log.debug("MainCtrl");

    $scope.$emit("navBarListener",true);

    $( document ).ready(function() {
        $("#id2").hide();
        $("#id4").hide();
        $("#id6").hide();
        $(".links").mouseover(function(){
            $(this).css({'border-bottom': '2px solid'})
        }).mouseout(function(){
            $(this).css({'border-bottom': 'none'})
        });

        $("#button_1").mouseover(function(){
            $(this).addClass('mouse_on')
        }).mouseout(function(){
            $(this).removeClass('mouse_on')
        });
    });


    $scope.smOver = function(e){
        $("#id1").show();
        $("#id2").show();
    };

    $scope.smOut = function(e){
        $("#id1").show();
        $("#id2").hide();
    };

    $scope.swOver = function(e){
        $("#id3").show();
        $("#id4").show();
    };

    $scope.swOut = function(e){
        $("#id3").show();
        $("#id4").hide();
    };

    $scope.fpOver = function(e){
        $("#id5").show();
        $("#id6").show();
    };

    $scope.fpOut = function(e){
        $("#id5").show();
        $("#id6").hide();
    };


    $(window).scroll(function(){
        var window_top = $(window).scrollTop();
        if(window_top != 0){
            $('#nav').css({'background-color': 'black','border-color':'black'})
        }else{
            $('#nav').scrollTop(function(){
                $(this).css({'background-color': 'transparent','border-color':'transparent'})
            })

        }
    });

}]);

spreeMarket.controller('WorkCtrl',['$scope','$log',function($scope,$log){

    $scope.$emit("navBarListener",true);
    $log.debug("WorkCtrl");
    $(window).scroll(function(){
        var window_top = $(window).scrollTop();
        if(window_top != 0){
            $('#nav').css({'background-color': 'black','border-color':'black'})
        }else{
            $('#nav').scrollTop(function(){
                $(this).css({'background-color': 'transparent','border-color':'transparent'})
            })

        }
    });

}]);

spreeMarket.controller('AboutCtrl',['$scope','$log',function($scope,$log){

$log.debug("abourctrl");
    $scope.$emit("navBarListener",true);
    $("#button_2").mouseover(function(){
        $(this).addClass('mouse_on_about')
    }).mouseout(function(){
        $(this).removeClass('mouse_on_about')
    });

    $(window).scroll(function(){
        var window_top = $(window).scrollTop();
        if(window_top != 0){
            $('#nav').css({'background-color': 'black','border-color':'black'})
        }else{
            $('#nav').scrollTop(function(){
                $(this).css({'background-color': 'transparent','border-color':'transparent'})
            })

        }
    });

}]);

spreeMarket.controller('BlogCtrl',['$scope','$log',function($scope,$log){

    $log.debug("BlogCtrl");

    $scope.$emit("navBarListener",false);

}]);
spreeMarket.controller('ServicesCtrl',['$scope','$log',function($scope,$log){

    $log.debug("ServicesCtrl");
    $scope.$emit("navBarListener",true);

}]);

spreeMarket.controller('ContactCtrl',['$scope','$log',function($scope,$log){
    $log.debug("ContactCtrl");
    $scope.$emit("navBarListener",true);
    $(window).scroll(function(){
        var window_top = $(window).scrollTop();
        if(window_top != 0){
            $('#nav').css({'background-color': 'black','border-color':'black'})
        }else{
            $('#nav').scrollTop(function(){
                $(this).css({'background-color': 'black','border-color':'black'})
            })

        }
    });
}]);
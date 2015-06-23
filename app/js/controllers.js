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

    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
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
            $('#nav').css({'background-color': 'black','border-color':'black'});
            $('#backToTop').addClass('back-to-top').fadeIn();
        }else{
            $('#nav').scrollTop(function(){
                $('#backToTop').removeClass('back-to-top').fadeOut();
                $(this).css({'background-color': 'transparent','border-color':'transparent'})
            })
        }
    });

}]);

spreeMarket.controller('WorkCtrl',['$scope','$log','$controller',function($scope,$log,$controller){

    $log.debug("WorkCtrl");

    $controller("MainCtrl",{$scope:$scope});

    $scope.$emit("navBarListener",true);
    //$('.back-to-top').click(function(){
    //    $('html, body').animate({scrollTop : 0},800);
    //    return false;
    //});
}]);

spreeMarket.controller('AboutCtrl',['$scope','$log','$controller',function($scope,$log,$controller){

$log.debug("abourctrl");

    $controller("MainCtrl",{$scope:$scope});

    $scope.$emit("navBarListener",true);
    $("#button_2").mouseover(function(){
        $(this).addClass('mouse_on_about')
    }).mouseout(function(){
        $(this).removeClass('mouse_on_about')
    });


}]);

spreeMarket.controller('BlogCtrl',['$scope','$log','$controller',function($scope,$log,$controller){

    $log.debug("BlogCtrl");

    $controller("MainCtrl",{$scope:$scope});

    $scope.$emit("navBarListener",false);



}]);
spreeMarket.controller('ServicesCtrl',['$scope','$log','$controller',function($scope,$log,$controller){

    $log.debug("ServicesCtrl");

    $controller("MainCtrl",{$scope:$scope});

    $scope.$emit("navBarListener",true);


}]);

spreeMarket.controller('ContactCtrl',['$scope','$log','$controller',function($scope,$log,$controller){
    $log.debug("ContactCtrl");

    $controller("MainCtrl",{$scope:$scope});

    $scope.$emit("navBarListener",true);




}]);
/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('TK-WEB-PITCH', ['ngRoute','LocalStorageModule','ui.rCalendar'])
    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            // Home
            .when("/", {templateUrl: "tk_partials/tk_dashboard.html", controller: "MainController"})
            // Pages Tarang Khmer
            .when("/tk_profile", {templateUrl: "tk_partials/tk_profile.html", controller: "MainController"})
            .when("/tk_pitch", {templateUrl: "tk_partials/tk_pitch.html", controller: "MainController"})
            .when("/tk_promotion", {templateUrl: "tk_partials/tk_promotions.html", controller: "MainController"})

            // Pages default
            .when("/dashboard", {templateUrl: "partials/dashboard.html", controller: "MainController"})
            .when("/blank", {templateUrl: "partials/blank.html", controller: "MainController"})
            .when("/buttons", {templateUrl: "partials/buttons.html", controller: "MainController"})
            .when("/flot", {templateUrl: "partials/flot.html", controller: "MainController"})
            .when("/forms", {templateUrl: "partials/forms.html", controller: "MainController"})
            .when("/grid", {templateUrl: "partials/grid.html", controller: "MainController"})
            .when("/morris", {templateUrl: "partials/morris.html", controller: "MainController"})
            .when("/notifications", {templateUrl: "partials/notifications.html", controller: "MainController"})
            .when("/panels-wells", {templateUrl: "partials/panels-wells.html", controller: "MainController"})
            .when("/tables", {templateUrl: "partials/tables.html", controller: "MainController"})
            .when("/typography", {templateUrl: "partials/typography.html", controller: "MainController"})
            // else 404
            .otherwise("/404", {templateUrl: "partials/404.html", controller: "MainController"});
    }])
    .config(['localStorageServiceProvider', function (localStorageServiceProvider){
        localStorageServiceProvider.setPrefix('TK-WEB-PITCH');
    }])
    .controller('MainController', function($scope, $location, localStorageService){
        if(localStorageService.get('userId') == null || localStorageService.get('userId') == '0'){
            window.location = "./login.html";
        }else{

        }

    })
    ;



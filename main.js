/**
 * Created by Prasad on 1/26/2017.
 */


/**
 * Main AngularJS Web Application
 */
var app = angular.module('chaitanyaRentals', [
    'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // Home
        .when("/", {templateUrl: "home.html", controller: "PageCtrl"})
        // Pages
        .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
        .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
        .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
        .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
        .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
        .when("/SignUp", {templateUrl: "Login.html", controller: "PageCtrl"})
        // Blog
        .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
        .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
        // else 404
        .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
    console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
    console.log("Page Controller reporting for duty.");

    // Activates the Carousel
    $('.carousel').carousel({
        interval: 5000
    });

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
    })
});

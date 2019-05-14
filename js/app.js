angular.module('App', [
        'ngRoute',
        'mgo-angular-wizard',
        'ngMessages',
        'ngAnimate',
        'panel.payment.befrooshim.controller',
        'panel.payment.befrooshim.components'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller: 'homeCtrl',
                redirectTo: '/auth'
            })
            // .when('/init/:operatorId?',{templateUrl:'partials/init.html',controller:'initCtrl'})
            // .when('/updateServices',{templateUrl:'partials/init.html',controller:'updateCtrl'})
            .when('/auth', {
                templateUrl: 'partials/auth.html',
                controller: 'authCtrl',
            })
            .when('/userGateway/add', {
                templateUrl: 'partials/addUserGateway.html',
                controller: 'addUserGatewayCtrl'
            })
            .when('/userGateway/list/:token', {
                templateUrl: 'partials/userGatewayList.html',
                controller: 'userGatewayListCtrl'
            })
            .when('/gateway/list/:token', {
                templateUrl: 'partials/gatewayList.html',
                controller: 'gatewayListCtrl'
            })
            .when('/payment/list/:token', {
                templateUrl: 'partials/paymentList.html',
                controller: 'paymentListCtrl'
            })
            .when('/payment/pay/:paymentId', {
                templateUrl: 'partials/pay.html',
                controller: 'payCtrl'
            })
            // .when('/service/order/:serviceId/:mobileNumber?',{templateUrl:'partials/orderService.html',controller:'orderServiceCtrl'})
            // .when('/order/confirm/:serviceId/:mobileNumber',{templateUrl:'partials/confirmOrder.html',controller:'confirmOrderCtrl'})
            // .when('/customKeyboard/:serviceId',{templateUrl:'partials/customKeyboard.html',controller:'customKeyboardCtrl'})
            // .when('/contactList/:serviceId',{templateUrl:'partials/contactList.html',controller:'contactListCtrl'})
            // .when('/filter',{templateUrl:'partials/filter.html',controller:'filterCtrl'})
            .when('/receipt/:paymentId', {
                templateUrl: 'partials/receipt.html',
                controller: 'receiptCtrl'
            })

            .otherwise("/404", {
                templateUrl: 'partials/home.html'
            })
    }]);
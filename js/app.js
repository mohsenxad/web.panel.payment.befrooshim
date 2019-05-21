angular.module('App', [
        'ngRoute',
        'mgo-angular-wizard',
        'ngMessages',
        'panel.payment.befrooshim.controller',
        'menu.panel.payment.befrooshim.components',
        'logo.panel.payment.befrooshim.components',
        'signup.panel.payment.befrooshim.components',
        'login.panel.payment.befrooshim.components',
        'toast.panel.payment.befrooshim.components',
        'loading.panel.payment.befrooshim.components',
        'header.panel.payment.befrooshim.components',
        'footer.panel.payment.befrooshim.components',
        'createpayment.panel.payment.befrooshim.components',
        'paymentlist.panel.payment.befrooshim.components',
        'paymentlistitem.panel.payment.befrooshim.components',
        'gatewaylist.panel.payment.befrooshim.components',
        'gatewaylistitem.panel.payment.befrooshim.components',
        'createusergateway.panel.payment.befrooshim.components',
        'usergatewaylist.panel.payment.befrooshim.components',
        'usergatewaylistitem.panel.payment.befrooshim.components',
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller: 'homeCtrl',
                redirectTo: '/login'
            })
            // .when('/init/:operatorId?',{templateUrl:'partials/init.html',controller:'initCtrl'})
            // .when('/updateServices',{templateUrl:'partials/init.html',controller:'updateCtrl'})
            .when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'loginCtrl',
            })
            .when('/signup', {
                templateUrl: 'partials/signup.html',
                controller: 'signupCtrl',
            })
            .when('/userGateway/add/:token', {
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

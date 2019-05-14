angular.module('panel.payment.befrooshim.components', ['panel.payment.befrooshim.services'])
    .component('signup', {
        bindings: {},
        controller: function($rootScope, userServices) {
            var $ctrl = this;
            $ctrl.save = save;
            $ctrl.loginBtn = loginBtn;

            function save() {
                userServices.create($ctrl.user.username, $ctrl.user.mobileNumber, $ctrl.user.email, $ctrl.user.password)
                    .then(function(response) {
                        var data = response.data;
                        if (data.type) {
                            $ctrl.user = data.user;
                            $rootScope.toastMessage('ذخیره شد.');
                            console.log("saved");
                        } else {
                            $rootScope.processAppError(data.message);
                            console.log(data.message);
                        }
                    })
                    .catch(function(err) {
                        $rootScope.processAppError(err.message);
                        console.log(err.message);
                    })
            }

            function loginBtn() {
                $rootScope.login = true;
            }

            $ctrl.$onInit = function() {

            };
        },
        templateUrl: './components/signup.html'
    })
    .component('login', {
        bindings: {},
        controller: function($rootScope, $location, userServices) {
            var $ctrl = this;
            $ctrl.login = login;
            $ctrl.signupBtn = signupBtn;

            function goToUserGatewayListPage() {
                var location = '/userGateway/list/' + $ctrl.token;
                $location.url(location);
            }

            function login() {
                alert();
                userServices.login($ctrl.user.email, $ctrl.user.password)
                    .then(function(response) {
                        var data = response.data;
                        if (data.type) {
                            $ctrl.token = data.token;
                            goToUserGatewayListPage();
                        } else {
                            $rootScope.processAppError(data.message);
                        }
                    })
                    .catch(function(err) {
                        $rootScope.processAppError(err.message);
                    })
            }

            function signupBtn() {
                $rootScope.login = false;
            }

            $ctrl.$onInit = function() {
            };
        },
        templateUrl: './components/login.html'
    })
    .component('menu', {
        bindings: {
            token: '<',
        },
        controller: function($rootScope, $location, userServices) {
            var $ctrl = this;
        },
        templateUrl: './components/menu.html'
    })
    .component('header', {
        bindings: {},
        controller: function() {
            var $ctrl = this;
        },
        templateUrl: './components/header.html'
    })
    .component('createpayment', {
        bindings: {
            token: '<',
        },
        controller: function($rootScope, $scope, paymentServices) {
            var $ctrl = this;
            $ctrl.create = create;

            function create() {
                paymentServices.create($ctrl.token, $ctrl.payment.price, $ctrl.payment.description, $ctrl.payment.customerMobileNumber)
                    .then(function(response) {
                        var data = response.data;
                        if (data.type) {
                            $ctrl.createResult = data.payment;
                        } else {
                            $rootScope.processAppError(data.message);
                        }
                    })
                    .catch(function(err) {
                        $rootScope.processAppError(err.message);
                    })
            }

            $ctrl.$onInit = function() {

            };

        },
        templateUrl: './components/createPayment.html'
    })
    .component('paymentlist', {
        bindings: {
            token: '<',
        },
        controller: function($rootScope, $scope, paymentServices) {
            var $ctrl = this;

            function getAllPaymentList() {
                paymentServices.getAll_token($ctrl.token)
                    .then(function(response) {
                        var data = response.data;
                        if (data.type) {
                            $ctrl.paymentList = data.paymentList;
                        } else {
                            $rootScope.processAppError(data.message);
                        }
                    })
                    .catch(function(err) {
                        $rootScope.processAppError(err.message);
                    })
            }

            $ctrl.$onInit = function() {
                getAllPaymentList();
            };

        },
        templateUrl: './components/paymentList.html'
    })
    .component('paymentlistitem', {
        bindings: {
            payment: '<',
        },
        controller: function($scope) {
            var $ctrl = this;
        },
        templateUrl: './components/paymentListItem.html'
    })
    .component('addusergateway', {
        bindings: {
            token: '<',
        },
        controller: function($rootScope, $scope, gatewayServices, userGatewayServices) {
            var $ctrl = this;
            $ctrl.createCredentialsFiledList = createCredentialsFiledList;
            $ctrl.save = save;

            function save() {
                userGatewayServices.create($ctrl.userGateway.title, $ctrl.token, $ctrl.userGateway.gateway._id, $ctrl.userGateway.website, $ctrl.userGateway.credentials, $ctrl.userGateway.lastOrderId)
                    .then(function(response) {
                        var data = response.data;
                        if (data.type) {
                            $ctrl.userGateway = data.userGateway;
                            $rootScope.toastMessage('ذخیره شد.');
                        } else {
                            $rootScope.processAppError(data.message);
                        }
                    })
                    .catch(function(err) {
                        $rootScope.processAppError(err.message);
                    })
            }

            function getGatewayList() {
                gatewayServices.getAll($ctrl.token)
                    .then(function(response) {
                        var data = response.data;
                        if (data.type) {
                            $ctrl.gatewayList = data.gatewayList;
                        } else {
                            $rootScope.processAppError(data.message);
                        }
                    })
                    .catch(function(err) {
                        $rootScope.processAppError(err.message);
                    })
            }

            function createCredentialsFiledList() {
                console.log($ctrl.userGateway.gateway);
                $ctrl.credentialsFiledList = $ctrl.userGateway.gateway.credentialList;
            }

            $ctrl.$onInit = function() {
                getGatewayList();
            };

        },
        templateUrl: './components/addUserGateway.html'
    })
    .component('usergatewaylist', {
        bindings: {
            token: '<',
        },
        controller: function($rootScope, userGatewayServices) {
            var $ctrl = this;

            function getUserGatewayList() {
                userGatewayServices.getAll_token($ctrl.token)
                    .then(function(response) {
                        var data = response.data;
                        if (data.type) {
                            $ctrl.userGatewayList = data.userGatewayList;
                        } else {
                            $rootScope.processAppError(data.message);
                        }
                    })
                    .catch(function(err) {
                        $rootScope.processAppError(err.message);
                    })
            }

            $ctrl.$onInit = function() {
                getUserGatewayList();
            };
        },
        templateUrl: './components/userGatewayList.html'
    })
    .component('usergatewaylistitem', {
        bindings: {
            usergateway: '<',
        },
        controller: function($scope) {
            var $ctrl = this;
        },
        templateUrl: './components/userGatewayListItem.html'
    })
    .component('gatewaylist', {
        bindings: {
            token: '<',
        },
        controller: function($rootScope, gatewayServices) {
            var $ctrl = this;

            function getGatewayList() {
                gatewayServices.getAll($ctrl.token)
                    .then(function(response) {
                        var data = response.data;
                        if (data.type) {
                            $ctrl.gatewayList = data.gatewayList;
                        } else {
                            $rootScope.processAppError(data.message);
                        }
                    })
                    .catch(function(err) {
                        $rootScope.processAppError(err.message);
                    })
            }

            $ctrl.$onInit = function() {
                getGatewayList();
            };
        },
        templateUrl: './components/gatewayList.html'
    })
    .component('gatewaylistitem', {
        bindings: {
            gateway: '<',
        },
        controller: function($scope) {
            var $ctrl = this;
        },
        templateUrl: './components/gatewayListItem.html'
    })
    .component('toast', {
        bindings: {
            visible: '<',
            message: '@'
        },
        controller: function($scope) {
            var $ctrl = this;

            $ctrl.close = function() {
                $ctrl.visible = true;
                $ctrl.message = 'saved';
            }

        },
        templateUrl: './components/toast.html'
    })
    .component('loading', {
        bindings: {
            visible: '<',
        },
        controller: function($scope) {
            var $ctrl = this;
        },
        templateUrl: './components/loading.html'
    })
    .component('ugItem', {
        bindings: {},
        controller: function () {
            var $ctrl = this;
        },
        templateUrl: './components/userGatewayItem.html'
    })
    .component('footer', {
        bindings: {},
        controller: function () {
            var $ctrl = this;
        },
        templateUrl: './components/footer.html'
    });
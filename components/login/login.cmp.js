angular.module('login.panel.payment.befrooshim.components', ['user.panel.payment.befrooshim.services'])
    .component('login', {
        bindings: {},
        controller: function($rootScope, $location, userServices) {
            var $ctrl = this;

            function goToUserGatewayListPage() {
                var location = '/userGateway/list/' + $ctrl.token;
                $location.url(location);
            }

            function signin() {
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

            $ctrl.login = signin;

            $ctrl.$onInit = function() {};
        },
        templateUrl: './components/login/login.html'
    })

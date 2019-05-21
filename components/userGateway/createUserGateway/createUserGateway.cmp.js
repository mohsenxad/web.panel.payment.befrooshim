angular.module('createusergateway.panel.payment.befrooshim.components', ['userGateway.panel.payment.befrooshim.services','gateway.panel.payment.befrooshim.services'])
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
    templateUrl: './components/userGateway/createUserGateway/createUserGateway.html'
})

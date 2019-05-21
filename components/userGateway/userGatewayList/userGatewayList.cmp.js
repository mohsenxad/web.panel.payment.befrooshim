angular.module('usergatewaylist.panel.payment.befrooshim.components', ['userGateway.panel.payment.befrooshim.services'])
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
    templateUrl: './components/userGateway/userGatewayList/userGatewayList.html'
})

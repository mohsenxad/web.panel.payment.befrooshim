angular.module('gatewaylist.panel.payment.befrooshim.components', ['gateway.panel.payment.befrooshim.services'])
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
    templateUrl: './components/gateway/gatewayList/gatewayList.html'
})

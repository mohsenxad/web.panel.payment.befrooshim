angular.module('paymentlist.panel.payment.befrooshim.components', ['payment.panel.payment.befrooshim.services'])
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
    templateUrl: './components/payment/paymentList/paymentList.html'
})

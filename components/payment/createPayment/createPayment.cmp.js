angular.module('createpayment.panel.payment.befrooshim.components', ['payment.panel.payment.befrooshim.services'])
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
    templateUrl: './components/payment/createPayment/createPayment.html'
})

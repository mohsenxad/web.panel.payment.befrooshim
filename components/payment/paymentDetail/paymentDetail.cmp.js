angular.module('paymentdetail.panel.payment.befrooshim.components', [])
.component('paymentdetail', {
    bindings: {
        payment: '<',
    },
    controller: function($scope) {
        var $ctrl = this;
    },
    templateUrl: './components/payment/paymentDetail/paymentDetail.html'
})

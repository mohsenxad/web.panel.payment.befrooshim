angular.module('paymentlistitem.panel.payment.befrooshim.components', [])
.component('paymentlistitem', {
    bindings: {
        payment: '<',
    },
    controller: function($scope) {
        var $ctrl = this;
    },
    templateUrl: './components/payment/paymentListItem/paymentListItem.html'
})

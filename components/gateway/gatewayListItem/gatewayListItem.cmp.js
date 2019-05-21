angular.module('gatewaylistitem.panel.payment.befrooshim.components', [])
.component('gatewaylistitem', {
    bindings: {
        gateway: '<',
    },
    controller: function($scope) {
        var $ctrl = this;
    },
    templateUrl: './components/gateway/gatewayListItem/gatewayListItem.html'
})

angular.module('usergatewaylistitem.panel.payment.befrooshim.components', [])
.component('usergatewaylistitem', {
    bindings: {
        usergateway: '<',
    },
    controller: function($scope) {
        var $ctrl = this;
    },
    templateUrl: './components/userGateway/userGatewayListItem/userGatewayListItem.html'
})

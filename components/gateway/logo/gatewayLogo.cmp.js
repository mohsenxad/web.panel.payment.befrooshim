angular.module('gatewaylogo.panel.payment.befrooshim.components', [])
.component('gatewaylogo', {
    bindings: {
        abbriviation:'<',
    },
    controller: function($scope) {
        var $ctrl = this;


        $ctrl.$onChanges = function(){
          if ($ctrl.abbriviation){
            switch ($ctrl.abbriviation) {
              case 'sep':
                $ctrl.logoUrl = 'images/bank-logo-sep.png';
                break;
              case 'pec':
                $ctrl.logoUrl = 'images/bank-logo-pec.png';
                break;
              default:
                $ctrl.logoUrl = 'images/bank-logo2.png';
            }
          }
        }
    },
    templateUrl: './components/gateway/logo/gatewayLogo.html'
})

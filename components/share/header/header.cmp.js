angular.module('header.panel.payment.befrooshim.components', [])
    .component('header', {
        bindings: {
          token:'<',
        },
        controller: function() {
            var $ctrl = this;
        },
        templateUrl: './components/share/header/header.html'
    })

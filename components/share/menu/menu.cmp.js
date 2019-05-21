angular.module('menu.panel.payment.befrooshim.components', [])
  .component('menu', {
      bindings: {
          token: '<',
      },
      controller: function() {
          var $ctrl = this;
      },
      templateUrl: './components/share/menu/menu.html'
  })

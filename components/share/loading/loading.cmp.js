angular.module('loading.panel.payment.befrooshim.components', [])
  .component('loading', {
      bindings: {
          visible: '<',
      },
      controller: function($scope) {
          var $ctrl = this;
      },
      templateUrl: './components/share/loading/loading.html'
  })

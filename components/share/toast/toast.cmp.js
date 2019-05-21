angular.module('toast.panel.payment.befrooshim.components', [])
.component('toast', {
    bindings: {
        visible: '<',
        message: '@',
        state: '@'
    },
    controller: function($scope) {
        var $ctrl = this;

        $ctrl.close = function() {
            $ctrl.visible = false;
        }

    },
    templateUrl: './components/share/toast/toast.html'
})

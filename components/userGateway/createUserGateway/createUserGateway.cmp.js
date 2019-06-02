angular.module('createusergateway.panel.payment.befrooshim.components',
  [
    'userGateway.panel.payment.befrooshim.services',
    'gateway.panel.payment.befrooshim.services',
    'payment.panel.payment.befrooshim.services'
  ]
)
.component('addusergateway', {
    bindings: {
        token: '<',
    },
    controller: function($rootScope, $scope, gatewayServices, userGatewayServices,paymentServices) {
        var $ctrl = this;
        $ctrl.createCredentialsFiledList = createCredentialsFiledList;
        $ctrl.save = save;
        $ctrl.createTestPayment=createTestPayment;

        function save() {
            userGatewayServices.create($ctrl.userGateway.title, $ctrl.token, $ctrl.userGateway.gateway._id, $ctrl.userGateway.website, $ctrl.userGateway.credentials, $ctrl.userGateway.lastOrderId)
                .then(function(response) {
                    var data = response.data;
                    if (data.type) {
                        $ctrl.userGateway = data.userGateway;
                        $rootScope.toastMessage('ذخیره شد.');
                    } else {
                        $rootScope.processAppError(data.message);
                    }
                })
                .catch(function(err) {
                    $rootScope.processAppError(err.message);
                })
        }

        function getGatewayList() {
            gatewayServices.getAll($ctrl.token)
                .then(function(response) {
                    var data = response.data;
                    if (data.type) {
                        $ctrl.gatewayList = data.gatewayList;
                    } else {
                        $rootScope.processAppError(data.message);
                    }
                })
                .catch(function(err) {
                    $rootScope.processAppError(err.message);
                })
        }

        function createCredentialsFiledList() {
            console.log($ctrl.userGateway.gateway);
            $ctrl.credentialsFiledList = $ctrl.userGateway.gateway.credentialList;
        }

        function createTestPayment(){
          paymentServices.createTestPayment(
            $ctrl.token,
            $ctrl.userGateway.gateway._id,
            $ctrl.userGateway.lastOrderId,
            $ctrl.userGateway.credentials
          )
          .then(function(response){
            var data = response.data;
            if (data.type) {
                $ctrl.testPayment = data.payemnt;
            } else {
              $ctrl.testPaymentErrorMessage = data.message;
            }
          })
          .catch(function(err){
            $rootScope.processAppError(err.message);
          })

        }

        $ctrl.$onInit = function() {
            getGatewayList();
        };

    },
    templateUrl: './components/userGateway/createUserGateway/createUserGateway.html'
})

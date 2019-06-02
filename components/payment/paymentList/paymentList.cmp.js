angular.module('paymentlist.panel.payment.befrooshim.components', ['payment.panel.payment.befrooshim.services'])
  .component('paymentlist', {
    bindings: {
        token: '<',
    },
    controller: function($rootScope, $scope, paymentServices) {
        var $ctrl = this;

        function getAllPaymentList() {
          $ctrl.isLoading=true;
          paymentServices.getAll_token($ctrl.token)
              .then(function(response) {
                  $ctrl.isLoading=false;
                  var data = response.data;
                  if (data.type) {
                      $ctrl.paymentList = data.paymentList;
                      $ctrl.setVisiblePaymentItems(0);
                  } else {
                      $rootScope.processAppError(data.message);
                  }
              })
              .catch(function(err) {
                $ctrl.isLoading=false;
                $rootScope.processAppError(err.message);
              })
        }

        $ctrl.setVisiblePaymentItems =function(indexChange){
          let difference = $ctrl.paging.page+indexChange;
          if(difference>0){
              $ctrl.paging.page=$ctrl.paging.page+indexChange;
          }
          let startIndex = ($ctrl.paging.page-1)*10;
          let endIndex = ($ctrl.paging.page)*10;
          $ctrl.visiblePaymentList = filterPaymentItemListWithIndex($ctrl.paymentList,startIndex,endIndex);
        }

        function filterPaymentItemListWithIndex(paymentList,fromIndex,toIndex){
          let result =[];
          for(let index=fromIndex;index<=toIndex;index++){
            if(paymentList[index]){
              result.push(paymentList[index])
            }
          }
          return result;
        }

        $ctrl.$onInit = function() {
            getAllPaymentList();
            $ctrl.paging={
              rowCount:10,
              page:1,
            }
            $ctrl.isLoading=false;
            $ctrl.visiblePaymentList=[{},{},{},{},{},{},{},{},{}]
        };

    },
    templateUrl: './components/payment/paymentList/paymentList.html'
})

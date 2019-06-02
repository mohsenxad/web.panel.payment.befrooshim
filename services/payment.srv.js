angular.module('payment.panel.payment.befrooshim.services',['LocalStorageModule'])
.factory('paymentServices',function($http){
  var api={};

  api.get = function(paymentId){
    return $http({
      url:'https://api_panel_payment.befrooshim.com/verify',
      data:{paymentId:paymentId},
      method:'POST',
      headers:{'Content-Type':'application/json'}
    });
  }

  api.getAll_token = function(token){
    return $http({
      url:'https://api_panel_payment.befrooshim.com/payment/list',
      data:{token:token},
      method:'POST',
      headers:{'Content-Type':'application/json'}
    });
  }

  api.create = function(token,price,description,customerMobileNumber){
    return $http({
      url:'https://api_panel_payment.befrooshim.com/payment/create',
      data:{token:token,price:price,description:description,customerMobileNumber:customerMobileNumber},
      method:'POST',
      headers:{'Content-Type':'application/json'}
    });
  }

  api.createTestPayment = function(token,gatewayId,lastOrderId,credentials){
    return $http({
      url:'https://api_panel_payment.befrooshim.com/payment/testPayment',
      data:{token:token,gatewayId:gatewayId,lastOrderId:lastOrderId,credentials:credentials},
      method:'POST',
      headers:{'Content-Type':'application/json'}
    });
  }

  return api;
})

angular.module('panel.payment.befrooshim.services',['LocalStorageModule'])
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

    return api;
  })
  .factory('gatewayServices',function($http){
    var api={};

    api.getAll = function(token){
      return $http({
        url:'https://api_panel_payment.befrooshim.com/gateway/list',
        data:{token:token},
        method:'POST',
        headers:{'Content-Type':'application/json'}
      });
    }

    return api;
  })
  .factory('userServices',function($http){
    var api={};

    api.create = function(username,mobileNumber,email,password){
      return $http({
        url:'https://api_panel_payment.befrooshim.com/user/create',
        data:{username:username,mobileNumber:mobileNumber,email:email,password:password},
        method:'POST',
        headers:{'Content-Type':'application/json'}
      });
    }

    api.login = function(email,password){
      return $http({
        url:'https://api_panel_payment.befrooshim.com/user/getToken',
        data:{email:email,password:password},
        method:'POST',
        headers:{'Content-Type':'application/json'}
      });
    }

    return api;
  })
  .factory('userGatewayServices',function($http){
    var api={};

    api.getAll_token = function(token){
      return $http({
        url:'https://api_panel_payment.befrooshim.com/userGateway/list',
        data:{token:token},
        method:'POST',
        headers:{'Content-Type':'application/json'}
      });
    }

    api.create = function(title,token,gatewayId,website,credentials,lastOrderId){
      return $http({
        url:'https://api_panel_payment.befrooshim.com/userGateway/create',
        data:{title:title,token:token,gatewayId:gatewayId,website:website,credentials:credentials,lastOrderId:lastOrderId},
        method:'POST',
        headers:{'Content-Type':'application/json'}
      });
    }

    return api;
  })

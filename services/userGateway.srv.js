angular.module('userGateway.panel.payment.befrooshim.services',['LocalStorageModule'])
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

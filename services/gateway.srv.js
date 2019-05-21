angular.module('gateway.panel.payment.befrooshim.services',['LocalStorageModule'])
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

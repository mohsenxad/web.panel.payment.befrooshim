angular.module('user.panel.payment.befrooshim.services',['LocalStorageModule'])
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

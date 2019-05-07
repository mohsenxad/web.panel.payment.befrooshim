angular.module('panel.payment.befrooshim.controller',['panel.payment.befrooshim.services'])
  .run(function($rootScope){
    $rootScope.processAppError= function(message){
      console.log(message);
      alert(message)
    }

    $rootScope.toastMessage = function(message){
      $rootScope.showToast = true;
      $rootScope.toastMessageText = message;
      setTimeout(function(){
        $rootScope.showToast = false;
        $rootScope.toastMessageText = '';
        $rootScope.$apply();
      },1500)
    }

    $rootScope.setLoadingState= function($scope){
      $scope.$on('$routeChangeStart', function() {
        $scope.isViewLoading = true;
      });
      $scope.$on('$routeChangeSuccess', function() {
        $scope.isViewLoading = false;
      });
      $scope.$on('$routeChangeError', function() {
        $scope.isViewLoading = false;
      });
    }
  })
  .controller('gatewayListCtrl',function($rootScope,$scope,$routeParams){
    $rootScope.setLoadingState($scope);

    function init(){
      $rootScope.setLoadingState($scope);
      $scope.isViewLoading = false;

      var token = $routeParams.token;
      if(token){
        $scope.token = token;
      }else{
        $rootScope.processAppError('لطفا از صفحه ی لاگین اقدام کنید.')
      }
    }

    init();
  })
  .controller('paymentListCtrl',function($rootScope,$scope,$routeParams){
    $rootScope.setLoadingState($scope);

    function init(){
      $rootScope.setLoadingState($scope);
      $scope.isViewLoading = false;

      var token = $routeParams.token;
      if(token){
        $scope.token = token;
      }else{
        $rootScope.processAppError('لطفا از صفحه ی لاگین اقدام کنید.')
      }
    }

    init();
  })
  .controller('userGatewayListCtrl',function($rootScope,$scope,$routeParams){
    $rootScope.setLoadingState($scope);

    function init(){
      var token = $routeParams.token;
      if(token){
        $scope.token = token;
      }else{
        $rootScope.processAppError('لطفا از صفحه ی لاگین اقدام کنید.')
      }
    }

    init();
  })
  .controller('receiptCtrl',function($rootScope,$scope,$routeParams,paymentServices,$window){
    $rootScope.setLoadingState($scope);
    $scope.downloadReceipt = function(){
        var node = document.getElementById('divReceipt');
          $scope.saveOrderButtonText='در حال اجرا ...';
          $scope.isCreatingReceipt = true;
          domtoimage.toPng(node)
            .then(function (dataUrl) {
                var img = new Image();
                var link = document.createElement('a');
                link.download = $scope.orderId+'.jpeg';
                link.href = dataUrl;
                link.click();
                $scope.saveOrderButtonText='دخیره فاکتور خرید';
                $scope.isCreatingReceipt = false;
                $scope.$apply();
            })
            .catch(function (err) {
              $rootScope.processAppError(new Error('خطایی رخ داد.'))
              console.error('oops, something went wrong!', error);
              $scope.saveOrderButtonText='دخیره فاکتور خرید';
              $scope.isCreatingReceipt = false;
            });
    }

    function getPayment(){
      paymentServices.get($scope.paymentId)
        .then(function(response){
          var data = response.data;
          if(data.type){
            $scope.payment = data.payment;
          }else{
            $rootScope.processAppError(data.message);
          }
        })
        .catch(function(err){
          $rootScope.processAppError(err.message);
        })
    }

    function init(){
      var paymentId = $routeParams.paymentId;
      if(paymentId){
        $scope.paymentId = paymentId;
        $scope.isCreatingReceipt = false;
        $scope.saveOrderButtonText='دخیره فاکتور خرید';
        getPayment();
      }else{
        $rootScope.processAppError('سفارش متناظر پیدا نشد.')
      }
    }

    init();
  })
  .controller('homeCtrl',function($scope){

  })
  .controller('payCtrl',function($scope){

  })

angular.module('panel.payment.befrooshim.controller', ['payment.panel.payment.befrooshim.services'])
    .run(function($rootScope) {
        $rootScope.processAppError = function(message) {
            console.log(message);
            // alert(message)
        }

        $rootScope.toastMessage = function (message, state) {
            $rootScope.showToast = true;
            $rootScope.toastMessageText = message;
            $rootScope.toastState = state;
            setTimeout(function() {
                $rootScope.showToast = false;
                $rootScope.toastMessageText = '';
                $rootScope.toastState = '';
                $rootScope.$apply();
            }, 5000);
        }

        $rootScope.setLoadingState = function($scope) {
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
    .controller('gatewayListCtrl', function($rootScope, $scope, $routeParams) {
        $rootScope.setLoadingState($scope);

        function init() {
            $rootScope.setLoadingState($scope);
            $scope.isViewLoading = false;

            var token = $routeParams.token;
            if (token) {
                $scope.token = token;
            } else {
                $rootScope.processAppError('لطفا از صفحه ی لاگین اقدام کنید.')
            }
        }

        init();
    })
    .controller('paymentListCtrl', function($rootScope, $scope, $routeParams) {
        $rootScope.setLoadingState($scope);

        function init() {
            $rootScope.setLoadingState($scope);
            $scope.isViewLoading = false;

            var token = $routeParams.token;
            if (token) {
                $scope.token = token;
            } else {
                $rootScope.processAppError('لطفا از صفحه ی لاگین اقدام کنید.')
            }
        }

        init();
    })
    .controller('userGatewayListCtrl', function($rootScope, $scope, $routeParams) {
        $rootScope.setLoadingState($scope);

        function init() {
            var token = $routeParams.token;
            if (token) {
                $scope.token = token;
            } else {
                $rootScope.processAppError('لطفا از صفحه ی لاگین اقدام کنید.')
            }
        }

        init();
    })
    .controller('receiptCtrl', function($rootScope, $scope, $routeParams, paymentServices, $window) {
        $rootScope.setLoadingState($scope);
        $scope.downloadReceipt = function() {
            var node = document.getElementById('divReceipt');
            $scope.saveOrderButtonText = 'در حال اجرا ...';
            $scope.isCreatingReceipt = true;
            domtoimage.toPng(node)
                .then(function(dataUrl) {
                    var img = new Image();
                    var link = document.createElement('a');
                    link.download = $scope.orderId + '.jpeg';
                    link.href = dataUrl;
                    link.click();
                    $scope.saveOrderButtonText = 'دخیره فاکتور خرید';
                    $scope.isCreatingReceipt = false;
                    $scope.$apply();
                })
                .catch(function(err) {
                    $rootScope.processAppError(new Error('خطایی رخ داد.'))
                    console.error('oops, something went wrong!', error);
                    $scope.saveOrderButtonText = 'دخیره فاکتور خرید';
                    $scope.isCreatingReceipt = false;
                });
        }

        function getPayment() {
            paymentServices.get($scope.paymentId)
                .then(function(response) {
                    var data = response.data;
                    if (data.type) {
                        $scope.payment = data.payment;
                    } else {
                        $rootScope.processAppError(data.message);
                    }
                })
                .catch(function(err) {
                    $rootScope.processAppError(err.message);
                })
        }

        function init() {
            var paymentId = $routeParams.paymentId;
            if (paymentId) {
                $scope.paymentId = paymentId;
                $scope.isCreatingReceipt = false;
                $scope.saveOrderButtonText = 'دخیره فاکتور خرید';
                getPayment();
            } else {
                $rootScope.processAppError('سفارش متناظر پیدا نشد.')
            }
        }

        init();
    })
    .controller('homeCtrl', function() {})
    .controller('payCtrl', function() {})
    .controller('loginCtrl', function() {})
    .controller('signupCtrl', function() {})
    .controller('addUserGatewayCtrl', function($routeParams, $scope) {

      function init() {
          var token = $routeParams.token;
          if (token) {
              $scope.token = token;
          } else {
              $rootScope.processAppError('لطفا از صفحه ی لاگین اقدام کنید.')
          }
      }

      init();
    })
    .controller('uikitCtrl',function($scope){
      $scope.token='o563rxiCCdIq6HMDpx5s'
      $scope.fakePayment={
        _id:'123123123',
        bank:'sep',
        description:'یک پرداخت تستی',
        userMobileNumber:'09122707748',
        price:15000,
        registerDate:'1397/11/1',
        status:'done',
      };
      $scope.fakeGateway={
        abbriviation: "sep",
        credentialList: (2) ["MID", "ReportPanelPassword"],
        englishTitle: "saman",
        logoPath: "/gateway/sep.png",
        persianTitle: "سامان",
        website: "https://epayreport.sep.ir",
        _id: "5cc03ea477affe11ebb05f32",
      }

      $scope.fakeUserGateway={
        credentials: {loginAccount: "mPAn3ub3UkHC05cO2KK3"},
        gateway: {_id: "5c712dcff9bff15133fd153b", englishTitle: "parsian", persianTitle: "پارسیان", abbriviation: "pec"},
        isActive: true,
        lastOrderId: 1141,
        registerDate: "2019-02-23T14:52:24.937Z",
        user: "5c7134628db7e8497a436f90",
        website: "fecharge.com",
        _id: "5c715e2814b1e357f775c982",
      }

    })

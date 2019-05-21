angular.module('signup.panel.payment.befrooshim.components', ['user.panel.payment.befrooshim.services'])
    .component('signup', {
        bindings: {},
        controller: function($rootScope, userServices) {
            var $ctrl = this;
            $ctrl.save = save;
            $ctrl.loginBtn = loginBtn;

            function save() {
                userServices.create($ctrl.user.username, $ctrl.user.mobileNumber, $ctrl.user.email, $ctrl.user.password)
                    .then(function(response) {
                        var data = response.data;
                        if (data.type) {
                            $ctrl.user = data.user;
                            $rootScope.toastMessage('ثبت نام با موفقیت انجام شد.', 'is-success');
                            console.log("saved");
                        } else {
                            $rootScope.processAppError(data.message);
                            $rootScope.toastMessage(data.message, 'is-error');
                            console.log(data.message);
                        }
                    })
                    .catch(function(err) {
                        $rootScope.processAppError(err.message);
                        $rootScope.toastMessage('ارتباط با سرور برقرار نشد، لطفا دوباره تلاش کنید', 'is-error');
                        console.log(err.message);
                    })
            }

            function loginBtn() {
                $rootScope.login = true;
            }

            $ctrl.$onInit = function() {

            };
        },
        templateUrl: './components/signup/signup.html'
    })

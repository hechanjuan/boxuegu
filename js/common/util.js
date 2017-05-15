define(['jquery','jquery_cookie'], function () {
    return{
        checkLoginStatus: function() {
            if(!$.cookie('PHPSESSID')) {
                location.href = '/html/home/login.html';
            }
        },

        //启动页面的ajax请求loading效果
        loading: function() {
            $(document).on('ajaxStart', function() {
                $('.overlay').show();
            }).on('ajaxStop', function() {
                $('.overlay').hide();
            });
        }

    }

})
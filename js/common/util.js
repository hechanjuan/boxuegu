define(['jquery','jquery_cookie'], function () {
    return{
        checkLoginStatus: function() {
            if(!$.cookie('PHPSESSID')) {
                location.href = '/html/home/login.html';
            }
        },

        //����ҳ���ajax����loadingЧ��
        loading: function() {
            $(document).on('ajaxStart', function() {
                $('.overlay').show();
            }).on('ajaxStop', function() {
                $('.overlay').hide();
            });
        }

    }

})
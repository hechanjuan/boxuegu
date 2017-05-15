
define(['bootstrap', 'jquery', 'jquery_form','jquery_cookie','util','nprogress'] ,function(ud,$,ud,ud,util,nprogress) {
    //配置ajax请求的loading
    util.loading();
    //配置网站进度条
    //显示进度条
    nprogress.start();
    window.onload= function () {

        //完成进度条
        nprogress.done();
    }
    //监听form表单的提交事件，转为ajax请求，请求成功，那么跳转首页
    $('#login-form').ajaxForm({
        //登录成功后，服务器会返回该用户的信息，
    //我们把它存储到cookie，供其他页面使用
        success: function(data) {
            $.cookie('userInfo',JSON.stringify(data.result),{path:'/'});
            location.href = '/';
        },
        error: function() {
            alert('登陆失败！！！');
        }
    });
    //登录状态监测
    if($.cookie('PHPSESSID')){
        location.href='/';
    }

});
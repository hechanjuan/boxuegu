/**
 * Created by ASUS on 2017/5/14.
 */
define(['header','aside','util','nprogress','jquery_form','jquery'], function (ud,ud,util,nprogress,ud,$) {
    var returns = util({
        'checkLoginStatus': [],
        'loading': [],
        'getSearch': ['cs_id']
    });
    $('.teacher-add form').ajaxForm(function () {
         location.href='/html/teacher/list.html';
    });
    nprogress.done();
})
define(['header', 'aside', 'util', 'nprogress',  'jquery_form', 'jquery'], function(ud, ud, util, nprogress, ud, $) {

    var returns = util({
        'checkLoginStatus': [],
        'loading': [],
        'getSearch': ['cs_id']
    });


    //���ñ��ύ������Զ���ֹĬ����ת
    $('form').ajaxForm(function (data) {
        location.href='/html/course/course_add_step1.html?cs_id='+data.result.cs_id ;
    })





    nprogress.done();
})
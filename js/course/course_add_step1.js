define(['header','aside','jquery_form','artTemplate','nprogress','util','bootstrap','jquery'], function (ud,ud,ud,template,nprogress,util,ud,$) {

    var returns = util({
        'checkLoginStatus': [],
        'loading': [],
        'getSearch': ['cs_id']
    });



    //�γ����ģ̬��Ļ���
     var cs_id=returns.getSearch;
    $.get('/v6/course/basic', {cs_id:cs_id},function (data) {
        var template1=template('cousr_step1_tpl',data.result);
      $('.steps').html(template1);
    })


   //�γ����ģ̬����ύ




// ������վ���ؽ�����
    nprogress.done();


})
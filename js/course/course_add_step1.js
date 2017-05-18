define(['header','aside','jquery_form','artTemplate','nprogress','util','bootstrap','jquery'], function (ud,ud,ud,template,nprogress,util,ud,$) {

    var returns = util({
        'checkLoginStatus': [],
        'loading': [],
        'getSearch': ['cs_id']
    });



    //课程添加模态框的回显
     var cs_id=returns.getSearch;
    $.get('/v6/course/basic', {cs_id:cs_id},function (data) {
        var template1=template('cousr_step1_tpl',data.result);
      $('.steps').html(template1);
    })


   //课程添加模态框的提交




// 销毁网站加载进度条
    nprogress.done();


})
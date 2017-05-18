define(['header','aside','jquery_form','artTemplate','nprogress','util','jquery'], function (ud,ud,ud,template,nprogress,util,$) {
    //检测状态
    var returns = util({
        'checkLoginStatus': [],
        'loading': [],
        'getSearch': ['cs_id']
    });

    //进度条的开始
    nprogress.start();



 //先请求讲师当前信息进行数据回显，
    //然后使用表单提交插件把表单转ajax方法修改讲师信息
    var tcId= returns.getSearch;
    $.get('/v6/teacher/edit', { tc_id: tcId }, function(data) {
        $('.teacher-add').append(template('tc-edit-tpl', data.result));
        $('.teacher-add form').ajaxForm({
            data:{tc_id: tcId },
            success: function () {
                location.href='/html/teacher/list.html'
            }
        })
    })


    //完成进度条
    $(function(){
        nprogress.done();
    })

    })




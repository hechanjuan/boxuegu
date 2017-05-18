define(['header', 'aside', 'util', 'nprogress', 'artTemplate', 'jquery_form', 'jquery_region', 'jquery_datepicker', 'jquery_datepicker_CN', 'jquery_uploadify', 'jquery'], function(ud, ud, util, nprogress, template, ud, ud, ud, ud, ud, $) {
    var returns = util({
        'checkLoginStatus': [],
        'loading': [],
    });

    //修改密码
    //1.监听表单sunmit事件
    //2.事件发生时，判断新密码两次输入是否一致
    //3.一致的话表单转ajax提交修改密码
    // 4.密码修改成功，推出修改按钮，退出登录
    $('.repass form').on('submit', function (e) {

        //阻止事件默认提交
        e.preventDefault()

        if($('#newPs').val()===$('#okPs').val()){
            console.log($('#newPs').val())
            $(this).ajaxSubmit(function () {
                $('#logout').trigger('click');
            });
        }else{
            alert("新密码和确认密码不一致")
        }
        return false
    })













    nprogress.done();

})
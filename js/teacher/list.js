define(['bootstrap','header','aside','util','nprogress','artTemplate','jquery'], function (ud,ud,ud,util,nprogress,template,$) {
    var returns = util({
        'checkLoginStatus': [],
        'loading': [],
        'getSearch': ['cs_id']
    });


    returns.checkLoginStatus;
    returns.loading;

    //讲师列表渲染
    //1.请求讲师列表数据
    //2.请求成功后使用template编译页面中编好的模板
    //3.把模板放入指定位置


    template.helper('age', function (tplValue) {
        //如果没有值，则返回字符串


        var birthday=tplValue.slice(0,4);
        var curentDay=new Date().getFullYear();

        return curentDay-birthday;
    });
    //发起ajax请求

    $.get('/v6/teacher', function (data) {
        var temphtml=template('tmpl',data);
        $('#tc-list-table').append(temphtml);
    })

//讲师查看信息列表
//    1.点击查看，但讲师列表是动态生成的，所以不能直接通过标签获取，要利用事件委拖来绑定事件
//      2.把模板的内容渲染在页面上
//       3.事件触发时，利用按钮上的自定义tc_id发送ajax请求获取对应的讲师信息，渲染在页面上

    $(document).on('click','[href="#teacherModal"]', function () {
        var tc_id=$(this).attr('data-tc-id');
        $.get('/v6/teacher/view',{tc_id:tc_id}, function (data) {
            $('#teacherModal').html(template('tc-model-templ',data.result));
        })
    })


//讲师列表的启用注销按钮
//1.因为讲师列表也是动态生成的，所以这里也要用事件委拖来注册事件
//2.事件触发时，通过自定义属性去发送请求
//3.发送成功的时候，id_status的值已经改变了，要修改按钮上的值，还要修改内容的文字


$(document).on('click','.btn-tc-status', function () {
    var tc_id=$(this).attr('data-tc-id');
    var tc_status=$(this).attr('data-tc-status');
    var $that=$(this);
    $.post('/v6/teacher/handle',{
        tc_id:tc_id,
        tc_status: tc_status
    }, function (data) {
            $that.attr('data-tc-status',data.result.tc_status);
            $that.text(data.result.tc_status==0?'注销':'启动')
        }
    )
})













    //销毁网站加载进度条
    nprogress.done();




})
define(['header', 'aside', 'util', 'nprogress', 'artTemplate', 'jquery_form', 'jquery_region', 'jquery_datepicker', 'jquery_datepicker_CN', 'jquery_uploadify', 'jquery'], function(ud, ud, util, nprogress, template, ud, ud, ud, ud, ud, $) {

    var returns = util({
        'checkLoginStatus': [],
        'loading': [],
    });

    //1.发起ajax请求数据
    //  2.把模板添加到页面中，渲染页面

    $.get('/v6/teacher/profile', function (data) {
       $('.teacher-profile').html(template('settings-tpl',data.result));
        profileSubmit();
        initPCD();
        initDatepicker();
        initUploadify()
    })


    //表单保存
    //1.修改模板中
//2.使用插件表单提交，因为在表单提交前要用插件完成地址，所以不能用ajaxForm监听事件，要手动地给submit添加监听事件
//3.发起请求
//    4.请求成功后，回显

    //因为个人信息表是动态生成的，所以要在动态生成的请求里面回调

    function profileSubmit(){
        //因为要在提交前获取页面数据，不能用这种方法
        //$('.teacher-profile form').ajaxForm(function() {
        //    location.reload();
        //});
        $('.teacher-profile form').on('submit', function (e) {
            e.preventDefault()
            $(this).ajaxSubmit({
                data: {
                    tc_hometown: $('#p').find(':selected').text() + '|' + $('#c').find(':selected').text() + '|' + $('#d').find(':selected').text(),
                    tc_province: $('#p').val(),
                    tc_city: $('#c').val(),
                    tc_district: $('#d').val()
                },
                success: function() {
                    location.reload();
                }
            });

            // 为了兼容老版本IE
            return false;
        });
    }


    //初始化省市县三联动
    function initPCD(){
        $('#tc-region').region({
            url:'/lib/jquery-region/region.json'
        })

    }


    //初始化日期差插件

    function initDatepicker(){

        $('input[name="tc_birthday"]').datepicker({
            language: 'zn-CN',
            format: 'yy-mm-dd',
            startDate: new Date('1950-01-01'),
            endDate: new Date('1999-01-01')
    });

        $('input[name="tc_join_date"]').datepicker({
            language: 'zn-CN',
            format: 'yy-mm-dd',
            startDate: new Date('2009-01-01'),
            endDate: new Date()
        });

    }


    //初始化文件上传插件
    function initUploadify(){
     console.log(1)
       $('#upfile').uploadify({
           swf:'/lib/uploadify/uploadify.swf',
           uploader: '/v6/uploader/avatar',
           fileObjName:'tc_avatar',
           buttonText:'',
           fileTypeExts: '*.gif; *.jpg; *.png'
       })




    }



    //销毁网站加载进度条
    nprogress.done();
})


define(['header', 'aside', 'util', 'nprogress', 'artTemplate', 'jquery_form', 'jquery_region', 'jquery_datepicker', 'jquery_datepicker_CN', 'jquery_uploadify', 'jquery'], function(ud, ud, util, nprogress, template, ud, ud, ud, ud, ud, $) {

    var returns = util({
        'checkLoginStatus': [],
        'loading': [],
    });

    //1.����ajax��������
    //  2.��ģ����ӵ�ҳ���У���Ⱦҳ��

    $.get('/v6/teacher/profile', function (data) {
       $('.teacher-profile').html(template('settings-tpl',data.result));
        profileSubmit();
        initPCD();
        initDatepicker();
        initUploadify()
    })


    //������
    //1.�޸�ģ����
//2.ʹ�ò�����ύ����Ϊ�ڱ��ύǰҪ�ò����ɵ�ַ�����Բ�����ajaxForm�����¼���Ҫ�ֶ��ظ�submit��Ӽ����¼�
//3.��������
//    4.����ɹ��󣬻���

    //��Ϊ������Ϣ���Ƕ�̬���ɵģ�����Ҫ�ڶ�̬���ɵ���������ص�

    function profileSubmit(){
        //��ΪҪ���ύǰ��ȡҳ�����ݣ����������ַ���
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

            // Ϊ�˼����ϰ汾IE
            return false;
        });
    }


    //��ʼ��ʡ����������
    function initPCD(){
        $('#tc-region').region({
            url:'/lib/jquery-region/region.json'
        })

    }


    //��ʼ�����ڲ���

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


    //��ʼ���ļ��ϴ����
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



    //������վ���ؽ�����
    nprogress.done();
})


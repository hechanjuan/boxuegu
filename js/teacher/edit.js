define(['header','aside','jquery_form','artTemplate','nprogress','util','jquery'], function (ud,ud,ud,template,nprogress,util,$) {
    //���״̬
    var returns = util({
        'checkLoginStatus': [],
        'loading': [],
        'getSearch': ['cs_id']
    });

    //�������Ŀ�ʼ
    nprogress.start();



 //������ʦ��ǰ��Ϣ�������ݻ��ԣ�
    //Ȼ��ʹ�ñ��ύ����ѱ�תajax�����޸Ľ�ʦ��Ϣ
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


    //��ɽ�����
    $(function(){
        nprogress.done();
    })

    })




define(['header','aside','util','nprogress','artTemplate','jquery'], function (ud,ud,util,nprogress,template,$) {
    util.checkLoginStatus();
    util.loading();

    //��ʦ�б���Ⱦ
    //1.����ʦ�б�����
    //2.����ɹ���ʹ��template����ҳ���б�õ�ģ��
    //3.��ģ�����ָ��λ��


    template.helper('age', function (tplValue) {
        //���û��ֵ���򷵻��ַ���


      var birthday=tplValue.slice(0,4);
      var curentDay=new Date().getFullYear();

        return curentDay-birthday;
    });
    //����ajax����

    $.ajax({
        url:'/v6/teacher',
        type:'get',
        success: function (data) {
            $('#tc-list-table').append(template('tmpl', data));
        }
    })






    //������վ���ؽ�����
 nprogress.done();




})
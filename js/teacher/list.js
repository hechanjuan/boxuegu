define(['header','aside','util','nprogress','artTemplate','jquery'], function (ud,ud,util,nprogress,template,$) {
    util.checkLoginStatus();
    util.loading();

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

    $.ajax({
        url:'/v6/teacher',
        type:'get',
        success: function (data) {
            $('#tc-list-table').append(template('tmpl', data));
        }
    })






    //销毁网站加载进度条
 nprogress.done();




})
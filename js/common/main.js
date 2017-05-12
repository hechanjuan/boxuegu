/**
 * 因为是所有页面公用的入口模块，
 * 所以这里面会对所有的模块都进行paths配置。
 * */
require.config({
	baseUrl: '/',
	
	paths: {
		
		// 每个页面对应的模块
		index: 'js/home/index',
		login: 'js/home/login',
		repass: 'js/home/repass',
		settings: 'js/home/settings',
		tcEdit: 'js/teacher/edit',
		tcList: 'js/teacher/list',
		usProfile: 'js/user/profile',
		usList: 'js/user/list',
		csAdd: 'js/course/add',
		csList: 'js/course/list',
		cgAdd: 'js/course/category_add',
		cgList: 'js/course/category_list',
		csAdd1: 'js/course/course_add_step1',
		csAdd2: 'js/course/course_add_step2',
		csAdd3: 'js/course/course_add_step3',
		
		// 公共的模块
		aside: 'js/common/aside',
		header: 'js/common/header',
		util: 'js/common/util',
		
		// 第三方模块
		jquery: 'lib/jquery/jquery.min',
		bootstrap: 'lib/bootstrap/js/bootstrap.min',
	}
});

// 根据页面的pathname加载对应的模块
var obj = {
	'/': 'index',
	'/html/user/list.html': 'usList',
	'/html/user/add.html': 'usAdd'
};
// require第一个参数是数组
require([obj[location.pathname]]);

// 这里的Vue为Vue对象(非创建出来的实例)，vm为main.js中“Vue.use(httpInterceptor, app)”这一句的第二个参数，
// 为一个Vue的实例，也即每个页面的"this"
// 如果需要了解这个install方法是什么，请移步：https://uviewui.com/components/vueUse.html

const install = (Vue, vm) => {
	Vue.prototype.$u.http.setConfig({
		baseUrl: '', // 请求的本域名
		dataType: 'json', // 设置为json，返回后会对数据进行一次JSON.parse()
		showLoading: true, // 是否显示请求中的loading
		loadingText: '努力加载中~',
		loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
		loadingMask: true, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
		// 设置自定义头部content-type
		header: {
			'content-type': 'application/json;charset=UTF-8'
		},
	});
	
	// 请求拦截部分，如配置，每次请求前都会执行
	Vue.prototype.$u.http.interceptor.request = (config) => {
		
	}
	
	// 响应拦截，如配置，每次请求结束都会执行本方法
	Vue.prototype.$u.http.interceptor.response = (res) => {
		
	}
}

export default {
	install
}
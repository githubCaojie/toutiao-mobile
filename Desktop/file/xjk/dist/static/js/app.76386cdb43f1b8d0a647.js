webpackJsonp([3],{0:function(e,t){},IcnI:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__=__webpack_require__("mvHQ"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__),__WEBPACK_IMPORTED_MODULE_1_vue__=__webpack_require__("7+uW"),__WEBPACK_IMPORTED_MODULE_2_vuex__=__webpack_require__("NYxO");__WEBPACK_IMPORTED_MODULE_1_vue__.default.use(__WEBPACK_IMPORTED_MODULE_2_vuex__.a);var store=new __WEBPACK_IMPORTED_MODULE_2_vuex__.a.Store({state:{userInfo:eval("("+localStorage.getItem("userInfo")+")"),token:eval("("+localStorage.getItem("token")+")"),callbackurl:location.protocol+location.host+"/login"},mutations:{handleUserInfo:function(e,t){e.userInfo=t,localStorage.setItem("userInfo",__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(t))},handleToken:function(e,t){e.token=t,localStorage.setItem("token",__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(t))}},getters:{userInfo:function(e){return e.userInfo},token:function(e){return e.token},callbackurl:function(e){return e.callbackurl}},actions:{},modules:{}});__webpack_exports__.a=store},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},r,!1,function(e){n("WSFU")},null,null).exports,_=n("/ocq");o.default.use(_.a);var u=_.a.prototype.push;_.a.prototype.push=function(e,t,n){return t||n?u.call(this,e,t,n):u.call(this,e).catch(function(e){return e})};var i=new _.a({routes:[{path:"",redirect:"/login"},{path:"/login",name:"login",component:function(){return n.e(1).then(n.bind(null,"wTdw"))},meta:{title:"登录"}},{path:"/home",name:"home",component:function(){return n.e(0).then(n.bind(null,"/5L7"))},meta:{title:"湘交科",requireAuth:!0}}]}),s=n("IcnI"),l=n("nrAE"),c=n.n(l),f=n("zL8q"),p=n.n(f),h=(n("tvR6"),n("//Fk")),g=n.n(h),d=n("mtWM"),m=n.n(d),E=n("mw3O"),I=n.n(E),v={hasUser:"/hncrportal/menhu/hasUser",getCode:"/hncrportal/menhu/getCode",login:"/hncrportal/menhu/login",logOut:"/hncrportal/menhu/logOut",getRole:"/hncrportal/home/getRole",openPurchase:"/hncrportal/home/openPurchase",getTodoList:"/hncrportal/todoList/list",getlistCount:"/hncrportal/todoList/listCount"};m.a.defaults.withCredentials=!0,m.a.defaults.baseURL="http://xinxh.tianyi.hnjtcloud.com";var k=[v.getRole,v.getlistCount,v.getTodoList,v.logOut,v.openPurchase];m.a.interceptors.response.use(function(e){return 200==e.status?e:f.Message.error({message:"对不起，服务器开了点小差，请重新登录",onClose:function(){var e={token:s.a.getters.token,mobile:s.a.getters.userInfo.linkmenPhone};return m.a.post(v.logOut,I.a.stringify(e)).then(function(e){return localStorage.removeItem("userInfo"),localStorage.removeItem("token"),s.a.commit("handleUserInfo",""),s.a.commit("handleToken",""),i.push({name:"login"})})}})},function(e){return g.a.reject(e)});var b={post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return k.includes(e)?new g.a(function(n,o){m.a.post(e,I.a.stringify(t),{headers:{token:s.a.getters.token}}).then(function(e){n(e.data)},function(e){o(e)})}):new g.a(function(n,o){m.a.post(e,I.a.stringify(t)).then(function(e){n(void 0==e?e:e.data)},function(e){o(e)})})},get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return k.includes(e)?new g.a(function(n,o){m.a.get(e+"?"+I.a.stringify(t),{headers:{token:s.a.getters.token}}).then(function(e){n(e.data)})}):new g.a(function(n,o){m.a.get(e+"?"+I.a.stringify(t)).then(function(e){n(e.data)})})}};o.default.use(c.a),o.default.use(p.a),i.beforeEach(function(e,t,n){e.meta.requireAuth&&(s.a.state.userInfo?n():n({path:"/login"})),e.meta.title&&(document.title=e.meta.title),n()}),o.default.prototype.request=b,o.default.prototype.api=v,o.default.config.productionTip=!1,new o.default({el:"#app",router:i,store:s.a,components:{App:a},template:"<App/>"})},WSFU:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.76386cdb43f1b8d0a647.js.map
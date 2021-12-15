import Vue from 'vue'
import {ValidationProvider, ValidationObserver, extend, localize} from 'vee-validate'
import {required, email} from 'vee-validate/dist/rules' // 验证规则导入
// import CN from 'vee-validate/dist/locale/zh_CN.json' // 加载语言包


extend('required', {  //必填验证
  ...required,
  message: '请填写{_field_}'
})
extend('email', { // 邮箱
  ...email,
  message: '请输入正确的邮箱地址'
})
extend('mobile', {  // 手机号码验证
  message: () => `请输入正确的手机号码`,
  validate: value => value.length === 11 && /^(((13[0-9]{1})|(14[57]{1})|(15[012356789]{1})|(17[03678]{1})|(18[0-9]{1})|(19[89]{1})|(16[6]{1}))+\d{8})$/.test(value)
})
extend('number', {
  validate: (value)=> {
    let reg = /$/
  }
})



// 设置
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

var front_global_messages = {
	'zh_CN' : messages_zh_CN,
	'en_US' : messages_en_US,
	'zh_TW' : messages_zh_TW
};
//创建VueI18n 实例
var i18n = new VueI18n({
	locale : localStorage.locale, // 语言标识
	messages : front_global_messages,
	silentTranslationWarn: true
}); 
i18nHandlerComponent(function(key, value){
	i18n.t(key, value)
}); 
Vue.config.lang = localStorage.getItem('locale') || 'zh_CN';
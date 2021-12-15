<template>
  <div></div>
</template>

<script>
import appUtils from '@/utils/appUtils'
export default {
  name: 'blank',
  data() {
    return {
      url: '',
      key: 'blank',
    }
  },
  created(){
    let flagObj = appUtils.getCookie(this.key, true) || {};
    if (flagObj.flag && flagObj.flag === 'Y') {
      appUtils.removeCookie(this.key)
      this.$root.appBack();
    } else {
      this.url = this.$route.query.url;
      window.location.href = this.url;
      appUtils.setCookie(this.key, JSON.stringify({flag: 'Y'}))
    }
  },
}
</script>

<style lang="scss" scoped>
  
</style>
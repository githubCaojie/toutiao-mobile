<template>
  <div class="app-full">
    <van-nav-bar
      title="测量放样"
      :border="false"
      @click-left="$root.appBack()"
      left-arrow
    ></van-nav-bar>
    <div :id="compId" class="app-main">
      <clfy-form ref="clfyForm"></clfy-form>
    </div>
  </div>
</template>

<script>
import clfyForm from './comp-clfy-form'
import { postAction } from '@/api/app-base'
import appMixin from '@/utils/appMixin'
export default {
  name: 'clfyForm',
  components: {
    'clfy-form': clfyForm,
  },
  mixins: [appMixin],
  data() {
    return {
      compId: this.appCommon.guuid(),
      id: '',
      unitId: '',
      params: {},
    }
  },
  created(){
    // this.id = this.$route.query.id || '';
    // this.unitId = this.$route.query.unitId || '';
    // this.params.appBusiUuid = this.id;
    // this.params.unitId = this.unitId;
  },
  methods: {
    // sendSucc(values) {
    //   this.$toast('保存成功~');
    //   this.$root.appBack(-2, 500);
    // },
  },
}
</script>

<style lang="scss" scoped>
  
</style>
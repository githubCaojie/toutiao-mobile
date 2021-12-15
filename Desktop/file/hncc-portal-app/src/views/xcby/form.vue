<template>
  <div class="app-full">
    <van-nav-bar
      title="现场报验"
      :border="false"
      @click-left="$root.appBack()"
      left-arrow
    ></van-nav-bar>
    <div :id="compId" class="app-main">
      <xcby-from @sendSucc="sendSucc" ref="xcbyForm" :params="params" ></xcby-from>
    </div>
  </div>
</template>

<script>
import xcbyForm from './comp-xcby-form'
import { postAction, worderInitData } from '@/api/app-base'
import appMixin from '@/utils/appMixin'
export default {
  name: 'xcbyForm',
  components: {
    'xcby-from': xcbyForm,
  },
  mixins: [appMixin],
  data() {
    return {
      compId: this.appCommon.guuid(),
      id: '',
      objUuid: '',
      objUuidFj: '',
      disabled: false,
      unitId: '',
      model: {},
      params: {},
    }
  },
  created(){
    console.log(this.params)
    this.id = this.$route.query.id || '';
    this.unitId = this.$route.query.unitId || '';
    this.params.appBusiUuid = this.id;
    this.params.unitId = this.unitId;
  },
  methods: {
    sendSucc(values) {
      this.$toast('保存成功~');
      this.$root.appBack(-2, 500);
    },
  },
}
</script>

<style lang="scss" scoped>
  
</style>
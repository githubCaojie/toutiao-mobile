<template>
  <div class="app-full">
    <van-nav-bar title="新增" :border="false" @click-left="$root.appBack()" left-arrow>
    </van-nav-bar>
    <div class="app-main-btn">
      <compHdFrom :disabled="model.status!='0'" @model="model=$event" ref="form" :id="id"></compHdFrom>
    </div>
    <div class="app-fa">
      <van-button :disabled="model.status!='0'" style="width: 45%" block type="info" @click="save(false)">保存</van-button>
      <van-button :disabled="model.status!='0'" style="width: 45%" block type="primary" @click.prevent="save(true)">传递</van-button>
    </div>
  </div>
</template>

<script>
import compHdFrom from './compHdForm'
export default {
  name: "addTrouble",
  components: {
    compHdFrom,
  },
  data() {
    return {
      id: '',
      disabled: false,
      model: {},
    };
  },
  created() {
    this.id = this.$route.query.id;
  },
  mounted() {
    this.disabled = this.$refs.form.model.status!='0';
  },
  methods: {
    async save(flag) {
      await this.$refs.form.save()
      if (flag) {
        await this.$refs.form.send()
        this.$toast('传递成功~')
        this.$root.appBack(-1, 500);
      } else {
        this.$toast('保存成功~')
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
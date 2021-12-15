<template>
  <div class="app-full">
    <van-nav-bar title="编辑" :border="false" @click-left="$root.appBack()" left-arrow>
    </van-nav-bar>
    <div class="app-main-btn">
      <xcbg-form ref="form" :id="id"></xcbg-form>
    </div>
    <div class="app-fa">
      <van-button style="width: 45%" block type="info" @click="$refs.form.save()">保存</van-button>
      <van-button style="width: 45%" block type="primary" @click.prevent="send">传递</van-button>
    </div>
  </div>
</template>

<script>
import form from './xcbg-form'
export default {
  name: "addTrouble",
  components: {
    'xcbg-form': form,
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
  methods: {
    save() {
      this.$refs.form.save().then(() => {
        this.$toast('保存成功~')
        this.$root.appBack(-1, 500)
      })
    },
    send() {
      this.$refs.form.normalSend().then(() => {
        this.$toast('传递成功~')
        this.$root.appBack(-1, 500)
      })
      
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
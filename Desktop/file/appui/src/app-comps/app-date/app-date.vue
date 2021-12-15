<template>
  <div class="appDate">
    <van-field
      @click="show = disabled ? false : !show"
      readonly
      :disabled="disabled"
      v-model="dateShow"
      :required="required"
      :label="$attrs.label || title"
      v-bind="$attrs"
      :right-icon="disabled ? '' : require('./date.png')"
    />

    <van-popup
      get-container="#app"
      :round="true"
      :close-on-popstate="true"
      v-model="show"
      position="bottom"
      :overlay="true"
    >
      <van-datetime-picker
        v-model="currentDate"
        :type="type"
        @confirm="dateSure"
        :cancel-button-text="'清空'"
        @cancel="clearDate"
      />
    </van-popup>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "appDate",
  props: {
    title: {
      type: String,
      default: "日期：",
    },
    type: {
      type: String,
      default: "datetime",
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
    },
  },
  data() {
    return {
      show: false,
      currentDate: new Date(),
      dateShow: "",
    };
  },
  watch: {
    value: {
      handler: function (nval, oldVal) {
        if (nval) {
          this.currentDate = new Date(nval.replace(/-/g, "/")); //处理ios - 问题
          this.formatDate();
        }
      },
      immediate: false,
    },
  },
  mounted() {
    this.setInitDate();
  },
  methods: {
    setInitDate(){
      if (!this.value) {
        // this.currentDate = new Date(
        //   moment().format("YYYY-MM-DD HH:mm").replace(/-/g, "/")
        // ); //处理ios - 问题
      } else {
        this.currentDate = new Date(nval.replace(/-/g, "/")); //处理ios - 问题
        this.formatDate()
      }
    },
    formatDate() {
      let formatter = "YYYY-MM-DD";
      if (this.type == "datetime") {
        formatter = "YYYY-MM-DD HH:mm";
      }
      let dateStr = moment(this.currentDate).format(formatter);
      let emitStr = dateStr;
      if (emitStr.length > 10) {
        emitStr += ":00";
      } else {
        emitStr += " 00:00:00";
      }
      this.$emit("input", emitStr);
      this.dateShow = dateStr;
    },
    dateSure(val) {
      this.show = false;
      this.formatDate(true);
    },
    clearDate() {
      this.show = false;
      this.dateShow = "";
      this.$emit("input", "");
    },
  },
};
</script>

<style lang="scss" scoped>
.appDate {
  // border-bottom: 0.5px solid #ebedf0;
  position: relative;
  &::after {
    position: absolute;
    box-sizing: border-box;
    content: " ";
    pointer-events: none;
    right: 0;
    bottom: 0;
    left: 0.42667rem;
    border-bottom: 0.02667rem solid #ebedf0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
}
</style>
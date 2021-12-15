<template>
  <div class="app-drop">
    <app-input
      @click="toggleDrop"
      readonly
      :disabled="dropDisabled"
      v-model="selItem.label"
      :required="required"
      :label="$attrs.label || title"
      :right-icon="dropDisabled?'':iconStr"
      :left-icon="$attrs.leftIcon"
    />
    <van-popup
      get-container="#app"
      :close-on-popstate="true"
      v-model="show"
      position="bottom"
      :overlay="true"
      :style="{ height: '40%', width: '90%', marginLeft: '5%', marginBottom: '20px', borderRadius: '10px' }"
    >
      <div class="dp-content">
        <div class="dp-title">{{title}}</div>
        <van-cell-group>
          <van-cell 
            :title="item.label?item.label:'全部'"
            @click="selItem=item;emitMethod();toggleDrop();"
            v-for="item in columns"
            :key="item.value">
            <template #right-icon>
              <van-icon :name="item.value===selItem.value?selIcon:''" class="search-icon" />
            </template>
          </van-cell>
        </van-cell-group>
      </div>

    </van-popup>
  </div>
</template>

<script>
export default {
  name: "appDrop",
  inject: {
    vanForm: {
      default: null
    }
  },
  props: {
    dropName: {
      type: String
    },
    dropFilter: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: "下拉"
    },
    value: {
      type: [String, Number]
    },
    dpIndex: {
      type: Number,
      default: 0
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    dpData: {
      type: Array
    },
    cashFlag: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: "./drop.png"
    },
    empty: {
      type: Boolean,
      default: true
    },
    cascade: {
      type: Boolean,
      default: false,
    },
    cascadeData: {
      type: [String, Number, Boolean],
      default: '',
    }
  },
  data() {
    return {
      show: false,
      columns: [],
      selIndex: -1, //默认选择下拉为空
      selItem: {
        value: '',
      },
      iconStr: "",
      selIcon: require('./sel.png'),
      dropDisabled: this.disabled,
      _dpFilter: '',
    };
  },
  created() {
    if (this.vanForm) {
      this.dropDisabled = this.disabled || this.vanForm.$props.disabled;
    }
    this._dpFilter = this.dropFilter;
    if (this.cascade && !this.cascadeData) {
      return;
    }
    if (this.cascade && this.cascadeData) { //级联
      this._dpFilter = this.cascadeData;
    }
    if (this.dpData && this.dpData.length > 0) {
      this.columns = this.dpData;
      this.setDpValue();
    } else if (this.dropName) {
      this.dropInfo();
    }
  },
  mounted() {
    this.iconStr = require(this.icon + "");
  },
  watch: {
    dpData: function(nval, oldVal) {
      this.columns = nval;
      this.setDpValue();
    },
    value: function(nval, oldVal) {
      if (nval !== this.selItem.value) {
        if (this.columns.length > 0) {
          this.setDpValue();
        }
      }
    },
    dropFilter: function(nval, oldVal) {
      this.clearDrop();
      if (nval) {
        this._dpFilter = nval;
        this.dropInfo();
      }
    },
    cascadeData: function(nval, oldVal) {
      this.clearDrop();
      if (nval) {
        this._dpFilter = nval;
        this.dropInfo();
      }
    }
  },
  methods: {
    clearDrop(){
      this.columns = [];
      this.$emit('input','');
      this.selItem = {
        value: '',
      }
    },
    dropInfo() {
      let dpKey = this.dropName+ (this._dpFilter? ('-' + this._dpFilter) : '');
      let data = this.$store.getters["drop/getDropData"](dpKey);
      if (data) {
        if (this.empty) {
          this.columns = [{ label: "", value: "" }, ...data];
        } else {
          this.columns = data;
        }
        this.setDpValue();
      } else {
        this.appCommon.once(dpKey, data => {
          if (this.empty) {
            this.columns = [{ label: "", value: "" }, ...data];
          } else {
            this.columns = data;
          }
          this.setDpValue();
        });
        this.$store.dispatch("drop/asyncDropData", {
          dpKey: dpKey,
          label: this.dropName,
          filter: this._dpFilter,
          cashFlag: this.cashFlag
        });
      }
    },
    setDpValue() {
      if (this.value) {
        //下拉有值
        for (let idx in this.columns) {
          if (this.value == this.columns[idx].value) {
            this.selIndex = parseInt(idx);
            this.selItem = this.columns[idx];
          }
        }
      } else if (this.dpIndex >= 0 || this.dpIndex < this.columns.length) {
        this.selItem = this.columns[this.dpIndex]
          ? this.columns[this.dpIndex]
          : {};
        this.selIndex = this.dpIndex;
      }

      this.emitMethod();
    },
    emitMethod() {
      this.$emit("dpChange", this.selItem);
      this.$emit(
        "input",
        this.selItem.value != undefined ? this.selItem.value : ""
      );
    },
    confirm() {
      this.toggleDrop();
      let idx = this.$refs.appDrop.getIndexes()[0];
      this.selItem = this.columns[idx];
      this.emitMethod();
    },
    cancel() {
      this.toggleDrop();
    },
    toggleDrop() {
      if (this.dropDisabled) {
        return;
      }
      if (this.columns.length == 0) {
        this.$toast("暂无数据~");
        return;
      }
      this.show = !this.show;
    }
  }
};
</script>

<style lang="scss" scoped>
.app-drop {
  position: relative;
  &::after {
    content: "";
    border-bottom: 1px solid #ebedf0;
    position: absolute;
    bottom: 0;
    width: 190%;
    transform: scale(0.5);
    left: -45%;
  }
  .reqired-span {
    color: red;
    position: absolute;
    left: 8px;
    font-size: 14px;
  }
}
.dp-title {
  font-weight: bold;
  text-align: center;
  padding: 10px;
  font-size: 16px;
} 
</style>
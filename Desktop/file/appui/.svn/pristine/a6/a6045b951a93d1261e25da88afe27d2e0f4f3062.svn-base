<template>
  <span>{{label}}</span>
</template>

<script>
export default {
  name: "appDropShow",
  data() {
    return {
      label: "",
    };
  },
  props: {
    dropName: {
      type: String
    },
    dropFilter: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number]
    },
    dpData: {
      type: Array
    },
  },
  mounted() {
    // this.dropInfo();
  },
  watch: {
    value: {
      handler: function(nval, oldVal) {
        if (nval != undefined && nval != null && nval.trim() != "") {
          this.dropInfo();
        }
      },
      immediate: true
    }
  },
  methods: {
    dropInfo() {
      if (this.dpData && this.dpData.length > 0) {
        this.setDropData(this.dpData);
        return;
      }
      let dpKey =this.dropName+ (this.dpFilter? ('-' + this.dpFilter) : '');
      let data = this.$store.getters["drop/getDropData"](dpKey);
      if (data) {
        this.setDropData(data);
      } else {
        this.appCommon.once(dpKey, data => {
          this.setDropData(data);
        });
        this.$store.dispatch("drop/asyncDropData", {
          dpKey: dpKey,
          label: this.dropName,
          filter: this.dropFilter
        });
      }
    },
    setDropData(data) {
      for (let item of data) {
        if (item.value == this.value) {
          this.label = item.label;
          break;
        }
      }
    }
  }
};
</script>

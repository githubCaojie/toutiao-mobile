<template>
  <div class="app-full">
    <keep-alive>
      <zlunit-choose @nodeSel="nodeSel"></zlunit-choose>
    </keep-alive>
  </div>
</template>

<script>
import zlunitChoose from '@/components/zlunit-choose'
import { frameworkTreeData } from "@/api/app-base";
import { postAction } from '../../api/app-base';
import Vue from 'vue';
import { Dialog } from 'vant';
export default {
  name: "unitChoose",
  components: {
    zlunitChoose
  },
  data() {
    return {
      
    };
  },
  mounted() {
  },
  methods: {
    nodeSel(unit) {
      console.log(unit)
      if(unit.canClfy === 'Y'){
        if (unit.byStatus !== "-1") {
          this.getClfyData(unit.code)
        } else {
            if(unit.nodeType === '45'){
              Dialog.confirm({title:'提示',message:'该部位为子分项，是否继续报验？',confirmButtonText:'是',cancelButtonText:'否'}).then(() => {
                this.$root.goPath("/clfyForm", { unitId: unit.code });
              })
            }
            else{
              this.$root.goPath("/clfyForm", { unitId: unit.code });
            }
        }
      }
      else if (unit.byStatus !== "-1") {
        this.getByData(unit.code);
      } else {
          if(unit.nodeType === '45'){
            Dialog.confirm({title:'提示',message:'该部位为子分项，是否继续报验？',confirmButtonText:'是',cancelButtonText:'否'}).then(() => {
              this.$root.goPath("/xcbyForm", { unitId: unit.code });
            })
          }
          else {
            this.$root.goPath("/xcbyForm", { unitId: unit.code });
          }
      }
    },
    getClfyData(unitId) {
      let params = {
        dataWrap: JSON.stringify({}),
        bdId: this.$store.state.user.bdId,
        unitId: unitId,
      };
      postAction("/zlTableFy/initZlTableFy", params).then((rdata) => {
        let model = rdata.dataWraps.dataWrap.data;
        this.$root.goPath("/flowMain", {
          appInstanceId: model.instanceId,
          openMode: "4",
        });
      });
    },
    getByData(unitId) {
      let params = {
        bdId: this.$store.state.user.bdId,
        unitId: unitId,
        dc: JSON.stringify({}),
      };
      postAction("/zlTableGcby/initZlUnitGcbyData", params).then((rdata) => {
        let bydata = rdata.dataWraps.dataWrap.data;
        this.$root.goPath("/flowMain", {
          appInstanceId: bydata.instanceId,
          openMode: "4",
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.tree-content {
  height: calc(100% - 45px);
}
.item-wrap {
  padding-left: 10px;
  box-sizing: border-box;
}
.content {
  flex: 1;
  .van-cell__title {
    width: calc(100% - 60px);
    overflow: auto;
  }
}
</style>
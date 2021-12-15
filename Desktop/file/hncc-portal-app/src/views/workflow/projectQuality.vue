<template>
  <div class="app-full">
    <van-nav-bar title="工程质量评定标准设置" :border="false" @click-left="$root.appBack()" left-arrow>
      <!-- <van-icon @click="showQuery=!showQuery" size="22px" :name="require('../../assets/imgs/query.png')" slot="right"  /> -->
    </van-nav-bar>
    <div class="app-main">
      <div>
        <app-tree
          title="标段"
          @treeClose="treeClose"
          :rootCode="'0'" 
          expandLevel="3"
          :rootVisible="true"
          :rightfilter="false"
          :dynamic="false"
          retriever="com.haiyisoft.pmzl.tree.ZlProjectTree"
          ></app-tree>
      </div>
      <article class="list">
        <app-list :immediate="false" ref="proList">
          <template v-slot="{ data }">
            <section @click="proDetail(data.id)"
              class="app-list">
              <ul>
                <li>项次：</li>
                <li>{{ data.xc }}</li>
              </ul>
              <ul>
                <li>编码：</li>
                <li>{{ data.itemCode }}</li>
              </ul>
              <ul>
                <li>项目名称：</li>
                <li>{{ data.xmName }}</li>
              </ul>
              <fa-icon @click.stop="delItem(data)" class="list-item-del" icon="trash-alt" />
            </section>
          </template>
        </app-list>
      </article>
    </div>
  </div>
</template>

<script>
import { postAction } from "@/api/app-base";
export default {
  name: "projectQuality",
  data() {
    return {
      showQuery: false,
      xmId: '0',
    };
  },
  created(){
    this.query();
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.query();
    })
  },
  methods: {
    proDetail(id) {
      this.$router.push({
        path:'/proDetail',
        query: {
          xmId: this.xmId,
          id: id
        }
      })
    },
    treeClose(e) {
      console.log(e)
      this.xmId = e.code
      this.query();
    },
    query() {
      this.$nextTick().then(() => {
        if (this.$refs.proList) {
          this.$refs.proList.onRefresh();
        }
      });
    },
     delItem(data) {
      this.appCommon.confirm('提示', '确定要删除该记录吗？', () => {
        let dataArr = []
        dataArr.push(data)
        let params = {
          dataWrap: JSON.stringify({
            dataList: dataArr,
          }),
        }
        this.appCommon.tloading('删除中...');
        postAction('/zlAssessStandard/remove', params).then(rdata => {
          this.$toast("删除成功~");
          this.$refs.proList.delItem(data);
        })
      })
    },
    dataList(pageInfo) {
      let params = {
        dataWrap: JSON.stringify({
          pageInfo: pageInfo,
        }),
        bdId: this.$store.state.user.bdId,
        xmId: this.xmId
      };
      this.appCommon.tloading();
      return new Promise((resolve,reject) => {
        postAction('/zlAssessStandard/list', params).then((rdata) => {
         console.log(rdata)
         resolve(rdata);
        })
      });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
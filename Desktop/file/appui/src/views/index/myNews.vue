<template>
  <div class="app-full">
    <van-nav-bar
      :title="'我的消息'"
      :border="false"
      @click-left="$root.appBack()"
      left-arrow
    >
      <van-icon
        @click="showQuery = !showQuery"
        size="22px"
        :name="require('../../assets/imgs/query.png')"
        slot="right"
      />
    </van-nav-bar>
    <div class="app-main" style="overflow-x: auto">
      <app-list ref="wdxxList">
        <template v-slot="{ data }">
          <div class="app-list" @click="read(data)">
            <p class="app-list-item">
              消息类型：<app-drop-show
                :dropName="'JT.MSG_TYPE'"
                :value="data.msgType"
              ></app-drop-show>
            </p>
            <p class="app-list-item">
              消息内容：<span>{{ data.infoContent }}</span>
            </p>
            <p class="app-list-item">
              是否已读：<app-drop-show
                :dropName="'UEP.YES_OR_NO'"
                :value="data.readFlag"
              ></app-drop-show>
            </p>
            <p class="app-list-item">
              消息时间：<span>{{ data.addTime }}</span>
            </p>
          </div>
        </template>
      </app-list>
    </div>
    <van-popup
      v-model="showQuery"
      position="top"
      style="background: transparent"
    >
      <div class="popup-top"></div>
      <van-cell-group>
        <app-drop
          v-model="queryParams.msgType"
          :label="'消息类型：'"
          dropName="JT.MSG_TYPE"
        ></app-drop>
        <app-input v-model="queryParams.infoContent_LIKE" label="消息内容："></app-input>
        <app-drop
          v-model="readFlag"
          :label="'是否已读：'"
          :dropName="'UEP.YES_OR_NO'"
        ></app-drop>
        <div style="display:flex">
          <app-date
          label-width="60px"
          v-model="beginTime"
          type="date"
          :label="'消息时间:'"
        ></app-date><label style="margin-top:14px">~</label>
        <app-date
         label-width="0px"
          v-model="endTime"
          type="date"
          :label="' '"
        ></app-date>
        </div>
        
        <van-button
          @click="query"
          size="large"
          type="info"
          style="margin: 4vw 0"
          >查询</van-button
        >
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
import { myNews,setRead } from "@/api/app-base";
export default {
  name: "myNews",
  data() {
    return {
     showQuery: false,
     queryParams: {},
     readFlag: 'N',
     beginTime: '',
     endTime: ''
    };
  },
  created() {
  },
//   activated() {
//     this.query();
//   },
  methods: {
    read(data) {
        if(data.readFlag == 'Y') {
            return
        }
        let params = {
            dataWrap: JSON.stringify({}),
            uuid: data.id
        };
        this.appCommon.tloading();
        setRead(params).then(rdata => {
            this.query()
            setTimeout(() => {
               this.$toast("消息已读~");  
            }, 500);
      })
    },
    query() {
      this.showQuery = false;
      this.$nextTick().then(() => {
        if (this.$refs.wdxxList) {
          this.$refs.wdxxList.onRefresh();
        }
      });
    },
    dataList(pageInfo) {
      let params = {
        dataWrap: JSON.stringify({
          pageInfo: pageInfo,
          query: this.queryParams
        }),
        sendForm: '2',
        readFlag: this.readFlag,
        beginTime: this.beginTime,
        endTime: this.endTime
      };
      this.appCommon.tloading();
      return new Promise((resolve, reject) => {
        myNews(params).then((rdata) => {
          resolve(rdata);
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.list-btn-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  bottom: 0px;
  transform: translateY(-50%);
  img {
    width: 50px;
  }
  svg {
    font-size: 35px;
    color: #3182c4;
    margin: 10px 0;
  }
}
</style>
<template>
  <div class="app-full">
    <header class="nav-pd app-fb header">
      <section class="app-fa" style="flex: 1.8;flex-wrap: nowrap;">
        <img src="../../assets/imgs/tx.png" alt=""/>
        <ul>
          <li>管理员<span @click="$root.goPath('/myNews');" style="color: orange;padding-left: 5px;font-weight: bold;font-size: 20px;"></span></li>
          <li>星期{{daysOfWeek[curWeek]}} {{curDate}}</li>
        </ul>
      </section>
      <ul class="app-fc my-order">
        <li class="van-ellipsis">{{$store.getters['userView'].organization.groupName}}</li>
        <li>我的任务</li>
        <li class="undo-num" @click="$root.goPath('/flowIndex')">
          <div>未处理</div>
          <div></div>
        </li>
      </ul>
    </header>
    <main class="app-pd menus">
      <div>
        <!-- <app-tree v-model="$store.state.user.bdId" @treeClose="treeClose" title="标段" :rootCode="''" expandLevel="3" :rootVisible="false" dataProvider="com.haiyisoft.fslq.tree.PrjSectTree"></app-tree> -->
        <!-- <app-drop :title="'项目'" v-model="model.prj" :dropData="prjList" v-on:drop-change="dropChange($event,'1')"></app-drop>
        <app-drop :title="'标段'" v-model="model.bd" :dropData="bdList" v-on:drop-change="dropChange($event,'2')"></app-drop> -->
      </div>
      <article v-for="menu in mesHome" :key="menu.id">
        <div class="sub-title">{{ menu.title }}</div>
        <section class="app-fs">
          <div
            class="item-wrap"
            v-for="item in menu.arry"
            :key="item.id"
            @click="itemClick(item.path, item.id, item.type)"
          >
            <img :src="item.img" alt=""/>
            <div>{{ item.str }}</div>
            <!-- <div class="num" v-if="numObj[item.id]">{{numObj[item.id]}}</div> -->
          </div>
        </section>
      </article>
    </main>
  </div>
</template>

<script>
import moment from 'moment'
import allMenus from "./allMenus";
import { getDefaultBd, undoTask, noReadNum } from '@/api/app-base';
export default {
  name: "appMain",
  data() {
    return {
      allMenus,
      userview: this.$store.getters["userView"],
      myMenus: [],
      curDate: moment().format('YYYY-MM-DD'),
      curWeek: moment().format('d'),
      daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
      undoNum: '0',
      noReadNum: '0',
      numObj: {},
         mesHome: [
        {
          title:'国资监管',
          id:'1',
          arry:[
                     {
          img: require("../../assets/imgs/home/gongcheng.png"),
          str: "投资控制",
          type:"/birthday",
        }, 
                  {
          img: require("../../assets/imgs/home/gongcheng.png"),
          str: "投资控制",
          type:"/birthday",
        }, 
         
          ],
        }, 

           {
          title:'日常管理',
            id:'2',
          arry:[
                     {
          img: require("../../assets/imgs/home/gongcheng.png"),
          str: "投资控制",
          type:"/birthday",
        }, 
                  {
          img: require("../../assets/imgs/home/gongcheng.png"),
          str: "投资控制",
          type:"/birthday",
        }, 
         
          ],
        }, 
      ],
    };
  },
  activated() {
    // this.getNoReadNum();
  },
  created() {
 
  },
  beforeDestroy() {
    // this.appCommon.clearLocWatch();
  },
  methods: {
    filterMenus() {
      for (let parent of allMenus) {
        let subArr = [];
        for (let sub of parent.subMenu) {
          if (this.$store.state.user.authority.includes(sub.auth) || !sub.auth) {
            subArr.push(sub);
          }
        }
        if (subArr.length > 0) {
          let menu = {
            id: parent.id,
            menuName: parent.menuName,
            subMenu: subArr,
          }
          this.myMenus.push(menu);
        }
      }
    },
    treeClose(e) {
      console.log(e);
      let code = e.code;
      if (code) {
        var index = code.lastIndexOf("_");
        if (index != -1) {
          code = code.substring(index + 1, code.length);
        }
        // var reCode=code.substring(code.lastIndexOf("_")+1);
        e.code = code;
        this.$store.commit('user/SET_BD', e);
        this.$store.commit('user/SET_BDID', e.code);
      }
    },
    getUserBd() {
      getDefaultBd({}).then(rdata => {
        let bdId = rdata.parameters.default;
        let prjId = rdata.parameters.prjId;
        let bdObj = rdata.parameters.section;
        bdObj['prj'] = prjId;
        bdObj.label = bdObj.secName;
        this.$store.commit('user/SET_BDID', bdId)
        this.$store.commit('user/SET_BD', bdObj);
      })
    },
    getUndoNum() {
      let params = {
        dataWrap: JSON.stringify({}),
      };
      undoTask(params).then(rdata => {
        let pageInfo = rdata.dataWraps.dataWrap.pageInfo;
        this.undoNum = pageInfo.allRowNum;
      })
    },
     getNoReadNum() {
      let params = {
        dataWrap: JSON.stringify({}),
        sendForm: '2'
      };
      noReadNum(params).then(rdata => {
        let pageInfo = rdata.dataWraps.dataWrap.pageInfo;
        this.noReadNum = pageInfo.allRowNum;
      })
    },
    getMenuNum() {
      this.appCommon.postReq('/main/count/retrieveMarkCount',{}, process.env.VUE_APP_PMZL).then(rdata => {
        this.numObj = {...this.numObj, ...rdata.parameters.countMap}
      })
      this.appCommon.postReq('/main/count/retrieveMarkCount',{}, process.env.VUE_APP_SAFE).then(rdata => {
        this.numObj = {...this.numObj, ...rdata.parameters.countMap}
      })
    },
    itemClick(path, id,type) {
      if (path) {
        if(type){
          this.$root.goPath(path,{type:type});
        }else{
          this.$root.goPath(path);
        }
      } else {
        this.qrScan(id)
      }
    },
    dealQrText(id, text) {
      let path = '';
      let params = {};
      switch(id) {
        case 'jgwewm': {
          path = '/jgw-detail';
          params.id = text.split('=')[1]
          break;
        }
      }
      this.$router.push({
        path: path,
        query: params
      })
    },
    qrScan(id) {
      let that = this;
      window.cordova.plugins.barcodeScanner.scan(
        function (result) {
          that.dealQrText(id, result.text)
        },
        function () {
          that.appCommon.alert('扫描失败~')
        },
        {
          preferFrontCamera: false, // iOS and Android
          showFlipCameraButton: false, // iOS and Android
          showTorchButton: false, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt: "请将二维码放入框内", // Android
          resultDisplayDuration: 1500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation: "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations: true, // iOS
          disableSuccessBeep: false, // iOS and Android
        }
      );
    }
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: rgb(49, 130, 196);
  color: white;
  height: 100px;
  flex-wrap: nowrap;

  img {
    width: 60px;
  }
  section {
    width: 220px;
    box-sizing: border-box;
    border-right: 1px solid white;
    align-items: flex-start;
    ul {
      margin-top: 5px;
      li {
        line-height: 25px;
      }
    }
  }
  & > ul {
    width: 155px;
    box-sizing: border-box;
    padding: 0 10px;
    li {
      width: 100%;
      text-align: center;
    }
  }
  .my-order {
    flex: 1;
    height: 100%;
    flex-wrap: nowrap;
    overflow-y: auto;
    flex-direction: column;
    align-items: center;
  }
}
.menus {
  height: calc(100% - 130px);
  overflow-y: auto;
}
.sub-title {
  border-left: 4px solid rgb(49, 130, 197);
  padding-left: 10px;
  margin: 10px 0;
  font-size: 14px;
  font-weight: bold;
}
.item-wrap {
  width: 25%;
  text-align: center;
  margin: 10px 0;
  position: relative;
  img {
    width: 40px;
    height: 40px;
  }
  .num {
    position: absolute;
    top: -10px;
    right: 10px;
    background-color: red;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 21px;
    font-size: 12px;
  }
}
.undo-num {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  div {
    height: 100%;
    line-height: 30px;
  }
  div:nth-child(2) {
    color: orange;
    padding-left: 5px;
    font-weight: bold;
    font-size: 20px;
  }
}
</style>
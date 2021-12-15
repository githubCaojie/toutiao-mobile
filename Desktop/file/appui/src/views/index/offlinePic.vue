<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" title="离线图片" :border="false" left-arrow>
      <template v-if="type==='2'&& isEdit==='Y'" #right>
        <van-icon @click="sureSel" name="success" size="20" />
      </template>
    </van-nav-bar>
    <div class="app-main">
      <app-img-choose ref="img" v-if="type==='1'" :datas="cashArr" type="13" :offline="true" :immeUpload="false"></app-img-choose>

      <article v-if="type==='2'" class="app-fs">
        <section class="app-fc preview-item" v-for="(item,index) in dataList" :key="item.uuid" @click="toggleChoose(item,index)">
          <img :src="item.type==='1'? item.preview: videoUrl" alt="" />
          <fa-icon v-if="item.choosed" icon="check-circle" />
          <div v-if="item.outdate" class="outdate"></div>
          <div v-if="!item.outdate && item.delFlag" class="deleted"></div>
        </section>
      </article>
      <div v-if="isEdit==='N'" class="app-fa" style="width:100%;position:absolute;bottom:5px">
        <van-button style="width: 33%" block type="primary" @click="duoxuan">全选</van-button>
        <van-button style="width: 33%" block type="info" @click="del">删除</van-button>
        <van-button style="width: 33%" block type="warning" @click="clearDeadFile">清除无效图片</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import appFileUtil from '../../utils/appFileUtil';
import moment from 'moment'
export default {
  name: 'offlinePic',
  data() {
    return {
      type: '',  //1、离线图片，2、选择
      cashArr: [
        // {thumb: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3621987426,796514073&fm=26&gp=0.jpg',
        // preview: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3621987426,796514073&fm=26&gp=0.jpg'}
      ],
      dataList: [],
      videoUrl: require('../../assets/imgs/video.png'),
      indexList: [],
      callback: undefined,
      isEdit: 'Y'
    }
  },
  created() {
    if (this.$route.query.isEdit) {
      this.isEdit = this.$route.query.isEdit;
    }
    this.appCommon.watchLocation();
  },
  beforeDestroy() {
    this.appCommon.clearLocWatch();
  },
  mounted() {
    this.type = this.$route.query.type || '1';
    this.callback = this.$route.query.callback || undefined;
    this.getCash().then(data => {
      if (this.type === '1') {
        this.cashArr = data;
      } else {
        this.dataList = data;
      }
    });
  },
  methods: {
    sureSel() {
      let tempArr = [];
      for (let item of this.dataList) {
        if (item.choosed) {
          item.id = this.appCommon.guuid();
          tempArr.push(item)
        }
      }
      if (this.callback) {
        this.appCommon.emit(this.callback, tempArr);
      }
      this.$root.appBack();
    },
    toggleChoose(item) {
      if (item.delFlag) return;  //本地已经删除了
      if (item.choosed) {
        for (let i = 0; i < this.indexList.length;) {
          if (this.indexList[i].uuid === item.uuid) {
            this.indexList.splice(i, 1);
            break;
          } else {
            i++
          }
        }
      } else {
        this.indexList.push(item)
      }
      this.$set(item, 'choosed', !item.choosed)
    },
    async del() {
      this.appCommon.tloading('删除中...')
      for (let i = this.dataList.length-1; i>=0;) {
        if (this.dataList[i].choosed) {
          await appFileUtil.delFile(this.dataList[i].uuid)
          this.dataList.splice(i, 1);
        }
        i--;
      }
      this.appCommon.tloadingc();
    },
    async clearDeadFile() {
      let arr = this.$refs.img ? this.$refs.img.fileList : this.dataList
      for (let i = 0; i < arr.length;) {
        if (arr[i].outdate) {
          await appFileUtil.delFile(arr[i].uuid)
          arr.splice(i, 1)
        } else {
          i++
        }
      }
      if (this.type == '2') {
        this.cashArr = arr;
      }
    },
    duoxuan() {
      this.indexList = [];
      let arr = this.$refs.img ? this.$refs.img.fileList : this.dataList
      arr.map(item => {
        this.$set(item, 'choosed', false)
      })
      if (this.type == '2') {
        this.cashArr = this.dataList
        this.type = '1';
      } else {
        this.dataList = this.$refs.img.fileList;
        this.dataList.map(item => {
          this.$set(item, 'choosed', true)
        })
        this.type = '2';
      }

    },
    async getCash() {
      //老的方式
      // let fileStr = localStorage.getItem(appConstant.cashFileKey);
      // let fileArr = fileStr ? JSON.parse(fileStr) : [];
      // for (let file of fileArr) {
      //   let cdate = moment(file.addTime).add(30, 'd');
      //   if (cdate.isBefore(moment())) {
      //     file.outdate = true;
      //   } else {
      //     file.outdate = false;
      //   }
      //   let delFlag = await appFileUtil.checkIsDelete(file.preview);
      //   file.delFlag = delFlag;
      // }
      let fileArr = [];
      let result = await appFileUtil.selectFile('', '', true);
      if (result.rows.length > 0) {
        for (let i = 0; i < result.rows.length; i++) {
          let item = result.rows.item(i)
          let cdate = moment(item.add_time).add(30, 'd');
          if (cdate.isBefore(moment())) {
            item.outdate = true;
          } else {
            item.outdate = false;
          }
          fileArr.push(item);
        }
      }
      console.log('fileArr----', fileArr)
      return fileArr;
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.$imgPreview.isPreing()) {
      next(false);
      this.$imgPreview.closePre();
    } else {
      next();
    }
  }
}
</script>

<style lang="scss" scoped>
.deal {
  width: 85px;
  height: 85px;
  background-color: #f7f8fa;
  text-align: center;
  line-height: 95px;
  margin: 7px 0 0 7px;
}
.preview-item {
  width: 25vw;
  height: 25vw;
  margin: 10px 0;
  box-sizing: border-box;
  position: relative;
  img {
    width: 95%;
    height: 95%;
    object-fit: cover;
  }
  svg {
    position: absolute;
    top: 0px;
    right: 5%;
    font-size: 20px;
    color: green;
    background-color: white;
  }
}
.outdate {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);

  &::after {
    content: "已超时";
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    padding: 2px;
    font-size: 14px;
    font-weight: bold;
    color: red;
  }
}
.deleted {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(226, 32, 24, 1);

  &::after {
    content: "已删除";
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    padding: 2px;
    font-size: 14px;
    font-weight: bold;
    color: red;
  }
}
</style>
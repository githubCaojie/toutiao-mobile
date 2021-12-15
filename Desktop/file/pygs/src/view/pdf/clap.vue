<template>
  <div>
    <van-nav-bar
      left-text="返回"
      left-arrow
      class="nav-bar"
      @click-left="$router.go(-1)"
    />
    <div class="mains">
      <div class="mainss">
        <van-field
          class="fz32 sh60"
          v-model="search"
          center
          clearable
          placeholder="输入您的姓名查询车次"
        >
        </van-field>
        <div class="btnlist">
          <van-button class="fz32 btn" @click="searchHandle">查询</van-button>
          <van-button class="fz32 btn" @click="czHandle">重置</van-button>
        </div>

        <van-cell-group class="list">
          <van-cell class="fz32 h60" title="姓名" :value="fromData.name" />
          <van-cell class="fz32 h60" title="车次" :value="fromData.num" />
        </van-cell-group>
        <van-button class="allbtn" @click="czAllHandle">查看全部</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from "vant";

export default {
  data() {
    return {
      search: "",
      imageList: [require("./childImg/jcap/1.jpg")],
      zwList: [
        {
          name: "罗恒",
          num: "1号车（1号组）",
        },
        {
          name: "喻波",
          num: "1号车（1号组）",
        },
        {
          name: "任成志",
          num: "1号车（1号组）",
        },
        {
          name: "陈海民",
          num: "1号车（1号组）",
        },
        {
          name: "赵华",
          num: "1号车（1号组）",
        },
        {
          name: "胡建华",
          num: "1号车（1号组）",
        },
        {
          name: "罗振宇",
          num: "1号车（1号组）",
        },
        {
          name: "陈浩",
          num: "1号车（1号组）",
        },
        {
          name: "罗卫华",
          num: "1号车（1号组）",
        },
        {
          name: "邹国庆",
          num: "1号车（1号组）",
        },

        {
          name: "吕健鸣",
          num: "2号车（2号组）",
        },
        {
          name: "王世斌",
          num: "2号车（2号组）",
        },
        {
          name: "蒋罗辑",
          num: "2号车（2号组）",
        },
        {
          name: "罗建文",
          num: "2号车（2号组）",
        },
        {
          name: "马晴",
          num: "2号车（2号组）",
        },
        {
          name: "罗勇",
          num: "2号车（2号组）",
        },
        {
          name: "李良东",
          num: "2号车（2号组）",
        },
        {
          name: "沈文",
          num: "2号车（2号组）",
        },
        {
          name: "易武",
          num: "2号车（2号组）",
        },
        {
          name: "金瑞玲",
          num: "2号车（2号组）",
        },
        {
          name: "谢忠杰",
          num: "2号车（2号组）",
        },
        {
          name: "谭青山",
          num: "2号车（2号组）",
        },
        {
          name: "焦节玉",
          num: "2号车（2号组）",
        },
        {
          name: "周栋梁",
          num: "2号车（2号组）",
        },
        {
          name: "黄勇军",
          num: "2号车（2号组）",
        },

        {
          name: "李徐",
          num: "3号车（3号组）",
        },
        {
          name: "王宝林",
          num: "3号车（3号组）",
        },
        {
          name: "刘东海",
          num: "3号车（3号组）",
        },
        {
          name: "李龙",
          num: "3号车（3号组）",
        },
        {
          name: "龚毅",
          num: "3号车（3号组）",
        },
        {
          name: "张东兴",
          num: "3号车（3号组）",
        },
        {
          name: "唐盛",
          num: "3号车（3号组）",
        },
        {
          name: "李海波",
          num: "3号车（3号组）",
        },
        {
          name: "袁战文",
          num: "3号车（3号组）",
        },
        {
          name: "彭文耀",
          num: "3号车（3号组）",
        },
        {
          name: "曾宪营",
          num: "3号车（3号组）",
        },
        {
          name: "唐小富",
          num: "3号车（3号组）",
        },

        {
          name: "陈鉴光",
          num: "3号车（3号组）",
        },

        {
          name: "陶可",
          num: "3号车（3号组）",
        },

        {
          name: "胡小华",
          num: "3号车（3号组）",
        },

        {
          name: "袁海清",
          num: "3号车（3号组）",
        },

        {
          name: "丁学峰",
          num: "3号车（3号组）",
        },

        {
          name: "张军",
          num: "3号车（3号组）",
        },

        {
          name: "黄超",
          num: "3号车（3号组）",
        },

        {
          name: "何亮",
          num: "3号车（3号组）",
        },

        {
          name: "汤浩南",
          num: "3号车（3号组）",
        },

        {
          name: "骆宏勋",
          num: "3号车（3号组）",
        },

        {
          name: "陈咏泉",
          num: "3号车（3号组）",
        },

        {
          name: "彭超志",
          num: "3号车（3号组）",
        },
        {
          name: "唐晖",
          num: "3号车（3号组）",
        },

        {
          name: "吴冠雄",
          num: "3号车（3号组）",
        },
        {
          name: "陈勇鸿",
          num: "3号车（3号组）",
        },

        {
          name: "冯雄辉",
          num: "3号车（3号组）",
        },

        {
          name: "陈建军",
          num: "3号车（3号组）",
        },

        {
          name: "郭一枝",
          num: "3号车（3号组）",
        },

        {
          name: "曾永旺",
          num: "4号车（4号组）",
        },

        {
          name: "侯运秋",
          num: "4号车（4号组）",
        },

        {
          name: "李钊",
          num: "4号车（4号组）",
        },

        {
          name: "文浩雄",
          num: "4号车（4号组）",
        },

        {
          name: "王晚华",
          num: "4号车（4号组）",
        },

        {
          name: "马云锋",
          num: "4号车（4号组）",
        },

        {
          name: "李程",
          num: "4号车（4号组）",
        },

        {
          name: "贺淑龙",
          num: "4号车（4号组）",
        },
        {
          name: "龙正聪",
          num: "4号车（4号组）",
        },

        {
          name: "邓亮",
          num: "4号车（4号组）",
        },

        {
          name: "吴五星",
          num: "4号车（4号组）",
        },

        {
          name: "陈时通",
          num: "4号车（4号组）",
        },

        {
          name: "全孝",
          num: "4号车（4号组）",
        },

        {
          name: "杨勇",
          num: "4号车（4号组）",
        },

        {
          name: "高延河",
          num: "4号车（4号组）",
        },

        {
          name: "彭建华",
          num: "4号车（4号组）",
        },

        {
          name: "斯波",
          num: "4号车（4号组）",
        },

        {
          name: "练文革",
          num: "4号车（4号组）",
        },
        {
          name: "李鹏",
          num: "4号车（4号组）",
        },

        {
          name: "左均平",
          num: "4号车（4号组）",
        },

        {
          name: "胡波",
          num: "4号车（4号组）",
        },

        {
          name: "刘荣国",
          num: "4号车（4号组）",
        },

        {
          name: "张秀烽",
          num: "4号车（4号组）",
        },
        {
          name: "苗立",
          num: "4号车（4号组）",
        },

        {
          name: "吴文昌",
          num: "4号车（4号组）",
        },

        {
          name: "吴伟国",
          num: "4号车（4号组）",
        },
        {
          name: "温勇",
          num: "4号车（4号组）",
        },

        {
          name: "谢志军",
          num: "5号车（5号组）",
        },

        {
          name: "李刚",
          num: "5号车（5号组）",
        },

        {
          name: "孙志雨",
          num: "5号车（5号组）",
        },

        {
          name: "贺泽辉",
          num: "5号车（5号组）",
        },

        {
          name: "李兵",
          num: "5号车（5号组）",
        },

        {
          name: "夏理松",
          num: "5号车（5号组）",
        },

        {
          name: "刘咏华",
          num: "5号车（5号组）",
        },
        {
          name: "杨青",
          num: "5号车（5号组）",
        },

        {
          name: "肖俊杰",
          num: "5号车（5号组）",
        },

        {
          name: "谭志胜",
          num: "5号车（5号组）",
        },

        {
          name: "钟明键",
          num: "5号车（5号组）",
        },

        {
          name: "陈箐",
          num: "5号车（5号组）",
        },

        {
          name: "伍宏涛",
          num: "5号车（5号组）",
        },

        {
          name: "喻文浩",
          num: "5号车（5号组）",
        },

        {
          name: "黄静宇",
          num: "5号车（5号组）",
        },

        {
          name: "易代红",
          num: "5号车（5号组）",
        },
        {
          name: "周晋超",
          num: "5号车（5号组）",
        },

        {
          name: "何彬",
          num: "5号车（5号组）",
        },

        {
          name: "周天壁",
          num: "5号车（5号组）",
        },

        {
          name: "魏世恭",
          num: "5号车（5号组）",
        },

        {
          name: "张英泽",
          num: "5号车（5号组）",
        },

        {
          name: "董明星",
          num: "5号车（5号组）",
        },

        {
          name: "陈海威",
          num: "5号车（5号组）",
        },

        {
          name: "朱大勇",
          num: "5号车（5号组）",
        },

        {
          name: "施亮亮",
          num: "5号车（5号组）",
        },

        {
          name: "徐建军",
          num: "5号车（5号组）",
        },
        {
          name: "李向阳",
          num: "5号车（5号组）",
        },

        {
          name: "叶鑫",
          num: "5号车（5号组）",
        },

        {
          name: "郑洪斌",
          num: "5号车（5号组）",
        },

        {
          name: "姜越川",
          num: "5号车（5号组）",
        },

        {
          name: "谢振文",
          num: "6号车（6号组）",
        },

        {
          name: "周斌",
          num: "6号车（6号组）",
        },
        {
          name: "伍华海",
          num: "6号车（6号组）",
        },

        {
          name: "蔡星",
          num: "6号车（6号组）",
        },

        {
          name: "金跃凯",
          num: "6号车（6号组）",
        },

        {
          name: "王振军",
          num: "6号车（6号组）",
        },
        {
          name: "李刘军",
          num: "6号车（6号组）",
        },
        {
          name: "欧阳祖达",
          num: "6号车（6号组）",
        },

        {
          name: "赵伟超",
          num: "6号车（6号组）",
        },
        {
          name: "罗启露",
          num: "6号车（6号组）",
        },

        {
          name: "黄立新",
          num: "6号车（6号组）",
        },
        {
          name: "段鹏飞",
          num: "6号车（6号组）",
        },

        {
          name: "胡积兴",
          num: "6号车（6号组）",
        },
        {
          name: "韦俊学",
          num: "6号车（6号组）",
        },
        {
          name: "苏继荣",
          num: "6号车（6号组）",
        },

        {
          name: "崔春田",
          num: "6号车（6号组）",
        },

        {
          name: "刘朝霞",
          num: "6号车（6号组）",
        },

        {
          name: "杜拥军",
          num: "6号车（6号组）",
        },

        {
          name: "董李军",
          num: "6号车（6号组）",
        },

        {
          name: "刘延博",
          num: "6号车（6号组）",
        },

        {
          name: "李渊",
          num: "6号车（6号组）",
        },

        {
          name: "王祖海",
          num: "6号车（6号组）",
        },
        {
          name: "褚付启",
          num: "6号车（6号组）",
        },
        {
          name: "王滨",
          num: "6号车（6号组）",
        },

        {
          name: "李豪",
          num: "6号车（6号组）",
        },

        {
          name: "钟开键",
          num: "6号车（6号组）",
        },

        {
          name: "胡喜峰",
          num: "6号车（6号组）",
        },

        {
          name: "付廷达",
          num: "6号车（6号组）",
        },

        {
          name: "高长军",
          num: "6号车（6号组）",
        },

        {
          name: "滕德明",
          num: "6号车（6号组）",
        },
        {
          name: "谢勋超",
          num: "7号车（7号组）",
        },

        {
          name: "孙立彬",
          num: "7号车（7号组）",
        },

        {
          name: "赵迪",
          num: "7号车（7号组）",
        },

        {
          name: "胡立辉",
          num: "7号车（7号组）",
        },

        {
          name: "廖永胜",
          num: "7号车（7号组）",
        },
        {
          name: "刘  胜",
          num: "7号车（7号组）",
        },

        {
          name: "孔庆广",
          num: "7号车（7号组）",
        },

        {
          name: "袁绍",
          num: "7号车（7号组）",
        },

        {
          name: "温晓曦",
          num: "7号车（7号组）",
        },

        {
          name: "李彪",
          num: "7号车（7号组）",
        },

        {
          name: "谢臣",
          num: "7号车（7号组）",
        },

        {
          name: "吴建伟",
          num: "7号车（7号组）",
        },

        {
          name: "刘辉",
          num: "7号车（7号组）",
        },

        {
          name: "腾安亮",
          num: "7号车（7号组）",
        },
        {
          name: "王石兵",
          num: "7号车（7号组）",
        },

        {
          name: "刘可辉",
          num: "7号车（7号组）",
        },
        {
          name: "唐中华",
          num: "7号车（7号组）",
        },

        {
          name: "张荣",
          num: "7号车（7号组）",
        },

        {
          name: "兰志俭",
          num: "7号车（7号组）",
        },

        {
          name: "夏栋梁",
          num: "7号车（7号组）",
        },

        {
          name: "何飞跃",
          num: "7号车（7号组）",
        },

        {
          name: "姜铁军",
          num: "7号车（7号组）",
        },
        {
          name: "李一杰",
          num: "7号车（7号组）",
        },

        {
          name: "朱金国",
          num: "7号车（7号组）",
        },

        {
          name: "李建伟",
          num: "7号车（7号组）",
        },

        {
          name: "朱曙光",
          num: "7号车（7号组）",
        },

        {
          name: "颜建明",
          num: "7号车（7号组）",
        },

        {
          name: "张铁玲",
          num: "7号车（7号组）",
        },

        {
          name: "樊卓",
          num: "7号车（7号组）",
        },
        {
          name: "王龙",
          num: "7号车（7号组）",
        },

        {
          name: "彭官友",
          num: "7号车（7号组）",
        },

        {
          name: "郑建武",
          num: "7号车（7号组）",
        },

        {
          name: "杨博",
          num: "1号车（1号组）",
        },

        {
          name: "陈典军",
          num: "1号车（1号组）",
        },

        {
          name: "汤飞",
          num: "1号车（1号组）",
        },

        {
          name: "胡溶",
          num: "2号车（2号组）",
        },

        {
          name: "罗剑",
          num: "2号车（2号组）",
        },

        {
          name: "陈兵",
          num: "2号车（2号组）",
        },

        {
          name: "黄欢",
          num: "3号车（3号组）",
        },

        {
          name: "汤伟",
          num: "3号车（3号组）",
        },

        {
          name: "何平",
          num: "3号车（3号组）",
        },

        {
          name: "刘沙",
          num: "4号车（4号组）",
        },

        {
          name: "罗少勇",
          num: "4号车（4号组）",
        },
        {
          name: "杨建良",
          num: "4号车（4号组）",
        },

        {
          name: "刘菁",
          num: "5号车（5号组）",
        },

        {
          name: "张绍军",
          num: "5号车（5号组）",
        },

        {
          name: "王双奇",
          num: "5号车（5号组）",
        },

        {
          name: "刘欢",
          num: "6号车（6号组）",
        },

        {
          name: "盛启焜",
          num: "6号车（6号组）",
        },

        {
          name: "黄祥",
          num: "6号车（6号组）",
        },

        {
          name: "彭迈丽",
          num: "7号车（7号组）",
        },

        {
          name: "潘智冰",
          num: "7号车（7号组）",
        },
        {
          name: "彭新宇",
          num: "7号车（7号组）",
        },
      ],
      fromData: {
        name: "--",
        num: "--",
      },
    };
  },
  mounted() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#f6f6f6");
  },
  methods: {
    czAllHandle() {
      ImagePreview({
        images: [
          require("./childImg/clap/1.jpg"),
          require("./childImg/clap/2.jpg"),
          require("./childImg/clap/3.jpg"),
          require("./childImg/clap/4.jpg"),
          require("./childImg/clap/5.jpg"),
          require("./childImg/clap/6.jpg"),
          require("./childImg/clap/7.jpg"),
          require("./childImg/clap/8.jpg"),
          require("./childImg/clap/9.jpg"),
          require("./childImg/clap/10.jpg"),
          require("./childImg/clap/11.jpg"),
          require("./childImg/clap/12.jpg"),
        ],
        loop: false,
      });
    },
    czHandle() {
      this.search = "";
      this.fromData = {
        name: "--",
        num: "--",
      };
    },
    searchHandle() {
      for (let i of this.zwList) {
        if (this.search == i.name) {
          this.fromData = i;
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.fz32 {
  font-size: 32px;
}
.sh60 {
  height: 70px;
  line-height: 70px;
}
.btnlist {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  .btn {
    background-color: #d5202f;
    color: #ffffff;
    padding: 30px 30px;
    margin: 0 10px;
  }
}
.allbtn {
  width: 70vw;
  background-color: #d5202f;
  color: #ffffff;
  font-size: 32px;
  padding: 30px 0;
}
.list {
  margin-top: 30px;
  .h60 {
    .van-cell__title {
      height: 60px;
      line-height: 60px;
      width: 100px;
      flex: unset;
    }
    .van-cell__value {
      height: 60px;
      line-height: 60px;
      white-space: nowrap;
    }
  }
}
.search {
  height: 60px;
}
.nav-bar {
  /deep/ .van-nav-bar__content {
    height: 80px;
    .van-nav-bar__left {
      .van-icon {
        font-size: 36px;
        color: #000;
      }
      .van-nav-bar__text {
        font-size: 36px;
        color: #000;
      }
    }
  }
}
.mains {
  height: calc(100vh - 80px);
  overflow-y: scroll;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  .mainss {
    width: 70vw;
  }
}
img {
  margin: 20px;
  width: calc(100% - 40px);
}
.label {
  margin-top: 20px;
  font-size: 22px;
  line-height: 30px;
}
</style>

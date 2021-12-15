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
          placeholder="输入您的姓名查询桌位"
        >
        </van-field>
        <div class="btnlist">
          <van-button class="fz32 btn" @click="searchHandle">查询</van-button>
          <van-button class="fz32 btn" @click="czHandle">重置</van-button>
        </div>

        <van-cell-group class="list">
          <van-cell class="fz32 h60" title="姓名" :value="fromData.name" />
          <van-cell class="fz32 h60" title="座位" :value="fromData.zw" />
        </van-cell-group>
        <van-button class="allbtn" @click="czAllHandlebzt">查看就餐桌位布置图</van-button>
        <van-button class="allbtn" @click="czAllHandle">查看16日午餐就餐安排</van-button>

        <div class="label">
          <p>就餐安排：</p>
          <p>1、15日晚餐、16日早餐及晚餐：望城紫鑫戴斯酒店28楼自助餐厅</p>
          <p>2、16日午餐：湘阴洋沙湖酒店（具体安排点击“查看16日午餐就餐安排”按钮）</p>
        </div>
      </div>
      <!-- <viewer :images="imageList">
        <img v-for="img in imageList" :key="img"  :src="img" />
      </viewer> -->
    </div>
  </div>
</template>

<script>
import { ImagePreview } from "vant";

export default {
  data () {
    return {
      search: '',
      imageList: [
        require('./childImg/jcap/1.jpg'),
      ],
      zwList: [
        {
          name: '罗恒',
          zw: '洞庭湖餐厅（三楼）'
        },
        {
          name: '喻波',
          zw: '洞庭湖餐厅（三楼）'
        },
        {
          name: '陈海民',
          zw: '洞庭湖餐厅（三楼）'
        },
        {
          name: '任成志',
          zw: '洞庭湖餐厅（三楼）'
        },
        {
          name: '赵华',
          zw: '洞庭湖餐厅（三楼）'
        },
        {
          name: '胡建华',
          zw: '洞庭湖餐厅（三楼）'
        },
        {
          name: '陈浩',
          zw: '洞庭湖餐厅（三楼）'
        },
        {
          name: '罗振宇',
          zw: '洞庭湖餐厅（三楼）'
        },
        {
          name: '罗卫华',
          zw: '洞庭湖餐厅（三楼）'
        },
        {
          name: '吕健鸣',
          zw: '洞庭湖餐厅（三楼）'
        },
        {
          name: '王世斌',
          zw: '洞庭湖餐厅（三楼）'
        },
        {
          name: '蒋罗辑',
          zw: '洞庭湖餐厅（三楼）'
        },
        {
          name: '罗建文',
          zw: '洞庭湖餐厅（三楼）'
        },
        {
          name: '马晴',
          zw: '洞庭湖餐厅（三楼）'
        },
        {
          name: '罗勇',
          zw: '洞庭湖餐厅（三楼）'
        },
        {
          name: '沈文',
          zw: '洞庭湖餐厅（三楼）'
        },
        {
          name: '邹国庆',
          zw: '洞庭湖餐厅（三楼）'
        },
        {
          name: '李良东',
          zw: '资江厅餐厅（三楼）'
        },
        {
          name: '易武',
          zw: '资江厅餐厅（三楼）'
        },
        {
          name: '金瑞玲',
          zw: '资江厅餐厅（三楼）'
        },
        {
          name: '谢忠杰',
          zw: '资江厅餐厅（三楼）'
        },
        {
          name: '谭青山',
          zw: '资江厅餐厅（三楼）'
        },
        {
          name: '周栋梁',
          zw: '资江厅餐厅（三楼）'
        },
        {
          name: '焦节玉',
          zw: '资江厅餐厅（三楼）'
        },
        {
          name: '李徐',
          zw: '资江厅餐厅（三楼）'
        },
        {
          name: '王宝林',
          zw: '资江厅餐厅（三楼）'
        },
        {
          name: '龚毅',
          zw: '资江厅餐厅（三楼）'
        },
        {
          name: '张东兴',
          zw: '资江厅餐厅（三楼）'
        },
        {
          name: '黄勇军',
          zw: '资江厅餐厅（三楼）'
        },
        {
          name: '刘东海',
          zw: '1号桌（3号组）'
        },
        {
          name: '李龙',
          zw: '1号桌（3号组）'
        },
        {
          name: '唐盛',
          zw: '1号桌（3号组）'
        },
        {
          name: '李海波',
          zw: '1号桌（3号组）'
        },
        {
          name: '袁战文',
          zw: '1号桌（3号组）'
        },
        {
          name: '彭文耀',
          zw: '1号桌（3号组）'
        },
        {
          name: '曾宪营',
          zw: '1号桌（3号组）'
        },
        {
          name: '唐小富',
          zw: '1号桌（3号组）'
        },
        {
          name: '陈鉴光',
          zw: '2号桌（3号组）'
        },
        {
          name: '陶可',
          zw: '2号桌（3号组）'
        },
        {
          name: '胡小华',
          zw: '2号桌（3号组）'
        },
        {
          name: '袁海清',
          zw: '2号桌（3号组）'
        },
        {
          name: '丁学峰',
          zw: '2号桌（3号组）'
        },
        {
          name: '张军',
          zw: '2号桌（3号组）'
        },
        {
          name: '黄超',
          zw: '2号桌（3号组）'
        },
        {
          name: '何亮',
          zw: '2号桌（3号组）'
        },
        {
          name: '汤浩南',
          zw: '2号桌（3号组）'
        },
        {
          name: '骆宏勋',
          zw: '3号桌（3号组）'
        },
        {
          name: '陈咏泉',
          zw: '3号桌（3号组）'
        },
        {
          name: '彭超志',
          zw: '3号桌（3号组）'
        },
        {
          name: '唐晖',
          zw: '3号桌（3号组）'
        },
        {
          name: '吴冠雄',
          zw: '3号桌（3号组）'
        },
        {
          name: '陈勇鸿',
          zw: '3号桌（3号组）'
        },
        {
          name: '冯雄辉',
          zw: '3号桌（3号组）'
        },
        {
          name: '陈建军',
          zw: '3号桌（3号组）'
        },
        {
          name: '郭一枝',
          zw: '3号桌（3号组）'
        },
        {
          name: '曾永旺',
          zw: '4号桌（4号组）'
        },
        {
          name: '侯运秋',
          zw: '4号桌（4号组）'
        },
        {
          name: '李钊',
          zw: '4号桌（4号组）'
        },
        {
          name: '文浩雄',
          zw: '4号桌（4号组）'
        },
        {
          name: '王晚华',
          zw: '4号桌（4号组）'
        },
        {
          name: '马云锋',
          zw: '4号桌（4号组）'
        },
        {
          name: '李程',
          zw: '4号桌（4号组）'
        },
        {
          name: '贺淑龙',
          zw: '4号桌（4号组）'
        },
        {
          name: '龙正聪',
          zw: '4号桌（4号组）'
        },
        {
          name: '邓亮',
          zw: '5号桌（4号组）'
        },
        {
          name: '吴五星',
          zw: '5号桌（4号组）'
        },
        {
          name: '陈时通',
          zw: '5号桌（4号组）'
        },
        {
          name: '全孝',
          zw: '5号桌（4号组）'
        },
        {
          name: '杨勇',
          zw: '5号桌（4号组）'
        },
        {
          name: '高延河',
          zw: '5号桌（4号组）'
        },
        {
          name: '彭建华',
          zw: '5号桌（4号组）'
        },
        {
          name: '斯波',
          zw: '5号桌（4号组）'
        },
        {
          name: '练文革',
          zw: '5号桌（4号组）'
        },
        {
          name: '李鹏',
          zw: '6号桌（4号组）'
        },
        {
          name: '左均平',
          zw: '6号桌（4号组）'
        },
        {
          name: '胡波',
          zw: '6号桌（4号组）'
        },
        {
          name: '刘荣国',
          zw: '6号桌（4号组）'
        },
        {
          name: '张秀烽',
          zw: '6号桌（4号组）'
        },
        {
          name: '苗立',
          zw: '6号桌（4号组）'
        },
        {
          name: '吴文昌',
          zw: '6号桌（4号组）'
        },
        {
          name: '吴伟国',
          zw: '6号桌（4号组）'
        },
        {
          name: '温勇兵',
          zw: '6号桌（4号组）'
        },
        {
          name: '谢志军',
          zw: '7号桌（5号组）'
        },
        {
          name: '李刚',
          zw: '7号桌（5号组）'
        },
        {
          name: '孙志雨',
          zw: '7号桌（5号组）'
        },
        {
          name: '李兵',
          zw: '7号桌（5号组）'
        },
        {
          name: '贺泽辉',
          zw: '7号桌（5号组）'
        },
        {
          name: '夏理松',
          zw: '7号桌（5号组）'
        },
        {
          name: '刘咏华',
          zw: '7号桌（5号组）'
        },
        {
          name: '杨青',
          zw: '7号桌（5号组）'
        },
        {
          name: '肖俊杰',
          zw: '7号桌（5号组）'
        },
        {
          name: '谭志胜',
          zw: '7号桌（5号组）'
        },
        {
          name: '钟明键',
          zw: '8号桌（5号组）'
        },
        {
          name: '陈箐',
          zw: '8号桌（5号组）'
        },
        {
          name: '伍宏涛',
          zw: '8号桌（5号组）'
        },
        {
          name: '喻文浩',
          zw: '8号桌（5号组）'
        },
        {
          name: '黄静宇',
          zw: '8号桌（5号组）'
        },
        {
          name: '易代红',
          zw: '8号桌（5号组）'
        },
        {
          name: '周晋超',
          zw: '8号桌（5号组）'
        },
        {
          name: '何彬',
          zw: '8号桌（5号组）'
        },
        {
          name: '周天壁',
          zw: '8号桌（5号组）'
        },
        {
          name: '魏世恭',
          zw: '8号桌（5号组）'
        },
        {
          name: '张英泽',
          zw: '9号桌（5号组）'
        },
        {
          name: '董明星',
          zw: '9号桌（5号组）'
        },
        {
          name: '陈海威',
          zw: '9号桌（5号组）'
        },
        {
          name: '朱大勇',
          zw: '9号桌（5号组）'
        },
        {
          name: '施亮亮',
          zw: '9号桌（5号组）'
        },
        {
          name: '徐建军',
          zw: '9号桌（5号组）'
        },
        {
          name: '李向阳',
          zw: '9号桌（5号组）'
        },
        {
          name: '叶鑫',
          zw: '9号桌（5号组）'
        },
        {
          name: '郑洪斌',
          zw: '9号桌（5号组）'
        },
        {
          name: '姜越川',
          zw: '9号桌（5号组）'
        },
        {
          name: '谢振文',
          zw: '10号桌（6号组）'
        },
        {
          name: '周斌',
          zw: '10号桌（6号组）'
        },
        {
          name: '伍华海',
          zw: '10号桌（6号组）'
        },
        {
          name: '蔡星',
          zw: '10号桌（6号组）'
        },
        {
          name: '金跃凯',
          zw: '10号桌（6号组）'
        },
        {
          name: '王振军',
          zw: '10号桌（6号组）'
        },
        {
          name: '李刘军',
          zw: '10号桌（6号组）'
        },
        {
          name: '欧阳祖达',
          zw: '10号桌（6号组）'
        },
        {
          name: '赵伟超',
          zw: '10号桌（6号组）'
        },
        {
          name: '罗启露',
          zw: '10号桌（6号组）'
        },
        {
          name: '黄立新',
          zw: '11号桌（6号组）'
        },
        {
          name: '段鹏飞',
          zw: '11号桌（6号组）'
        },
        {
          name: '胡积兴',
          zw: '11号桌（6号组）'
        },
        {
          name: '韦俊学',
          zw: '11号桌（6号组）'
        },
        {
          name: '苏继荣',
          zw: '11号桌（6号组）'
        },
        {
          name: '崔春田',
          zw: '11号桌（6号组）'
        },
        {
          name: '刘朝霞',
          zw: '11号桌（6号组）'
        },
        {
          name: '杜拥军',
          zw: '11号桌（6号组）'
        },
        {
          name: '董李军',
          zw: '11号桌（6号组）'
        },
        {
          name: '刘延博',
          zw: '11号桌（6号组）'
        },
        {
          name: '李渊',
          zw: '12号桌（6号组）'
        },
        {
          name: '王祖海',
          zw: '12号桌（6号组）'
        },
        {
          name: '诸付启',
          zw: '12号桌（6号组）'
        },
        {
          name: '王滨',
          zw: '12号桌（6号组）'
        },
        {
          name: '李豪',
          zw: '12号桌（6号组）'
        },
        {
          name: '钟开键',
          zw: '12号桌（6号组）'
        },
        {
          name: '胡喜峰',
          zw: '12号桌（6号组）'
        },
        {
          name: '付廷达',
          zw: '12号桌（6号组）'
        },
        {
          name: '高长军',
          zw: '12号桌（6号组）'
        },
        {
          name: '滕德明',
          zw: '12号桌（6号组）'
        },
        {
          name: '谢勋超',
          zw: '13号桌（7号组）'
        },
        {
          name: '孙立彬',
          zw: '13号桌（7号组）'
        },
        {
          name: '赵迪',
          zw: '13号桌（7号组）'
        },
        {
          name: '胡立辉',
          zw: '13号桌（7号组）'
        },
        {
          name: '廖永胜',
          zw: '13号桌（7号组）'
        },
        {
          name: '刘胜',
          zw: '13号桌（7号组）'
        },
        {
          name: '孔庆广',
          zw: '13号桌（7号组）'
        },
        {
          name: '袁绍',
          zw: '13号桌（7号组）'
        },
        {
          name: '温晓曦',
          zw: '13号桌（7号组）'
        },
        {
          name: '李彪',
          zw: '13号桌（7号组）'
        },
        {
          name: '谢臣',
          zw: '14号桌（7号组）'
        },
        {
          name: '吴建伟',
          zw: '14号桌（7号组）'
        },
        {
          name: '刘辉',
          zw: '14号桌（7号组）'
        },
        {
          name: '腾安亮',
          zw: '14号桌（7号组）'
        },
        {
          name: '王石兵',
          zw: '14号桌（7号组）'
        },
        {
          name: '刘可辉',
          zw: '14号桌（7号组）'
        },
        {
          name: '唐中华',
          zw: '14号桌（7号组）'
        },
        {
          name: '张荣',
          zw: '14号桌（7号组）'
        },
        {
          name: '兰志俭',
          zw: '14号桌（7号组）'
        },
        {
          name: '夏栋梁',
          zw: '14号桌（7号组）'
        },
        {
          name: '何飞跃',
          zw: '14号桌（7号组）'
        },
        {
          name: '姜铁军',
          zw: '15号桌（7号组）'
        },
        {
          name: '李一杰',
          zw: '15号桌（7号组）'
        },
        {
          name: '朱金国',
          zw: '15号桌（7号组）'
        },
        {
          name: '李建伟',
          zw: '15号桌（7号组）'
        },
        {
          name: '朱曙光',
          zw: '15号桌（7号组）'
        },
        {
          name: '颜建明',
          zw: '15号桌（7号组）'
        },
        {
          name: '张铁玲',
          zw: '15号桌（7号组）'
        },
        {
          name: '樊卓',
          zw: '15号桌（7号组）'
        },
        {
          name: '王龙',
          zw: '15号桌（7号组）'
        },
        {
          name: '彭官友',
          zw: '15号桌（7号组）'
        },
        {
          name: '郑建武',
          zw: '15号桌（7号组）'
        },
        {
          name: '彭桂华',
          zw: '16号桌'
        },
        {
          name: '周毅',
          zw: '16号桌'
        },
        {
          name: '熊行',
          zw: '16号桌'
        },
        {
          name: '钟文',
          zw: '16号桌'
        },
        {
          name: '陈典军',
          zw: '16号桌'
        },
        {
          name: '谭建华',
          zw: '16号桌'
        },
        {
          name: '何叔杭',
          zw: '16号桌'
        },
        {
          name: '谢涛',
          zw: '16号桌'
        },
        {
          name: '曹勇',
          zw: '16号桌'
        },
        {
          name: '张绍军',
          zw: '16号桌'
        },
        {
          name: '严敏',
          zw: '16号桌'
        },
        {
          name: '杨博',
          zw: '19号桌'
        },
        {
          name: '胡溶',
          zw: '19号桌'
        },
        {
          name: '黄欢',
          zw: '19号桌'
        },
        {
          name: '刘沙',
          zw: '19号桌'
        },
        {
          name: '刘菁',
          zw: '19号桌'
        },
        {
          name: '刘欢',
          zw: '19号桌'
        },
        {
          name: '彭迈丽',
          zw: '19号桌'
        },
        {
          name: '周新寰',
          zw: '17号桌'
        },
        {
          name: '潘智冰',
          zw: '17号桌'
        },
        {
          name: '罗剑',
          zw: '17号桌'
        },
        {
          name: '罗少勇',
          zw: '17号桌'
        },
        {
          name: '贺隆政',
          zw: '17号桌'
        },
        {
          name: '易祥平',
          zw: '17号桌'
        },
        {
          name: '陈育平',
          zw: '17号桌'
        },
        {
          name: '易望秋',
          zw: '17号桌'
        },
        {
          name: '谢拥军',
          zw: '17号桌'
        },
        {
          name: '欧文',
          zw: '17号桌'
        },
        {
          name: '黄云飞',
          zw: '17号桌'
        },
        {
          name: '汤飞',
          zw: '20号桌'
        },
        {
          name: '许龙',
          zw: '20号桌'
        },
        {
          name: '周清华',
          zw: '20号桌'
        },
        {
          name: '杨永新',
          zw: '20号桌'
        },
        {
          name: '陈兵',
          zw: '20号桌'
        },
        {
          name: '何平',
          zw: '20号桌'
        },
        {
          name: '杨建良',
          zw: '20号桌'
        },
        {
          name: '王双奇',
          zw: '20号桌'
        },
        {
          name: '黄祥',
          zw: '20号桌'
        },
        {
          name: '彭新宇',
          zw: '20号桌'
        },

      ],
      fromData: {
        name: '--',
        zw: '--'
      }
    }
  },
  mounted() {
    document.querySelector("body").setAttribute("style", "background-color:#f6f6f6");
  },
  methods: {
    czAllHandlebzt() {
      ImagePreview({
        images: [
          require("./childImg/jcap/2.jpg"),
        ],
        loop: false
      });
    },
    czAllHandle() {
      ImagePreview({
        images: [
          require("./childImg/jcap/1.jpg"),
        ],
        loop: false
      });
    },
    czHandle() {
      this.search = ""
      this.fromData = {
        name: '--',
        zw: '--'
      }
    },
    searchHandle() {
      for(let i of this.zwList) {
        if(this.search == i.name) {
          this.fromData = i
        }
      }
    }
  }
}
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
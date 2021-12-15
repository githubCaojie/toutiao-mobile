<template>
  <div class="nav">
    <el-row :gutter="12">
      <el-col :span="6">
        <div class="item item1">
          <div class="transition-box">
            <h3 class="title">决策类</h3>
            <el-row :gutter="24" class="btn-row">
              <el-col class="btn-item" :span="25">
                <div class="btn">
                  <el-image class="icon-img" :src="require('../../../assets/img/home/btn1.png')"/>
                  <span class="icon-name">决策支持</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col v-for="item in classNavData" :key="item.id" :span="12">
        <div class="item item2">
          <div class="transition-box">
            <h3 class="title">{{item.title}}</h3>
            <el-row :gutter="24" class="btn-row">
              <el-col class="btn-item" :span="25" v-for="childItem in item.childNavData" :key="childItem.id">
                <div class="btn" :class="{mouse: mouseId == childItem.id}" @mouseleave="classBtnLeave" @mouseover="classBtnOver(childItem.id)" @click="classBtnHandlel(childItem.id)">
                  <el-image class="icon-img" :src="childItem.pic"/>
                  <span class="icon-name">{{childItem.remark}}</span>
                </div>
                <form v-show="false" :name="childItem.id" method="post" :action="childItem.url" target="_blank">
                  <input type="hidden" name="token" :value="$store.getters.token">
                  <input type="hidden" name="callBack" :value="$store.getters.callbackurl">
                  <input type="submit" >
                </form>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="item item3">
          <div class="transition-box">
            <h3 class="title">日常管理类</h3>
            <el-row :gutter="24" class="btn-row">
              <el-col class="btn-item" :span="25">
                <div class="btn">
                  <el-image class="icon-img" :src="require('../../../assets/img/home/btn7.png')"/>
                  <span class="icon-name">智慧党建</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Qs from 'qs'

export default {
  props: {
    classNavData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      mouseId: ''
    }
  },
  methods: {
    classBtnOver(id) {
      this.mouseId = id
    },
    classBtnLeave() {
      this.mouseId = ''
    },
    classBtnHandlel(id) {
      this.$emit('classBtnHandlel', id)
    }
  }
}
</script>

<style lang="less" scoped>
@min768: ~"(max-width: 768px)";
.flexdc {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#color() {
  navcolor: #fff;
}
.nav {
  width: 100%;
  .el-row {
    @media @min768 {
      margin: unset !important;
      width: 100%;
    }
    .el-col {
      @media @min768 {
        padding: unset !important;
        width: 100%;
      }
      .item{
        height: 145px;
        width: 100%;
        .transition-box {
          width: 100%;
          height: 100%;
          .flexdc();
          justify-content: space-around;
          .title {
            color: #color[navcolor];
          }
          .btn-row {
            width: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: nowrap;
            .btn-item {
              color: #color[navcolor];
              .flexdc();
              width: auto;
              .btn {
                .flexdc();
                cursor: pointer;
                @media @min768 {
                  margin: 0 5px;
                }
                .icon-img {
                  width: 50px;
                  height: 50px;
                }
                .icon-name {
                  margin-top: 14px;
                  text-align: center;
                }
              }
              .btn.mouse {
                .icon-img {
                  transform: scale(1.1);
                  transition: all 0.3s ease-out;
                }
              }
            }
          }
        }
      }
    }
  }
  .item1 {
    background: url('../../../assets/img/home/nav1bg.png') center center / 100% 100% no-repeat;
  }
  .item2 {
    background: url('../../../assets/img/home/nav2bg.png') center center / 100% 100% no-repeat;
  }
  .item3 {
    background: url('../../../assets/img/home/nav3bg.png') center center / 100% 100% no-repeat;
  }
}
</style>
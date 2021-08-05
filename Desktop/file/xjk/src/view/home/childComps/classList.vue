<template>
  <div class="nav">
    <el-row :gutter="12">
      <el-col v-for="(item, index) in classNavData" :key="item.id" :span="item.childNavData.length < 5 ? 6 : 12">
        <div class="item" :class="'item' + (index + 1)">
          <div class="transition-box">
            <h3 class="title">{{item.title}}</h3>
            <el-row :gutter="24" class="btn-row">
              <el-col class="btn-item" :span="25" v-for="items in item.childNavData" :key="items.id">
                <div class="btn">
                  <el-image class="icon-img" :src="require('@/assets/' + items.iconUrl)"/>
                  <span class="icon-name">{{items.name}}</span>
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
export default {
  props: {
    classNavData: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
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
            .icon-img {
              width: 50px;
              height: 50px;
            }
            .icon-name {
              margin-top: 14px;
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
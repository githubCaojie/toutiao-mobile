<template>
  <div class="col">
    <h4 class="title">
      <i class="el-icon-s-order"></i>
      技术支持
    </h4>
    <el-row :gutter="10">
      <el-col :span="12">
        <div class="item">
          <p class="img"><el-image :src="require('../../assets/img/shouye_zhiliang.png')"/></p>
          <p class="text">
            <span class="name">质量控制</span>
            <span class="phone">188-8888-8888</span>
          </p>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="item">
          <p class="img"><el-image :src="require('../../assets/img/shouye_touzi.png')"/></p>
          <p class="text">
            <span class="name">投资控制</span>
            <span class="phone">188-8888-8888</span>
          </p>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="item">
          <p class="img"><el-image :src="require('../../assets/img/shouye_chai1.png')"/></p>
          <p class="text">
            <span class="name">征拆管理(BIM平台)</span>
            <span class="phone">188-8888-8888</span>
          </p>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="item">
          <p class="img"><el-image :src="require('../../assets/img/shouye_chai2.png')"/></p>
          <p class="text">
            <span class="name">征拆管理（管理平台）</span>
            <span class="phone">188-8888-8888</span>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.col {
  height: 100%;
  background: #fff;
  padding: 0 10px;
  position: relative;
  .title {
    height: 40px;
    line-height: 40px;
    color: #000;
    font-size: 15px;
  }
  .el-row {
    height: calc(100% - 40px);
    .el-col {
      height: calc(100% / 2);
      max-height: 100px;
      display: flex;
      align-items: center;
      .item {
        display: flex;
        align-items: center;
        width: 100%;
        p.img {
          flex: 0 0 56px;
          margin-right: 10px;
        }
        p.text {
          span {
            display: block;
            font-size: 18px;
            // white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
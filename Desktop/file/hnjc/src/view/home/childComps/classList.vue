<template>
  <div class="nav">
    <p class="name">模块入口</p>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-button @click="szydbtn">
          <p class="img">
            <el-image :src="require('../../../assets/img/home/juecexitong_btn.jpg')"/>
          </p>
        </el-button>
      </el-col>
      <el-col :span="6">
        <el-button>
          <p class="img">
            <el-image :src="require('../../../assets/img/home/jiancexitong_btn.jpg')"/>
          </p>
        </el-button>
      </el-col>
      <el-col :span="6">
        <el-button>
          <p class="img">
            <el-image :src="require('../../../assets/img/home/zuzhijigouxitong_btn.jpg')"/>
          </p>
        </el-button>
      </el-col>
      <el-col :span="6">
        <el-button>
          <p class="img">
            <el-image :src="require('../../../assets/img/home/zuizexitong_btn.jpg')"/>
          </p>
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    szydbtn() {
      window.open('http://124.232.137.239:55555/szyd/templates/maincopy.html')
    }
  }
}
</script>

<style lang="less" scoped>
.el-col-48 {
  width: 20%;
}
.nav {
  margin: 0 6.56vw;
  .name {
    font-size: 16px;
    font-weight: bold;
    color: #1f3666;
    position: relative;
    text-indent: var(--the-title-font-size);
    height: 45px;
    width: 165px;
    line-height: 45px;
    background: url('../../../assets/img/home/class_list_icon.png') top left no-repeat;
  }
  .name::before {
    content: "";
    width: 3px;
    height: 24px;
    background: #1f3666;
    position: absolute;
    left: 0;
    top: 10.5px;
    z-index: 1;
  }
  .el-button {
    padding: 0;
    border: unset;
    height: 160px;
    background: #1f3666;
  }
}
</style>
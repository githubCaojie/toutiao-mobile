<template>
  <div class="child-menu" :style="{width: menuWidth}">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#0D6BC3"
      text-color="#ffffff"
      active-text-color="blue"
    >
      <el-radio-group v-model="isCollapse">
        <el-radio-button v-show="isCollapse" :label="false"><i class="el-icon-circle-plus-outline"></i></el-radio-button>
        <el-radio-button v-show="!isCollapse" :label="true"><i class="el-icon-remove-outline"></i></el-radio-button>
      </el-radio-group>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">质量管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">施工管理</el-menu-item>
          <el-menu-item index="1-2">表格填报批量退回</el-menu-item>
          <el-menu-item index="1-3">验报台账</el-menu-item>
          <el-menu-item index="1-4">测量放样台账</el-menu-item>
          <el-menu-item index="1-5">质检台账</el-menu-item>
          <el-menu-item index="1-6">质量文书</el-menu-item>
          <el-menu-item index="1-7">质量隐患</el-menu-item>
          <el-menu-item index="1-8">质量不合格台账</el-menu-item>
          <el-menu-item index="1-9">现场变更</el-menu-item>
          <el-menu-item index="1-10">搅拌机数据</el-menu-item>
          <el-menu-item index="1-11">标段维护</el-menu-item>
          <el-submenu index="1-12">
            <template slot="title">基础数据管理</template>
            <el-menu-item index="1-12-1">表格模板设置</el-menu-item>
            <el-menu-item index="1-12-2">表格模板公式</el-menu-item>
            <el-menu-item index="1-12-3">质量单元标准树</el-menu-item>
            <el-menu-item index="1-12-4">工序标准设置</el-menu-item>
            <el-menu-item index="1-12-5">质量单位划分</el-menu-item>
            <el-menu-item index="1-12-6">子分项工厂维护</el-menu-item>
            <el-menu-item index="1-12-7">分段施工维护</el-menu-item>
            <el-menu-item index="1-12-8">结构物二维码</el-menu-item>
            <el-menu-item index="1-12-9">工程质量评定标准设置</el-menu-item>
            <el-menu-item index="1-12-10">原材料试验设置</el-menu-item>
            <el-menu-item index="1-12-11">现场检测设置</el-menu-item>
            <el-menu-item index="1-12-12">配合比试验设置</el-menu-item>
            <el-menu-item index="1-12-13">监理文书设置</el-menu-item>
            <el-menu-item index="1-12-14">质量单元表格分类</el-menu-item>
            <el-menu-item index="1-12-15">其他类别表格分类</el-menu-item>
            <el-menu-item index="1-12-16">通用表格模板设置</el-menu-item>
            <el-menu-item index="1-12-17">原材料试验频次设置</el-menu-item>
            <el-menu-item index="1-12-18">台账类型设置</el-menu-item>
            <el-menu-item index="1-12-19">表格属性维护</el-menu-item>
            <el-menu-item index="1-12-20">通用表格属性维护</el-menu-item>
            <el-menu-item index="1-12-21">特殊符号</el-menu-item>
          </el-submenu>
          <el-menu-item index="1-13">统计分析</el-menu-item>
          <el-menu-item index="1-14">填报分析</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </template>
        <el-submenu index="2-1">
          <span slot="title">选项4</span>
          <el-menu-item index="2-1-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: true,
      menuWidth: '',
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.child-menu {
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  height: calc(100vh - 70px);
  /deep/ .el-radio-group, .el-radio-button {
    width: 100%;
    .el-radio-button__inner {
      width: 100%;
      background: #06549E;
      color: #fff;
    }
  }
  .el-menu {
    height: 100%;
    border: unset;
    overflow: scroll;
  }
  /deep/ i, .el-icon-arrow-down:before{
    color: #fff;
  }
  /deep/ .el-radio-button__inner {
    border-radius: unset;
    border: unset;
  }
}
 /deep/ .el-submenu__title i {
   color: #fff;
 }
</style>
<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#292929"
    text-color="#ffffff"
    active-text-color="blue"
  >
    <el-radio-group v-model="isCollapse">
      <el-radio-button v-show="isCollapse" :label="false"><img src="../../../assets/img/home/flex.svg" alt=""></el-radio-button>
      <el-radio-button v-show="!isCollapse" :label="true"><img src="../../../assets/img/home/flex.svg" alt=""></el-radio-button>
    </el-radio-group>
    <el-menu-item index="1">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <g transform="translate(-1081 -707.25)">
          <g>
            <path class="svg" d="M1104.644,716.818l-10.051-8.45a2.329,2.329,0,0,0-3.145-.035l-10.091,8.485a1,1,0,1,0,1.287,1.531l1.023-.86v11.428a1.669,1.669,0,0,0,1.667,1.666h3a1.669,1.669,0,0,0,1.667-1.666v-2.334h6v2.334a1.668,1.668,0,0,0,1.666,1.666h3a1.669,1.669,0,0,0,1.667-1.666V717.489l1.023.86a1,1,0,0,0,1.287-1.531Zm-4.31,11.765H1098V726.25a1.669,1.669,0,0,0-1.667-1.667h-6.667A1.668,1.668,0,0,0,1088,726.25v2.333h-2.334V715.807l7.106-5.977a.352.352,0,0,1,.494.035l7.067,5.942Z"/>
            <path class="svg" d="M1094.334,727.25h-2.667a1,1,0,0,0,0,2h2.667a1,1,0,0,0,0-2Z"/>
          </g>
        </g>
      </svg>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <g transform="translate(-191 -113)">
            <g>
              <rect fill="none" width="24" height="24" transform="translate(191 113)"/>
            </g>
            <g>
              <path class="svg" d="M213,122h-.466a9.941,9.941,0,0,0-.672-1.619l.33-.331a2,2,0,0,0,0-2.828l-1.414-1.414a2,2,0,0,0-2.828,0l-.331.33a9.941,9.941,0,0,0-1.619-.672V115a2,2,0,0,0-2-2h-2a2,2,0,0,0-2,2v.466a9.941,9.941,0,0,0-1.619.672l-.331-.33a2,2,0,0,0-2.828,0l-1.414,1.414a2,2,0,0,0,0,2.828l.33.331a9.941,9.941,0,0,0-.672,1.619H193a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2h.466a9.941,9.941,0,0,0,.672,1.619l-.33.331a2,2,0,0,0,0,2.828l1.414,1.414a2,2,0,0,0,2.828,0l.331-.33a9.941,9.941,0,0,0,1.619.672V135a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2v-.466a9.941,9.941,0,0,0,1.619-.672l.331.33a2,2,0,0,0,2.828,0l1.414-1.414a2,2,0,0,0,0-2.828l-.33-.331a9.941,9.941,0,0,0,.672-1.619H213a2,2,0,0,0,2-2v-2A2,2,0,0,0,213,122Zm0,4h-2.029l-.177.778a7.917,7.917,0,0,1-1.027,2.473l-.425.676,1.436,1.437-1.414,1.414-1.437-1.436-.676.425a7.917,7.917,0,0,1-2.473,1.027l-.778.177V135h-2v-2.029l-.778-.177a7.917,7.917,0,0,1-2.473-1.027l-.676-.425-1.437,1.436-1.414-1.414,1.436-1.437-.425-.676a7.917,7.917,0,0,1-1.027-2.473l-.177-.778H193v-2h2.029l.177-.778a7.917,7.917,0,0,1,1.027-2.473l.425-.676-1.436-1.437,1.414-1.414,1.437,1.436.676-.425a7.917,7.917,0,0,1,2.473-1.027l.778-.177V115h2v2.029l.778.177a7.917,7.917,0,0,1,2.473,1.027l.676.425,1.437-1.436,1.414,1.414-1.436,1.437.425.676a7.917,7.917,0,0,1,1.027,2.473l.177.778H213Z"/>
              <path class="svg" d="M203,121a4,4,0,1,0,4,4A4,4,0,0,0,203,121Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,203,127Z"/>
            </g>
          </g>
        </svg>
        <span slot="title">设置</span>
      </template>
      <el-submenu index="2-1">
        <span slot="title">选项4</span>
        <el-menu-item index="2-1-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <g transform="translate(-1081 -776.584)">
          <g>
            <rect fill="none" width="24" height="24" transform="translate(1081 776.584)"/>
          </g>
          <g>
            <path class="svg" d="M1086,782.584h-2a2,2,0,0,0-2,2v12a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2v-12A2,2,0,0,0,1086,782.584Zm-2,14v-12h2v12Z"/>
            <path class="svg" d="M1094,778.584h-2a2,2,0,0,0-2,2v16a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2v-16A2,2,0,0,0,1094,778.584Zm-2,18v-16h2v16Z"/>
            <path class="svg" d="M1102,788.584h-2a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2v-6A2,2,0,0,0,1102,788.584Zm-2,8v-6h2v6Z"/>
          </g>
        </g>
      </svg>
      <span slot="title">导航三</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: true,
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
.el-menu{
  height: 100%;
  border: unset;
  overflow: scroll;
  &:not(.el-menu--collapse) {
    width: 240px;
    min-height: 400px;
  }
  .el-radio-group, .el-radio-button {
    width: 100%;
    /deep/ .el-radio-button__inner {
      border: unset;
      width: 100%;
      border-radius: unset;
      border: unset;
      background-color: transparent;
      img {
        margin: 0 auto;
      }
    }
  }
  /deep/ .el-menu-item, /deep/ .el-submenu__title {
    display: flex;
    align-items: center;
    text-indent: 12px;
    color: rgba(255,255,255, 0.65) !important;
    .svg {
      fill: #ffffff;
    }
    .el-tooltip {
      display: flex !important;
      align-items: center !important;
    }
  }
  /deep/ .el-menu-item.is-active {
    color: #fff !important;
    .svg {
      fill: #ff774d
    }
  }
}
</style>
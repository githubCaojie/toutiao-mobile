 <template>
  <div class="gantt">
    <module-header>
      <el-image slot="icon" :src="require('../../../assets/img/home/todo_icon.png')"/>
      <span slot="name">工作计划</span>
    </module-header>
    <div ref="gantt" class="left-container"/>
  </div>
</template>
<script>
import moduleHeader from '../../../components/moduleHeader/moduleHeader.vue'
import gantt from 'dhtmlx-gantt'  // 引入模块
import 'dhtmlx-gantt/codebase/skins/dhtmlxgantt_terrace.css' //皮肤
import './locale_cn'

export default {
  name: 'gantt',
  components: {
    moduleHeader
  },
  data() {
    return {
      tasks: {
        data: []
      }
    }
  },
  methods: {
    initData () {
      this.tasks.data = [
        {
          text: '国资监管类任务一', // 任务名
          start_date: '19-07-2021', // 开始时间
          id: 1, // 任务id
          duration: 4, // 任务时长，从start_date开始计算
          type: 1
        },
        {
          text: '财务资产类任务一',
          start_date: '18-07-2021',
          id: 2,
          duration: 3,
          type: 2
        },
        {
          text: '经营管理类任务二',
          start_date: '21-07-2021',
          id: 3,
          duration: 2,
          type: 3
        },
        {
          text: '日常管理类任务一',
          start_date: '19-07-2021',
          id: 4,
          duration: 3,
          type: 4
        },
      ].map(function(current, ind, arry) {
        var newObj = {}
        if (current.type) { //存在type字段 说明非一级菜单，判断阶段的具体类型 设置不同颜色
          if (current.type == 1) { //冒烟
            newObj = Object.assign({}, current, { 'color': '#EF7230' })
          } else if (current.type == 2) { //单元
            newObj = Object.assign({}, current, { 'color': '#003A7C' })
          } else if (current.type == 3) { //回归
            newObj = Object.assign({}, current, { 'color': '#003A7C' })
          } else if (current.type == 4){
            newObj = Object.assign({}, current, { 'color': '#1F8ECD' })
          }
        } else { //一级菜单是蓝色的
          newObj = Object.assign({}, current, { 'color': '#5692f0' })
        }
        return newObj
      })
    }
  },
  mounted() {
    this.initData()

    //自适应甘特图的尺寸大小, 使得在不出现滚动条的情况下, 显示全部任务
    gantt.config.autosize = false
    //只读模式
    gantt.config.readonly = true
    //是否显示左侧树表格
    gantt.config.show_grid = true
    //表格列设置
    gantt.config.columns = [
      { name: 'text', label: '工作任务', tree: true, width: '193' }
    ]
    //时间轴图表中，如果不设置，只有行边框，区分上下的任务，设置之后带有列的边框，整个时间轴变成格子状。
    gantt.config.show_task_cells = true

    //设置x轴日期
    gantt.config.scale_unit = 'day'
    gantt.config.step = 1
    gantt.config.date_scale = '周' + '%D'

    //当task的长度改变时，自动调整图表坐标轴区间用于适配task的长度
    gantt.config.fit_tasks = true
    //时间轴图表中，甘特图的高度
    gantt.config.row_height = 47

    // 初始化
    gantt.init(this.$refs.gantt)
    // 数据解析
    gantt.parse(this.tasks)
  }
}
</script>

<style lang="less" scoped>
.gantt {
  width: 100%;
  height: 100%;
  margin-top: 23px;
  .left-container {
    width: 100%;
    height: calc(100% - 23px - 48px);
    /deep/ .gantt_tree_icon {
      display: none;
    }
    /deep/ .gantt_task_line.gantt_task_inline_color {
      height: 16px !important;
      margin-top: 13px;
      border-radius: 8px !important;
    }
  }
  /deep/ .gantt_container, /deep/ .gantt_tooltip, /deep/ .gantt_grid_scale, /deep/.gantt_task_scale, /deep/.gantt_task_vscroll, /deep/ .gantt_row, /deep/ .gantt_task_row {
    background-color: transparent;
  }
}
</style>
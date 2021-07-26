 <template>
  <div class="app-container">
    <div ref="gantt" class="left-container"></div>
    <div class="label">
      <div class="label-item">
        <div class="color blue"></div>
        进行中
      </div>
      <div class="label-item">
        <div class="color green"></div>
        已完成
      </div>
      <div class="label-item">
        <div class="color red"></div>
        未完成
      </div>
    </div>
  </div>
</template>
<script>
  import gantt from 'dhtmlx-gantt'  // 引入模块
  import 'dhtmlx-gantt/codebase/skins/dhtmlxgantt_terrace.css' //皮肤

  export default {
    name: 'gantt',
    data() {
      return {
        tasks: {
          data: []
        }
      }
    },
    methods: {
      //开始时间-结束时间参数
      DateDifference (strDateStart, strDateEnd) {
        var begintime_ms = Date.parse(new Date(strDateStart.replace(/-/g, '/'))) //begintime 为开始时间
        var endtime_ms = Date.parse(new Date(strDateEnd.replace(/-/g, '/')))   // endtime 为结束时间
        var date3 = endtime_ms - begintime_ms //时间差的毫秒数
        var days = Math.floor(date3 / (24 * 3600 * 1000))
        return days
      },
      initData () {
        this.tasks.data = [
          {
            text: '决策任务一', // 任务名
            start_date: '2021-07-19', // 开始时间
            id: 1, // 任务id
            duration: 4, // 任务时长，从start_date开始计算
            type: 1
          },
          {
            text: '管理任务一', // 任务名
            start_date: '2021-07-19', // 开始时间
            id: 2, // 任务id
            duration: 3, // 任务时长，从start_date开始计算
            type: 2
          },
          {
            text: '监测任务一', // 任务名
            start_date: '2021-07-19', // 开始时间
            id: 3, // 任务id
            duration: 5, // 任务时长，从start_date开始计算
            type: 3
          },
          {
            text: '追责任务一', // 任务名
            start_date: '2021-07-19', // 开始时间
            id: 4, // 任务id
            duration: 6, // 任务时长，从start_date开始计算
            type: 4
          },
        ].map(function(current, ind, arry) {
          var newObj = {}
          if (current.type) { //存在type字段 说明非一级菜单，判断阶段的具体类型 设置不同颜色
            if (current.type == 1) { //冒烟
              newObj = Object.assign({}, current, { 'color': '#3b70b3' })
            } else if (current.type == 2) { //单元
              newObj = Object.assign({}, current, { 'color': '#3b70b3' })
            } else if (current.type == 3) { //回归
              newObj = Object.assign({}, current, { 'color': '#339d66' })
            } else if (current.type == 4){
              newObj = Object.assign({}, current, { 'color': '#cd5252' })
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
        { name: 'text', label: '工作任务', tree: true, width: '153' }
      ]
      //时间轴图表中，如果不设置，只有行边框，区分上下的任务，设置之后带有列的边框，整个时间轴变成格子状。
      gantt.config.show_task_cells = true

      //设置x轴日期
      gantt.config.scale_unit = 'day'
      gantt.config.step = 1
      // gantt.config.date_scale = '周' + '%D'
      gantt.config.date_scale = '%D'

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
  /deep/ .gantt_tree_icon {
    display: none;
  }
  /deep/ .gantt_task_content {
    display: none;
  }
  /deep/ .gantt_task_line.gantt_task_inline_color {
    height: 16px !important;
    margin-top: 13px;
    border-radius: 8px !important;
  }
  /deep/ .gantt_grid_data .gantt_cell {
    text-indent: 20px;
  }
  .app-container {
    width: 100%;
    height: 100%;
    /deep/ .left-container {
      width: 100%;
      height: calc(100% - 30px);
    }
  }
  .label {
    height: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 14px;
    .label-item {
      display: flex;
      align-items: center;
      margin-right: 15px;
      .color {
        height: 10px;
        width: 20px;
        margin-right: 8px;
      }
      .blue {
        background: #3b70b3;
      }
      .green {
        background: #339d66;
      }
      .red {
        background: #cd5252;
      }
    }
    .label-item:last-child{
      margin-right: 0;
    }
  }
</style>
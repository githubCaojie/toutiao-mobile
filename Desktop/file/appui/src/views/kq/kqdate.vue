<template>
  <div class="app-full">
    <van-nav-bar @click-left="$root.appBack()" title="考勤" :border="false" left-arrow></van-nav-bar>
    <div class="app-main">
      <el-calendar v-model="curdate">
        <template slot="dateCell" slot-scope="{data}">
          <ul class="content">
            <li>{{ data.day.split('-')[2] }}</li>
            <li v-if="kqMap[data.day]" :class="classObj[kqMap[data.day]]"></li>
          </ul>
        </template>
      </el-calendar>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'kqdate',
  data() {
    return {
      curdate: '',
      kqMap: {},
      classObj: {
        '1': 'normal',
        '4': 'unnormal'
      },
      yearMonth: '',
    }
  },
  created() {
    this.calendarData(moment().format('YYYY-MM-DD'));
  },
  watch: {
    curdate: function(nval) {
      let date = moment(nval).format('YYYY-MM-DD');
      this.calendarData(date)
    }
  },
  methods: {
    calendarData(date) {
      if (this.yearMonth === moment(date).format('YYYY-MM')) {
        return;
      }
      this.yearMonth = moment(date).format('YYYY-MM')
      this.appCommon.tloading();
      let params = {
        month: date
      }
      this.appCommon.postReq('/jlkq/jlkqInfo/kqStatistics', params, process.env.VUE_APP_PMZL).then(rdata => {
        this.kqMap = rdata.parameters.kqMap
      })
    }
  }
}
</script>

<style lang="scss">
.el-calendar__body {
  padding: 0px;
}
.el-calendar-table .el-calendar-day {
  padding: 0px;
  height: 80px;
}
</style>
<style lang="scss" scoped>
@mixin circle($color) {
  content: '';
  width: 7px;
  height: 7px;
  border-radius: 50%;
  position: absolute;
  background-color: $color;
  left: -5px;
  bottom: 12px;
}

.content {
  text-align: center;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  li {
    line-height: 30px;
  }

  .normal {
    position: relative;

    &::after {
      @include circle(green);
    }
    &::before {
      content: '出勤';
      font-size: 11px;
      color: gray;
      position: relative;
      left: 5px;
    }
  }
  .unnormal {
     position: relative;

    &::after {
      @include circle(black);
    }
    &::before {
      content: '旷工';
      font-size: 11px;
      color: gray;
      position: relative;
      left: 5px;
    }
  }
}
</style>
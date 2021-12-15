<template>
  <div class="comp-full-calendar">
    <!-- header pick month -->
    <fc-header :current-month="currentMonth"
      :first-day="firstDay"
      :locale="locale"
      @change="emitChangeMonth">

      <div slot="header-left">
        <slot name="fc-header-left">
        </slot>
      </div>

      <div slot="header-right">
        <slot name="fc-header-right">
        </slot>
      </div>
    </fc-header>
    <!-- body display date day and events -->
    <div class="full-calendar-body">
      <div class="weeks">
        <strong class="week" v-for="dayIndex in 7">{{ (dayIndex - 1) | localeWeekDay(firstDay, locale) }}</strong>
      </div>
      <div class="dates" ref="dates">
        <div class="dates-bg">
          <div class="week-row" v-for="week in currentDates">
            <div class="day-cell" v-for="day in week" :class="{'today' : day.isToday, 'not-cur-month' : !day.isCurMonth,
              'date-selected': selectDay===day.fdate}" @click="dateClick(day)">
              <div class="day-number">
                <div>{{ day.monthDay }}</div>
                <div style="font-size:10px;" v-if="extraData[day.fdate]">
                  <div class="app-fc" v-if="extraData[day.fdate]['sb']>0">
                    <div class="dote"></div>
                    <div>{{extraData[day.fdate]['sb']}}</div>
                  </div>
                  <div class="app-fc" v-if="extraData[day.fdate]['wzg']>0">
                    <div class="dote" style="background:red;"></div>
                    <div>{{extraData[day.fdate]['wzg']}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  // import langSets from './dataMap/langSets'
  import dateFunc from './components/dateFunc'
  import moment from 'moment';
  import EventCard from './components/eventCard.vue';
  import DateHeader from './components/header.vue'

  export default {
    props : {
      events : { // events will be displayed on calendar
        type : Array,
        default(){
          return [];
        }
      },
      locale : {
        type : String,
        default : 'zh-cn'
      },
      firstDay : {
        type : Number | String,
        validator (val) {
          let res = parseInt(val);
          return res >= 0 && res <= 6
        },
        default : 0
      },
      defaultDate:{
        type: String,
        default: moment().format('YYYY-MM-DD')
      },
      extraData:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    components : {
      'event-card': EventCard,
      'fc-header' : DateHeader
    },
    mounted () {
      this.emitChangeMonth(this.currentMonth);
    },
    data () {
      return {
        currentMonth : moment(this.defaultDate),
        selectDay : ''
      }
    },
    computed: {
      currentDates () {
        return this.getCalendar()
      }
    },
    methods : {
      emitChangeMonth (firstDayOfMonth) {
        this.currentMonth = firstDayOfMonth;

        let start = dateFunc.getMonthViewStartDate(firstDayOfMonth, this.firstDay);
        let end = dateFunc.getMonthViewEndDate(firstDayOfMonth, this.firstDay);

        this.$emit('changeMonth', start, end, firstDayOfMonth)
      },
      moreTitle (date) {
        if (!date) return '';
        return moment(date).format('ll');
      },
      getCalendar () {
        // calculate 2d-array of each month
        let monthViewStartDate = dateFunc.getMonthViewStartDate(this.currentMonth, this.firstDay);
        let calendar = [];

        for(let perWeek = 0 ; perWeek < 6 ; perWeek++) {
          let week = [];

          for(let perDay = 0 ; perDay < 7 ; perDay++) {
            week.push({
              monthDay : monthViewStartDate.date(),
              isToday : monthViewStartDate.isSame(moment(), 'day'),
              isCurMonth : monthViewStartDate.isSame(this.currentMonth, 'month'),
              weekDay : perDay,
              date : moment(monthViewStartDate),
              // events : this.slotEvents(monthViewStartDate),
              fdate: moment(monthViewStartDate).format('YYYY-MM-DD')
            });

            monthViewStartDate.add(1, 'day');
          }

          calendar.push(week);
        }
        return calendar
      },
      dateClick(day){
        this.selectDay = day.fdate;
        this.$emit('dayClick', day);
      }
    },
    filters: {
      localeWeekDay (weekday, firstDay, locale) {
        firstDay = parseInt(firstDay);
        const localMoment = moment().locale(locale);
        return localMoment.localeData().weekdaysShort()[(weekday + firstDay) % 7];
      }
    }
  }
  
</script>
<style lang="scss">
  .comp-full-calendar{
        // font-family: "elvetica neue", tahoma, "hiragino sans gb";
    background: #fff;
    width: 100vw;
    padding: 20px 0px;
    ul,p{
      margin:0;
      padding:0;
    }
  }

  .full-calendar-body{
    margin-top: 20px;
  .weeks{
    display: flex;
    border-top:1px solid #e0e0e0;
    border-bottom:1px solid #e0e0e0;
    border-left:1px solid #e0e0e0;
  .week{
    flex:1;
    text-align: center;
    border-right:1px solid #e0e0e0;
    padding: 10px 0;
  }
  }
  .dates {
    position:relative;
  .week-row{
  // width: 100%;
  // position:absolute;
    border-left:1px solid #e0e0e0;
    display: flex;
  .day-cell{
    flex:1;
    min-height: 50px;
    padding:4px;
    border-right:1px solid #e0e0e0;
    border-bottom:1px solid #e0e0e0;
  .day-number{
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  &.today{
     background-color:#fcf8e3;
   }
  &.not-cur-month{
  .day-number{
    color:rgba(0,0,0,.24);
  }
  }
  }
  }
}}
  .date-selected{
    background: lightblue;
  }
  .dote{
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: black;
    margin-right: 5px;
  }
</style>
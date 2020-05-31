<template>
  <b-container>
    <b-row>
      <b-col></b-col>
      <b-col class="border border-white">日</b-col>
      <b-col class="border border-white">月</b-col>
      <b-col class="border border-white">火</b-col>
      <b-col class="border border-white">水</b-col>
      <b-col class="border border-white">木</b-col>
      <b-col class="border border-white">金</b-col>
      <b-col class="border border-white">土</b-col>
    </b-row>
    <b-row v-for="(weekItem,rowindex) of weeks" :key="rowindex">
      <b-col class="border border-white">
        <b-row>
          <b-col cols="12" class="text-center">日付</b-col>
        </b-row>
        <b-row>
          <b-col cols="6"></b-col>
          <b-col class="border border-white" cols="6">午前</b-col>
        </b-row>
        <b-row>
          <b-col cols="6"></b-col>
          <b-col class="border border-white" cols="6">午後</b-col>
        </b-row>
      </b-col>
      <b-col class="border border-white" v-for="(rowitem,rowindex) of 7" v-bind:key="rowindex">
        <ShiftCalendarDay :day="weekItem[rowitem-1].day" :members="weekItem[rowitem-1].member" />
      </b-col>
    </b-row>
  </b-container>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ShiftCalendarDay from "@/components/ShiftCalendarDay.vue";
import moment from "moment";
import CalendarData from "@/domain/CalendarData";

@Component({ components: { ShiftCalendarDay } })
export default class ShiftCalendar extends Vue {
  // schedule設定を取得
  @Prop() private shiftdatalist!: CalendarData[];
  @Prop() private shiftdataindex!: number;
  // Weeks取得
  get weeks() {
    const shiftdata = this.shiftdatalist[this.shiftdataindex];
    if (!shiftdata) {
      return [];
    }
    // yyyy
    let dayStr: string = "" + shiftdata.year;
    dayStr += "-";
    // yyyy-m
    dayStr += shiftdata.month;
    // yyyy-m-d
    dayStr += "-1";
    const dayOfTheWeek: number = moment(dayStr, "YYYY-M-D").day();

    // typeだと問題なし
    type Day = {
      day: number | null;
      member: string[][];
    };
    const weeks = [];
    let week = Array<Day>();
    const blankDay: Day = {
      day: null,
      member: [
        ["", ""],
        ["", ""]
      ]
    };
    //月初
    for (let i = 0; i < dayOfTheWeek; i++) {
      //dayOfTheWeekが土曜（6）の場合に、最大6個pushされる
      week.push(blankDay);
    }
    //月中
    shiftdata.dayMembers.forEach(daymember => {
      week.push(daymember);
      if (week.length >= 7) {
        weeks.push(week);
        week = Array<Day>();
      }
    });

    //月末 最後のweekに詰めなおしてpush
    if (week.length > 0 && week.length < 7) {
      while (week.length < 7) {
        week.push(blankDay);
      }
      weeks.push(week);
    }
    return weeks;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
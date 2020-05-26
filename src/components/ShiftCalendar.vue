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

@Component({ components: { ShiftCalendarDay } })
export default class ShiftCalendar extends Vue {
  // Weeks取得
  get weeks() {
    // yyyy
    let dayStr: string = "" + this.shiftcalresult.reslt.year;
    dayStr += "-";
    // yyyy-m
    dayStr += this.shiftcalresult.reslt.month;
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
    this.shiftcalresult.reslt.daysMembers.forEach(daymember => {
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

  // dayonemember
  // Todo しばらくこのまま使用する場合は、ファイルにしたほうがよい
  shiftcalresult = {
    reslt: {
      year: 2020,
      month: 1,
      DoW: "1",
      dayNum: 30,
      peoplePerDay: 2,
      daysMembers: [
        {
          day: 1,
          member: [
            ["honda", "kayo"],
            ["misaki", "nayoji"]
          ],
          patternId: 1,
          memTotals: {}
        },
        {
          day: 2,
          member: [
            ["mayo", "igarashi"],
            ["gorilla", "kishi"]
          ],
          patternId: 5765,
          memTotals: {}
        },
        {
          day: 3,
          member: [
            ["zzz", "bb"],
            ["hoge", "tera"]
          ],
          patternId: 11529,
          memTotals: {}
        },
        {
          day: 4,
          member: [
            ["oyasumi", "kayo"],
            ["misaki", "nayoji"]
          ],
          patternId: 10,
          memTotals: {}
        },
        {
          day: 5,
          member: [
            ["igarashi", "gorilla"],
            ["kishi", "honda"]
          ],
          patternId: 4324,
          memTotals: {}
        },
        {
          day: 6,
          member: [
            ["bb", "hoge"],
            ["tera", "mayo"]
          ],
          patternId: 10088,
          memTotals: {}
        },
        {
          day: 7,
          member: [
            ["oyasumi", "zzz"],
            ["misaki", "nayoji"]
          ],
          patternId: 100,
          memTotals: {}
        },
        {
          day: 8,
          member: [
            ["gorilla", "kishi"],
            ["honda", "kayo"]
          ],
          patternId: 2883,
          memTotals: {}
        },
        {
          day: 9,
          member: [
            ["hoge", "tera"],
            ["mayo", "igarashi"]
          ],
          patternId: 8647,
          memTotals: {}
        },
        {
          day: 10,
          member: [
            ["oyasumi", "zzz"],
            ["bb", "nayoji"]
          ],
          patternId: 1090,
          memTotals: {}
        },
        {
          day: 11,
          member: [
            ["kishi", "honda"],
            ["kayo", "misaki"]
          ],
          patternId: 1442,
          memTotals: {}
        },
        {
          day: 12,
          member: [
            ["tera", "mayo"],
            ["igarashi", "gorilla"]
          ],
          patternId: 7206,
          memTotals: {}
        },
        {
          day: 13,
          member: [
            ["oyasumi", "zzz"],
            ["bb", "hoge"]
          ],
          patternId: 12970,
          memTotals: {}
        },
        {
          day: 14,
          member: [
            ["honda", "kayo"],
            ["misaki", "nayoji"]
          ],
          patternId: 1,
          memTotals: {}
        },
        {
          day: 15,
          member: [
            ["mayo", "igarashi"],
            ["gorilla", "kishi"]
          ],
          patternId: 5765,
          memTotals: {}
        },
        {
          day: 16,
          member: [
            ["zzz", "bb"],
            ["hoge", "tera"]
          ],
          patternId: 11529,
          memTotals: {}
        },
        {
          day: 17,
          member: [
            ["oyasumi", "kayo"],
            ["misaki", "nayoji"]
          ],
          patternId: 10,
          memTotals: {}
        },
        {
          day: 18,
          member: [
            ["igarashi", "gorilla"],
            ["kishi", "honda"]
          ],
          patternId: 4324,
          memTotals: {}
        },
        {
          day: 19,
          member: [
            ["bb", "hoge"],
            ["tera", "mayo"]
          ],
          patternId: 10088,
          memTotals: {}
        },
        {
          day: 20,
          member: [
            ["oyasumi", "zzz"],
            ["misaki", "nayoji"]
          ],
          patternId: 100,
          memTotals: {}
        },
        {
          day: 21,
          member: [
            ["gorilla", "kishi"],
            ["honda", "kayo"]
          ],
          patternId: 2883,
          memTotals: {}
        },
        {
          day: 22,
          member: [
            ["hoge", "tera"],
            ["mayo", "igarashi"]
          ],
          patternId: 8647,
          memTotals: {}
        },
        {
          day: 23,
          member: [
            ["oyasumi", "zzz"],
            ["bb", "nayoji"]
          ],
          patternId: 1090,
          memTotals: {}
        },
        {
          day: 24,
          member: [
            ["kishi", "honda"],
            ["kayo", "misaki"]
          ],
          patternId: 1442,
          memTotals: {}
        },
        {
          day: 25,
          member: [
            ["tera", "mayo"],
            ["igarashi", "gorilla"]
          ],
          patternId: 7206,
          memTotals: {}
        },
        {
          day: 26,
          member: [
            ["oyasumi", "zzz"],
            ["bb", "hoge"]
          ],
          patternId: 12970,
          memTotals: {}
        },
        {
          day: 27,
          member: [
            ["honda", "kayo"],
            ["misaki", "nayoji"]
          ],
          patternId: 1,
          memTotals: {}
        },
        {
          day: 28,
          member: [
            ["mayo", "igarashi"],
            ["gorilla", "kishi"]
          ],
          patternId: 5765,
          memTotals: {}
        },
        {
          day: 29,
          member: [
            ["zzz", "bb"],
            ["hoge", "tera"]
          ],
          patternId: 11529,
          memTotals: {}
        },
        {
          day: 30,
          member: [
            ["oyasumi", "kayo"],
            ["misaki", "nayoji"]
          ],
          patternId: 10,
          memTotals: {}
        }
      ]
    },
    daymembers: [
      [
        [
          "nayoji",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "misaki",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "kayo",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "honda",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "kishi",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "mayo",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "tera",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "hoge",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "bb",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "zzz",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "misaki",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "kayo",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "honda",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "kishi",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "mayo",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "tera",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "hoge",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "bb",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "zzz",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "misaki",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "kayo",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "honda",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "kishi",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "mayo",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "tera",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "hoge",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "bb",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "zzz",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 1,
            totalDayNum: 10
          }
        ],
        [
          "misaki",
          {
            contDayNum: 1,
            totalDayNum: 10
          }
        ],
        [
          "kayo",
          {
            contDayNum: 1,
            totalDayNum: 10
          }
        ],
        [
          "honda",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "kishi",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "mayo",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "tera",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "hoge",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "bb",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "zzz",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "misaki",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "kayo",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "honda",
          {
            contDayNum: 1,
            totalDayNum: 6
          }
        ],
        [
          "kishi",
          {
            contDayNum: 1,
            totalDayNum: 6
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 1,
            totalDayNum: 6
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 1,
            totalDayNum: 6
          }
        ],
        [
          "mayo",
          {
            contDayNum: 0,
            totalDayNum: 5
          }
        ],
        [
          "tera",
          {
            contDayNum: 0,
            totalDayNum: 5
          }
        ],
        [
          "hoge",
          {
            contDayNum: 0,
            totalDayNum: 5
          }
        ],
        [
          "bb",
          {
            contDayNum: 0,
            totalDayNum: 5
          }
        ],
        [
          "zzz",
          {
            contDayNum: 0,
            totalDayNum: 5
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 0,
            totalDayNum: 5
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "misaki",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "kayo",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "honda",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "kishi",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "mayo",
          {
            contDayNum: 1,
            totalDayNum: 6
          }
        ],
        [
          "tera",
          {
            contDayNum: 1,
            totalDayNum: 6
          }
        ],
        [
          "hoge",
          {
            contDayNum: 1,
            totalDayNum: 6
          }
        ],
        [
          "bb",
          {
            contDayNum: 1,
            totalDayNum: 6
          }
        ],
        [
          "zzz",
          {
            contDayNum: 0,
            totalDayNum: 5
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 0,
            totalDayNum: 5
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ],
        [
          "misaki",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ],
        [
          "kayo",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "honda",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "kishi",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "mayo",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "tera",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "hoge",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "bb",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "zzz",
          {
            contDayNum: 1,
            totalDayNum: 6
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 1,
            totalDayNum: 6
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "misaki",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "kayo",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ],
        [
          "honda",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ],
        [
          "kishi",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "mayo",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "tera",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "hoge",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "bb",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "zzz",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "misaki",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "kayo",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "honda",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "kishi",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ],
        [
          "mayo",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ],
        [
          "tera",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ],
        [
          "hoge",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ],
        [
          "bb",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "zzz",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ],
        [
          "misaki",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "kayo",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "honda",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "kishi",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "mayo",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "tera",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "hoge",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "bb",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ],
        [
          "zzz",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "misaki",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ],
        [
          "kayo",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ],
        [
          "honda",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ],
        [
          "kishi",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "mayo",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "tera",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "hoge",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "bb",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "zzz",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "misaki",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "kayo",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "honda",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "kishi",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ],
        [
          "mayo",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ],
        [
          "tera",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ],
        [
          "hoge",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "bb",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "zzz",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "misaki",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "kayo",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "honda",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "kishi",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "mayo",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "tera",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "hoge",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ],
        [
          "bb",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ],
        [
          "zzz",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "misaki",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "kayo",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "honda",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "kishi",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "mayo",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "tera",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "hoge",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "bb",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "zzz",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "misaki",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "kayo",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "honda",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "kishi",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "mayo",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "tera",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "hoge",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "bb",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "zzz",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "misaki",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "kayo",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "honda",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "kishi",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "mayo",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "tera",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "hoge",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "bb",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "zzz",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 1,
            totalDayNum: 10
          }
        ],
        [
          "misaki",
          {
            contDayNum: 1,
            totalDayNum: 10
          }
        ],
        [
          "kayo",
          {
            contDayNum: 1,
            totalDayNum: 10
          }
        ],
        [
          "honda",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "kishi",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "mayo",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "tera",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "hoge",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "bb",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "zzz",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "misaki",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "kayo",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "honda",
          {
            contDayNum: 1,
            totalDayNum: 6
          }
        ],
        [
          "kishi",
          {
            contDayNum: 1,
            totalDayNum: 6
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 1,
            totalDayNum: 6
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 1,
            totalDayNum: 6
          }
        ],
        [
          "mayo",
          {
            contDayNum: 0,
            totalDayNum: 5
          }
        ],
        [
          "tera",
          {
            contDayNum: 0,
            totalDayNum: 5
          }
        ],
        [
          "hoge",
          {
            contDayNum: 0,
            totalDayNum: 5
          }
        ],
        [
          "bb",
          {
            contDayNum: 0,
            totalDayNum: 5
          }
        ],
        [
          "zzz",
          {
            contDayNum: 0,
            totalDayNum: 5
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 0,
            totalDayNum: 5
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "misaki",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "kayo",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "honda",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "kishi",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "mayo",
          {
            contDayNum: 1,
            totalDayNum: 6
          }
        ],
        [
          "tera",
          {
            contDayNum: 1,
            totalDayNum: 6
          }
        ],
        [
          "hoge",
          {
            contDayNum: 1,
            totalDayNum: 6
          }
        ],
        [
          "bb",
          {
            contDayNum: 1,
            totalDayNum: 6
          }
        ],
        [
          "zzz",
          {
            contDayNum: 0,
            totalDayNum: 5
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 0,
            totalDayNum: 5
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ],
        [
          "misaki",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ],
        [
          "kayo",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "honda",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "kishi",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "mayo",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "tera",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "hoge",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "bb",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "zzz",
          {
            contDayNum: 1,
            totalDayNum: 6
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 1,
            totalDayNum: 6
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "misaki",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "kayo",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ],
        [
          "honda",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ],
        [
          "kishi",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "mayo",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "tera",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "hoge",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "bb",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "zzz",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "misaki",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "kayo",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "honda",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "kishi",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ],
        [
          "mayo",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ],
        [
          "tera",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ],
        [
          "hoge",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ],
        [
          "bb",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "zzz",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 0,
            totalDayNum: 6
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ],
        [
          "misaki",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "kayo",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "honda",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "kishi",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "mayo",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "tera",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "hoge",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "bb",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ],
        [
          "zzz",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 1,
            totalDayNum: 7
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "misaki",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ],
        [
          "kayo",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ],
        [
          "honda",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ],
        [
          "kishi",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "mayo",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "tera",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "hoge",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "bb",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "zzz",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "misaki",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "kayo",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "honda",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "kishi",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ],
        [
          "mayo",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ],
        [
          "tera",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ],
        [
          "hoge",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "bb",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "zzz",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 0,
            totalDayNum: 7
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "misaki",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "kayo",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "honda",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "kishi",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "mayo",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "tera",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "hoge",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ],
        [
          "bb",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ],
        [
          "zzz",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 1,
            totalDayNum: 8
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "misaki",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "kayo",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "honda",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "kishi",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "mayo",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "tera",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "hoge",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "bb",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "zzz",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "misaki",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "kayo",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "honda",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "kishi",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "mayo",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "tera",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "hoge",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "bb",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "zzz",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "misaki",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "kayo",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "honda",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "kishi",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "mayo",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "tera",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "hoge",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "bb",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "zzz",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 0,
            totalDayNum: 8
          }
        ]
      ],
      [
        [
          "nayoji",
          {
            contDayNum: 1,
            totalDayNum: 10
          }
        ],
        [
          "misaki",
          {
            contDayNum: 1,
            totalDayNum: 10
          }
        ],
        [
          "kayo",
          {
            contDayNum: 1,
            totalDayNum: 10
          }
        ],
        [
          "honda",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "kishi",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "gorilla",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "igarashi",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "mayo",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "tera",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "hoge",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "bb",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "zzz",
          {
            contDayNum: 0,
            totalDayNum: 9
          }
        ],
        [
          "oyasumi",
          {
            contDayNum: 1,
            totalDayNum: 9
          }
        ]
      ]
    ]
  };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
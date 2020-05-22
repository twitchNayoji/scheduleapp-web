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
    <b-row>
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
      <b-col class="border border-white" v-for="(rowitem,rowindex) of 7" v-bind:key="rowindex" >
        <!-- Todo 4週間分出す-->
        <ShiftCalendarDay :day="rowindex+1" :members="shiftcalresult.reslt.daysMembers[rowitem].member" />
      </b-col>
    </b-row>
  </b-container>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ShiftCalendarDay from "@/components/ShiftCalendarDay.vue";

@Component({ components: { ShiftCalendarDay } })
export default class ShiftCalendar extends Vue {
  // dayonemember
  // Todo しばらくこのまま使用する場合は、ファイルにしたほうがよい
  shiftcalresult = {
    reslt: {
      month: 1,
      DoW: "1",
      dayNum: 30,
      peoplePerDay: 2,
      daysMembers: [
        {
          member: [
            ["honda", "kayo"],
            ["misaki", "nayoji"]
          ],
          patternId: 1,
          memTotals: {}
        },
        {
          member: [
            ["mayo", "igarashi"],
            ["gorilla", "kishi"]
          ],
          patternId: 5765,
          memTotals: {}
        },
        {
          member: [
            ["zzz", "bb"],
            ["hoge", "tera"]
          ],
          patternId: 11529,
          memTotals: {}
        },
        {
          member: [
            ["oyasumi", "kayo"],
            ["misaki", "nayoji"]
          ],
          patternId: 10,
          memTotals: {}
        },
        {
          member: [
            ["igarashi", "gorilla"],
            ["kishi", "honda"]
          ],
          patternId: 4324,
          memTotals: {}
        },
        {
          member: [
            ["bb", "hoge"],
            ["tera", "mayo"]
          ],
          patternId: 10088,
          memTotals: {}
        },
        {
          member: [
            ["oyasumi", "zzz"],
            ["misaki", "nayoji"]
          ],
          patternId: 100,
          memTotals: {}
        },
        {
          member: [
            ["gorilla", "kishi"],
            ["honda", "kayo"]
          ],
          patternId: 2883,
          memTotals: {}
        },
        {
          member: [
            ["hoge", "tera"],
            ["mayo", "igarashi"]
          ],
          patternId: 8647,
          memTotals: {}
        },
        {
          member: [
            ["oyasumi", "zzz"],
            ["bb", "nayoji"]
          ],
          patternId: 1090,
          memTotals: {}
        },
        {
          member: [
            ["kishi", "honda"],
            ["kayo", "misaki"]
          ],
          patternId: 1442,
          memTotals: {}
        },
        {
          member: [
            ["tera", "mayo"],
            ["igarashi", "gorilla"]
          ],
          patternId: 7206,
          memTotals: {}
        },
        {
          member: [
            ["oyasumi", "zzz"],
            ["bb", "hoge"]
          ],
          patternId: 12970,
          memTotals: {}
        },
        {
          member: [
            ["honda", "kayo"],
            ["misaki", "nayoji"]
          ],
          patternId: 1,
          memTotals: {}
        },
        {
          member: [
            ["mayo", "igarashi"],
            ["gorilla", "kishi"]
          ],
          patternId: 5765,
          memTotals: {}
        },
        {
          member: [
            ["zzz", "bb"],
            ["hoge", "tera"]
          ],
          patternId: 11529,
          memTotals: {}
        },
        {
          member: [
            ["oyasumi", "kayo"],
            ["misaki", "nayoji"]
          ],
          patternId: 10,
          memTotals: {}
        },
        {
          member: [
            ["igarashi", "gorilla"],
            ["kishi", "honda"]
          ],
          patternId: 4324,
          memTotals: {}
        },
        {
          member: [
            ["bb", "hoge"],
            ["tera", "mayo"]
          ],
          patternId: 10088,
          memTotals: {}
        },
        {
          member: [
            ["oyasumi", "zzz"],
            ["misaki", "nayoji"]
          ],
          patternId: 100,
          memTotals: {}
        },
        {
          member: [
            ["gorilla", "kishi"],
            ["honda", "kayo"]
          ],
          patternId: 2883,
          memTotals: {}
        },
        {
          member: [
            ["hoge", "tera"],
            ["mayo", "igarashi"]
          ],
          patternId: 8647,
          memTotals: {}
        },
        {
          member: [
            ["oyasumi", "zzz"],
            ["bb", "nayoji"]
          ],
          patternId: 1090,
          memTotals: {}
        },
        {
          member: [
            ["kishi", "honda"],
            ["kayo", "misaki"]
          ],
          patternId: 1442,
          memTotals: {}
        },
        {
          member: [
            ["tera", "mayo"],
            ["igarashi", "gorilla"]
          ],
          patternId: 7206,
          memTotals: {}
        },
        {
          member: [
            ["oyasumi", "zzz"],
            ["bb", "hoge"]
          ],
          patternId: 12970,
          memTotals: {}
        },
        {
          member: [
            ["honda", "kayo"],
            ["misaki", "nayoji"]
          ],
          patternId: 1,
          memTotals: {}
        },
        {
          member: [
            ["mayo", "igarashi"],
            ["gorilla", "kishi"]
          ],
          patternId: 5765,
          memTotals: {}
        },
        {
          member: [
            ["zzz", "bb"],
            ["hoge", "tera"]
          ],
          patternId: 11529,
          memTotals: {}
        },
        {
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
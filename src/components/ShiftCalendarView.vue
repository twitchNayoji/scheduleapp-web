<template>
  <div>
    <b-row class="pb-2">
      <b-col cols="10"></b-col>
      <b-col cols="2" class="text-center">
        <b-button @click="buttonbehave">計算</b-button>
      </b-col>
    </b-row>
    <TitleFrame title="シフトカレンダー" v-if="calendardata">
      <b-row class="mb-2">
        <b-col cols="1">
          <b-button @click="beforecalendar" :disabled="calendarindex <= 0" v-if="calendardata">＜</b-button>
        </b-col>
        <b-col cols="10"></b-col>
        <b-col cols="1">
          <b-button
            @click="nextcalendar"
            :disabled="calendarindex >= calendardata.length - 1"
            v-if="calendardata"
          >＞</b-button>
        </b-col>
      </b-row>
      <ShiftCalendar :shiftdataindex="calendarindex" :shiftdatalist="calendardata" />
    </TitleFrame>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ShiftCalendar from "@/components/ShiftCalendar.vue";
import TitleFrame from "@/components/TitleFrame.vue";
import CalendarData from "@/domain/CalendarData";
import CalendarDayData from "@/domain/CalendarDayData";

/**
 * カレンダーAPI叩いて取得
 */
function getCalendarData(): CalendarData[] {
  // Todo APIを叩いて、サーバから取得
  const dayMemberObjs = [
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
  ];
  const dayMemberObjs2 = [
    {
      day: 1,
      member: [
        ["aaaa", "iii"],
        ["uuu", "eee"]
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
        ["misaki", "ooo"]
      ],
      patternId: 10,
      memTotals: {}
    }
  ];

  const dayMembers = Array<CalendarDayData>();
  dayMemberObjs.forEach(dayMemberObj => {
    dayMembers.push(new CalendarDayData(dayMemberObj.day, dayMemberObj.member));
  });

  const dayMembers2 = Array<CalendarDayData>();
  dayMemberObjs2.forEach(dayMemberObj => {
    dayMembers2.push(
      new CalendarDayData(dayMemberObj.day, dayMemberObj.member)
    );
  });
  return [
    new CalendarData(2020, 1, 2, dayMembers),
    new CalendarData(2020, 1, 2, dayMembers2)
  ];
}

@Component({ components: { ShiftCalendar, TitleFrame } })
export default class ShiftCalendarView extends Vue {
  //Propは引数的な感じ
  @Prop() private testval!: { maxseq: number };
  calendardata: CalendarData[] | null = null;
  calendarindex = 0;
  buttonbehave() {
    alert(
      "calendarindex : " +
        this.calendarindex +
        ", maxseq : " +
        this.testval.maxseq
    );
    if (!this.calendardata) {
      this.calendardata = getCalendarData();
    }
  }
  nextcalendar() {
    this.calendarindex += 1;
  }
  beforecalendar() {
    this.calendarindex -= 1;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

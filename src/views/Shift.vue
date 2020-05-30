<template>
  <div class="mt-4 mb-4 pt-2">
    <ShiftInfo :schedule="schedule" @input="val => schedule = val" />
    <ShiftCalendarView :testval="schedule" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ShiftInfo from "@/components/ShiftInfo.vue";
import ShiftCalendarView from "@/components/ShiftCalendarView.vue";

function getSchedule(hashid: string) {
  // Todo Apiを叩いてスケジュールを取得
  return {
    _id: {
      $oid: "5ead67ffe7179a42f1731274"
    },
    hash: "aaaaa",
    year: "2020",
    month: "1",
    peopleperday: 2,
    maxseq: 5,
    members: [
      {
        id: 1,
        name: "nayoji",
        rules: [
          {
            category: "nottogether",
            val1: [
              {
                id: 2
              }
            ],
            val2: "",
            val3: ""
          }
        ]
      },
      {
        id: 2,
        name: "misaki",
        rules: []
      },
      {
        id: 3,
        name: "kayo",
        rules: []
      },
      {
        id: 4,
        name: "honda",
        rules: []
      }
    ]
  };
}

@Component({ components: { ShiftInfo, ShiftCalendarView } })
export default class Shift extends Vue {
  schedule!: { maxseq: number };
  retval!: { maxseq: number };

  beforeCreate() {
    //スケジュールを取得
    this.schedule = getSchedule(this.$route.params.hashid);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
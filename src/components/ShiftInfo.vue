<template>
  <b-container class = "mt-2">
    <b-row>
      <b-card
        :title=" year +'年'+ month +'月のシフト表'"
        tag="article"
        style="max-width:80rem;"
        class="mb-2 ShiftInfo"
      >
        <b-card-text>
          <b-form>
            <b-container>
              <b-row>
                <b-col>
                  <ShiftInfoHeader />
                </b-col>
                <b-col cols="6">
                  <ShiftInfoMembers :inputmembers="schedule.members" />
                </b-col>
              </b-row>
            </b-container>
          </b-form>
        </b-card-text>
      </b-card>
    </b-row>
    <b-row>
      <ShiftCalendar />
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ShiftInfoHeader from "@/components/ShiftInfoHeader.vue";
import ShiftInfoMembers from "@/components/ShiftInfoMembers.vue";
import ShiftCalendar from "@/components/ShiftCalendar.vue";

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
    rules: [
      {
        category: "maxseq",
        val1: "5",
        val2: "",
        val3: ""
      }
    ],
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

@Component({ components: { ShiftInfoHeader, ShiftInfoMembers, ShiftCalendar } })
export default class ShiftInfo extends Vue {
  //Propは引数的な感じ
  @Prop() private hashid!: string;
  // schedule設定を取得
  schedule: any;
  //year
  year = "";
  //month
  month = "";
  created() {
    //スケジュールを取得
    this.schedule = getSchedule(this.hashid);
    this.year = this.schedule.year;
    this.month = this.schedule.month;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

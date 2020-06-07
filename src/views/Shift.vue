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
import ShiftSettingData from "@/domain/ShiftSettingData";
import ShiftSettingRules from "@/domain/ShiftSettingRules";
import ShiftSettingMember from "@/domain/ShiftSettingMember";

function getSchedule(hashid: string): ShiftSettingData {
  // Todo Apiを叩いてスケジュールを取得

  // セッティングルールデータクラスに設定
  const hash = "aaaaa";
  const year = 2020;
  const month = 1;
  const asigndaynum = 2;
  const rules = new ShiftSettingRules({ maxseq: 5 });
  const members = new Array<ShiftSettingMember>();
  members.push(new ShiftSettingMember(1, "nayoji"));
  members.push(new ShiftSettingMember(2, "misaki"));
  members.push(new ShiftSettingMember(3, "kayo"));
  members.push(new ShiftSettingMember(4, "honda"));

  return new ShiftSettingData(hash, year, month, asigndaynum, rules, members);
}

@Component({ components: { ShiftInfo, ShiftCalendarView } })
export default class Shift extends Vue {
  schedule!: ShiftSettingData;
  beforeCreate() {
    //スケジュールを取得
    this.schedule = getSchedule(this.$route.params.hashid);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
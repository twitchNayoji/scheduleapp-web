<template>
  <b-container class="mt-2">
    <TitleFrame :title=" year +'年'+ month +'月のシフト表'">
      <b-form>
        <b-container>
          <b-row>
            <b-col>
              <ShiftInfoHeader v-model="schedule.rules" />
            </b-col>
            <b-col cols="6">
              <ShiftInfoMembers :inputmembers="schedule.members" />
            </b-col>
          </b-row>
        </b-container>
      </b-form>
    </TitleFrame>
  </b-container>
</template>

<script lang="ts">
import { Component, Emit, Watch, Prop, Vue } from "vue-property-decorator";
import ShiftInfoHeader from "@/components/ShiftInfoHeader.vue";
import ShiftInfoMembers from "@/components/ShiftInfoMembers.vue";
import TitleFrame from "@/components/TitleFrame.vue";
import ShiftSettingData from "@/domain/ShiftSettingData";
import ShiftSettingRules from "@/domain/ShiftSettingRules";

@Component({ components: { ShiftInfoHeader, ShiftInfoMembers, TitleFrame } })
export default class ShiftInfo extends Vue {
  // schedule設定を取得
  @Prop() private schedule!: ShiftSettingData;
  //year
  year = 0;
  //month
  month = 0;

  created() {
    //スケジュールを取得
    this.year = this.schedule.year;
    this.month = this.schedule.month;
  }

  @Emit("input")
  getSchedule() {
    return this.schedule;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

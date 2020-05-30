<template>
  <b-container class="mt-2">
    <TitleFrame :title=" year +'年'+ month +'月のシフト表'">
      <b-form>
        <b-container>
          <b-row>
            <b-col>
              <ShiftInfoHeader v-model="headerItems" />
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

type THeaderItem = { maxseq: number };

@Component({ components: { ShiftInfoHeader, ShiftInfoMembers, TitleFrame } })
export default class ShiftInfo extends Vue {
  // schedule設定を取得
  @Prop() private schedule!: any;
  //year
  year = "";
  //month
  month = "";

  //headers
  headerItems = {maxseq:null};
  created() {
    //スケジュールを取得
    this.year = this.schedule.year;
    this.month = this.schedule.month;
    this.headerItems.maxseq = this.schedule.maxseq;
  }

  @Watch("headerItems", { deep: true })
  @Emit("input")
  getSchedule() {
    if (this.headerItems) {
      this.schedule.maxseq = this.headerItems.maxseq;
    }
    return this.schedule;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

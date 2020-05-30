<template>
  <div>
    <b-button @click="buttonbehave">計算</b-button>
    <TitleFrame title="カレンダー" v-if="true">
      <ShiftCalendar />
    </TitleFrame>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ShiftCalendar from "@/components/ShiftCalendar.vue";
import TitleFrame from "@/components/TitleFrame.vue";

@Component({ components: { ShiftCalendar, TitleFrame } })
export default class ShiftCalendarView extends Vue {
  //Propは引数的な感じ
  @Prop() private testval!: { maxseq: number };
  buttonbehave() {
    alert(this.testval.maxseq);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

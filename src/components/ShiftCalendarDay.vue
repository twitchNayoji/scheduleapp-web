<template>
  <div>
    <b-row>
      <b-col cols="12" class="border border-white text-center">{{day}}日</b-col>
    </b-row>

    <b-row v-for="(rowitem,rowindex) of members" v-bind:key="rowindex">
      <b-col class="border border-white" v-for="(item,colindex) of rowitem" v-bind:key="colindex">
          {{item}}
      </b-col>
    </b-row>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ShiftCalendarDay extends Vue {
  //Propは引数的な感じ
  // 日付
  @Prop() private day!: number;
  // メンバー
  @Prop() private members!: string[][];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

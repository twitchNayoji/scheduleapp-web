<template>
  <b-container>
    <b-row>
      <b-col ></b-col>
      <b-col class="border border-white">日</b-col>
      <b-col class="border border-white">月</b-col>
      <b-col class="border border-white">火</b-col>
      <b-col class="border border-white">水</b-col>
      <b-col class="border border-white">木</b-col>
      <b-col class="border border-white">金</b-col>
      <b-col class="border border-white">土</b-col>
    </b-row>
    <b-row>
      <b-col class="border border-white">日付</b-col>
      <b-col class="border border-white">1日</b-col>
      <b-col class="border border-white">2日</b-col>
      <b-col class="border border-white">3日</b-col>
      <b-col class="border border-white">4日</b-col>
      <b-col class="border border-white">5日</b-col>
      <b-col class="border border-white">6日</b-col>
      <b-col class="border border-white">7日</b-col>
    </b-row>
    <b-row>
      <b-col class="border border-white">午前/午後</b-col>
      <b-col class="border border-white">
        <b-row>
          <b-col class="border border-white" cols="6">なよ</b-col>
          <b-col class="border border-white" cols="6">さち</b-col>
        </b-row>
        <b-row>
          <b-col class="border border-white" cols="6">ああ</b-col>
          <b-col class="border border-white" cols="6">いい</b-col>
        </b-row>
      </b-col>
      <b-col class="border border-white">2日</b-col>
      <b-col class="border border-white">3日</b-col>
      <b-col class="border border-white">4日</b-col>
      <b-col class="border border-white">5日</b-col>
      <b-col class="border border-white">6日</b-col>
      <b-col class="border border-white">7日</b-col>
    </b-row>
  </b-container>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ShiftCalendar extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
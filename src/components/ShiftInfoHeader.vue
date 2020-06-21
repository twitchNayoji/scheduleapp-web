<template>
  <div class="appdefault">
    <b-row>
      <b-col>
        <label for="input-constdaynum">連続勤務日数:</label>
      </b-col>
      <b-col>
        <b-form-input
          id="input-constdaynum"
          v-model="value.maxseq"
          type="number"
          min="0"
          max="31"
          required
          placeholder="入力例：3"
        ></b-form-input>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import ShiftSettingRules from "@/domain/ShiftSettingRules";

@Component
export default class ShiftInfoHeader extends Vue {
  // schedule設定を取得
  @Prop() private value!: ShiftSettingRules;

  @Emit("input")
  getValue() {
    return this.value;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

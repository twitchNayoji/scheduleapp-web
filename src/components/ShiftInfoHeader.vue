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
          placeholder="3"
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
import { Component, Emit, Watch, Prop, Vue } from "vue-property-decorator";

@Component
export default class ShiftInfoHeader extends Vue {
  // schedule設定を取得
  @Prop() private value!: { maxseq: number };

  @Emit("input")
  getValue() {
    console.log("maxseq changedaaaa>?");
    return this.value;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

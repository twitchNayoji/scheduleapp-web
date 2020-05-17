<template>
  <div>
    <b-row>
      <b-col>
        <label for="input-constdaynum">連続勤務日数:</label>
      </b-col>
      <b-col>
        <b-form-input
          id="input-constdaynum"
          v-model="form.maxseq"
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
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ShiftInfoHeader extends Vue {
  //Propは引数的な感じ
  @Prop() private constdaynum!: number;
  form =  {
      maxseq: ""
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

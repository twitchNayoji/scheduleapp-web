<template>
  <div>
    <p v-b-modal="modalid" variant="primary">{{value.name}}</p>

    <b-modal
      ok-only
      hide-header-close
      no-close-on-backdrop
      no-close-on-esc
      header-bg-variant="dark"
      footer-bg-variant="dark"
      header-border-variant="secondary"
      footer-border-variant="secondary"
      :id="modalid"
      size="lg"
      :title="value.name + 'の設定'"
    >
      <b-row>
        <b-col>
          <label for="input-constdaynum">連続勤務日数:</label>
        </b-col>
        <b-col>
          <b-form-input
            id="aa"
            v-model="value.testrulenum"
            type="number"
            min="0"
            max="31"
            required
            placeholder="入力例：3"
          ></b-form-input>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import ShiftSettingMember from "@/domain/ShiftSettingMember";

@Component
export default class ShiftInfoMemberInfo extends Vue {
  //Propは引数的な感じ
  @Prop() private value!: ShiftSettingMember;
  @Prop() private modalid!: string;

  @Emit("input")
  getValue() {
    return this.value;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
<template>
  <b-container>
      <b-row>
        <b-col>
          <h4>{{title}}</h4>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="border border-white pt-3 pb-3 mb-3 rounded-lg">
          <slot></slot>
        </b-col>
      </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TitleFrame extends Vue {
  //Propは引数的な感じ
  @Prop() private title!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
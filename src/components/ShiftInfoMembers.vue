<template>
  <TitleFrame title="メンバー一覧">
    <b-col class="border border-white">
      <form v-on:submit.prevent="addNewMember">
        <label for="new-member">メンバー追加：</label>
        <input v-model="newMemberName" id="new-member" placeholder="Name" />
        <button>Add</button>
      </form>
      <ul id="member-list">
        <li v-for="(item, index) in members" v-bind:key="item.id">
          {{item.name}}
          <b-button size="sm" @click="members.splice(index, 1)">削除</b-button>
        </li>
      </ul>
    </b-col>
  </TitleFrame>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TitleFrame from "@/components/TitleFrame.vue";

@Component({ components: { TitleFrame } })
export default class ShiftInfoMembers extends Vue {
  //Propは引数的な感じ
  @Prop() private inputmembers!: [
    {
      id: number;
      name: string;
    }
  ];
  members = Array<{}>();
  newMemberName = "";
  nextMemberId = 1;
  addNewMember() {
    if (this.newMemberName) {
      // Todo : 同じ名前いたらエラーにする
      this.members.push({
        id: this.nextMemberId++,
        name: this.newMemberName
      });
      this.newMemberName = "";
    }
  }

  created() {
    this.inputmembers.forEach(x => {
      this.members.push({
        id: x.id,
        name: x.name
      });
    });
    //次のIDは最大値取得+1
    this.nextMemberId =
      this.inputmembers.map(x => x.id).reduce((a, b) => (a > b ? a : b)) + 1;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

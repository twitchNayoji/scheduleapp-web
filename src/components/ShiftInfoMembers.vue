<template>
  <TitleFrame title="メンバー一覧">
    <label for="new-member">メンバー追加：</label>
    <input v-model="newMemberName" id="new-member" placeholder="Name" />
    <b-button @click="addNewMember()">Add</b-button>
    <ul id="member-list">
      <li v-for="(item, index) in members" v-bind:key="item.id">
        <b-row>
          <b-col>
            <ShiftInfoMemberInfo :modalid="modalId(index)" v-model="members[index]" />
          </b-col>
          <b-col>
            <b-button size="sm" @click="removeMember(index)">削除</b-button>
          </b-col>
        </b-row>
      </li>
    </ul>
  </TitleFrame>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from "vue-property-decorator";
import TitleFrame from "@/components/TitleFrame.vue";
import ShiftInfoMemberInfo from "@/components/ShiftInfoMemberInfo.vue";
import ShiftSettingMember from "@/domain/ShiftSettingMember";

@Component({ components: { TitleFrame, ShiftInfoMemberInfo } })
export default class ShiftInfoMembers extends Vue {
  //Propは引数的な感じ
  @Prop() private value!: ShiftSettingMember[];

  newMemberName = "";
  members = Array<ShiftSettingMember>();
  getNextMemberId(): number {
    //次のIDは最大値取得+1
    if (this.members.length === 0) {
      return 1;
    }
    return this.members.map(x => x.id).reduce((a, b) => (a > b ? a : b)) + 1;
  }

  removeMember(index: number) {
    this.members.splice(index, 1);
    // Todo：やばい
    this.value.splice(index, 1);
  }

  addNewMember() {
    if (this.newMemberName) {
      // Todo : 同じ名前いたらエラーにする
      // ID重複しないようにしないと
      const addMember = new ShiftSettingMember(
        this.getNextMemberId(),
        this.newMemberName
      );
      this.members.push(addMember);
      // valueにも入れる
      // Todo：やばいpropのメンバーに統一したい。。。
      this.value.push(addMember);
      this.newMemberName = "";
    }
  }

  created() {
    this.value.forEach(x => {
      this.members.push(x);
    });
  }
  modalId(i: number) {
    return "modal" + i;
  }

  @Emit("input")
  getValue() {
    return this.members;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

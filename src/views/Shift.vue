<template>
  <div class="mt-4 mb-4">
    <TitleFrame title="基礎情報">
      <ShiftInfo :test="$route.params.hashid" />
    </TitleFrame>
    <TitleFrame title="カレンダー">
      <ShiftCalendar />
    </TitleFrame>
  </div>
</template>
<script>
import ShiftInfo from "@/components/ShiftInfo.vue";
import ShiftCalendar from "@/components/ShiftCalendar.vue";
import TitleFrame from "@/components/TitleFrame.vue";

export default {
  name: "Shift",
  components: {
    ShiftInfo,
    ShiftCalendar,
    TitleFrame
  }
};
</script>

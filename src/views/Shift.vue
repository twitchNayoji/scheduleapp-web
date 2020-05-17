<template>
  <div class="Shift">
    <ShiftInfo :test = "$route.params.hashid"/>
  </div>
</template>
<script>
import ShiftInfo from '@/components/ShiftInfo.vue'

export default {
  name: 'Shift',
  components: {
    ShiftInfo
  }
}
</script>

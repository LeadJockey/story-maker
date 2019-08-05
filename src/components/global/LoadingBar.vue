<template>
  <div class="comp_progress_bar">
    <div :class="{circle:true, on:isLoading }"></div>
    <span class="percent">{{percent}}%</span>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('loading')

export default {
  name: 'comp-global-loading-bar',
  computed: {
    ...mapGetters(['isLoading', 'percent'])
  }
}
</script>

<style lang="scss" scoped>
.comp_progress_bar {
  position: relative;
  width: 50px;
  height: 50px;
  padding: 5px;
  box-sizing: border-box;
  .circle {
    width: 100%;
    height: 100%;
    border: 2px dashed red;
    border-radius: 50%;
    box-sizing: border-box;
    transition: all .3s ease;
  }
  .on {
    transform: rotate(360deg);
  }
  .percent {
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    margin: 0 auto;
    font-size: 10px;
    line-height: 50px;
  }
}
</style>

<template>
  <div v-if="isLoading" class="comp_progress_bar">
    <div  class="bar"></div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapGetters } = createNamespacedHelpers('loading')

export default {
  name: 'comp-progress-bar',
  computed: {
    ...mapGetters(['isLoading', 'precent'])
  }
}
</script>

<style lang="scss" scoped>
.comp_progress_bar {
  .bar {
    height: 4px;
    width: 100%;
    position: fixed;
    overflow: hidden;
    background-color: $color_divide;
  }
  .bar:before {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #2980b9;
    transition:all .9s cubic-bezier(0, .21, .03, 1.01) 0s;
    transform: translate(-100%, 0);
    animation: loading 1.8s ease-in-out infinite;
    content: '';
  }
}

@keyframes loading {
  from {
    transform: translate(-100%, 0);
  }
  50% {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-100%, 0);
  }
}
</style>

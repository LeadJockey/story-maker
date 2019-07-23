<template>
  <div class="comp_progress_bar">
    <div :class="{'bar':true, 'on':isLoading}"></div>
  </div>
</template>

<script>
export default {
  name: 'comp-progress-bar',
  props:['isLoading'],
  // data() {
  //   return {
  //     isLoading: this.$isLoading
  //   }
  // },
  // watch:{
  //   isLoading:function(newLoading){
  //     return newLoading
  //   }
  // },
  // updated(){
  //   console.log('update', this)
    
  // },
  // mounted(){
  //   console.log('pb',this)
    
  // }
 
}
</script>

<style lang="scss" scoped>
.comp_progress_bar {
  height: 10px;
  background-color: $color_divide;
  .bar {
    height: 100%;
    width: 0%;
    background-color: gold;
    -webkit-transition: width 2s, height 2s, background-color 2s, -webkit-transform 2s;
    transition: width 2s, height 2s, background-color 2s, transform 2s;
  }
  .on {
    width: 100%;
  }
}
</style>

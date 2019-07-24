<template>
  <div>
    <ul>
      <li v-for="({id}, idx) in renderList" class="item" :key="id">
        <input type="checkbox" name="checkboxItem" :id="id" :value="idx" v-model="checkedIdxList" />
        <label :for="id">[{{idx}}] : {{id}}</label>
      </li>
    </ul>
    <button @click="toTop">top</button>
    <hr />
    <button @click="toAbove">above</button>
    <hr />
    <button @click="toBeneath">beneath</button>
    <hr />
    <button @click="toBottom">bottom</button>
     <hr />
    <button @click="toTargetIdx">target</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainItemList: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
      renderList: [],
      checkedIdxList: []
    }
  },
  computed: {
    checkedObject() {
      return this.checkedIdxList.reduce((prev, next) => {
        prev[next] = this.renderList[next]
        return prev
      }, {})
    },
    checkedList() {
      return this.checkedIdxList.reduce((prev, next) => {
        prev = [...prev, this.renderList[next]]
        return prev
      }, [])
    },
    notCheckedList() {
      return this.renderList.filter((renderItem, idx) => !this.checkedObject[idx])
    },
    firstCheckedIdx() {
      return this.checkedIdxList[0]
    },
    lastCheckedIdx() {
      return this.checkedIdxList[this.checkedIdxList.length - 1]
    }
  },
  methods: {
    getRenderList() {
      if (!this.mainItemList) return []
      return [{ id: 'dropAbove' }, ...this.mainItemList, { id: 'dropEvent' }, { id: 'dropBeneath' }]
    },
    toTop() {
      this.renderList = [...this.checkedList, ...this.notCheckedList]
      this.checkedIdxList = []
    },
    toAbove() {
      if (typeof this.firstCheckedIdx === 'undefined') return
      const next = [...this.notCheckedList]
      const prev = next.splice(0, this.firstCheckedIdx - 1)
      this.renderList = [...prev, ...this.checkedList, ...next]
      // this.checkedIdxList = []
    },
    toBeneath() {
      if (typeof this.firstCheckedIdx === 'undefined') return
      const next = [...this.notCheckedList]
      const prev = next.splice(0, this.firstCheckedIdx + 1)
      this.renderList = [...prev, ...this.checkedList, ...next]
      // this.checkedIdxList = []
    },
    toTargetIdx(){
      const idx = parseInt(prompt('insert index'), 10)
      if (typeof idx === 'undefined') return
      const next = [...this.notCheckedList]
      const prev = next.splice(0, idx - 1)
      this.renderList = [...prev, ...this.checkedList, ...next]
      // this.checkedIdxList = []
    },
    toBottom() {
      this.renderList = [...this.notCheckedList, ...this.checkedList]
      // this.checkedIdxList = []
    }
  },
  mounted() {
    this.renderList = this.getRenderList()
  }
}
</script>

<style lang="scss" scoped>
.item {
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  margin-bottom: 5px;
  border-bottom: 1px solid #efefef;
}
button {
  width: 200px;
  height: 50px;
  background-color: gold;
  line-height: 50px;
}
</style>
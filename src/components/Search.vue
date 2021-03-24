<template>
  <div class="search">
    <input type="text" v-model="value" placeholder="Найти...">
    <button>Найти</button>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'

export default {
  name: 'Search',
  data() {
    return {
      value: ''
    }
  },
  computed: {
    ...mapGetters([
      'searchStringGetter'
    ])
  },
  methods: {
    ...mapMutations([
      'setSearchString',
    ])
  },
  watch: {
    value: function(value) {
      this.setSearchString(value)
    }
  }
}
</script>

<style lang="scss">
.search {
  margin-bottom: 5px;
}
</style>
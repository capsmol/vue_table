<template>
  <div class="big-data">
    <Search />
    <Table sizeData="big" />
  </div>
</template>

<script>
import Table from '../components/Table'
import Search from '../components/Search'

export default {
  name: 'BigData',
  components: {
    Table,
    Search
  },
  
}
</script>

<style lang="scss">

</style>
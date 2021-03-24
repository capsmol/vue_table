<template>
  <div class="small-data">
    <Search />
    <Table sizeData="small" />
  </div>
</template>

<script>
import Table from '../components/Table'
import Search from '../components/Search'

export default {
  name: 'SmallData',
  components: {
    Table,
    Search
  }
}
</script>

<style lang="scss">
  .small-data {

  }
</style>

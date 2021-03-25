<template>
  <div class="small-data">
    <AddForm />
    <Search />
    <Table sizeData="small" />
  </div>
</template>

<script>
import Table from '../components/Table'
import Search from '../components/Search'
import AddForm from '../components/AddForm'

export default {
  name: 'SmallData',
  components: {
    Table,
    Search,
    AddForm
  }
}
</script>

<style lang="scss">
  .small-data {

  }
</style>

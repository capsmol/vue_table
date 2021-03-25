<template>
  <div class="big-data">
    <AddForm />
    <Search />
    <Table sizeData="big" />
  </div>
</template>

<script>
import Table from '../components/Table'
import Search from '../components/Search'
import AddForm from '../components/AddForm'

export default {
  name: 'BigData',
  components: {
    Table,
    Search,
    AddForm
  },
  
}
</script>

<style lang="scss">

</style>
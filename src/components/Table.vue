<template>
  <div class="table-container">
    <Spinner v-if="loadingStatusGetter" />
    <template v-if="!loadingStatusGetter">
      <table class="table">
        <thead>
          <tr>
            <th
              @click="sortById">
              id
              <i v-if="sortingStatus === 'increaseId'" class="material-icons">expand_more</i>
              <i v-else-if="sortingStatus === 'decreaseId'" class="material-icons">expand_less</i>
              <i v-else class="material-icons">unfold_more</i>
            </th>
            <th
              @click="sortByFirstName">
              firstName
              <i v-if="sortingStatus === 'increaseFirst'" class="material-icons">expand_more</i>
              <i v-else-if="sortingStatus === 'decreaseFirst'" class="material-icons">expand_less</i>
              <i v-else class="material-icons">unfold_more</i>
            </th>
            <th
              @click="sortByLastName">
              lastName
              <i v-if="sortingStatus === 'increaseLast'" class="material-icons">expand_more</i>
              <i v-else-if="sortingStatus === 'decreaseLast'" class="material-icons">expand_less</i>
              <i v-else class="material-icons">unfold_more</i>
            </th>
            <th
              @click="sortByEmail">
              email
              <i v-if="sortingStatus === 'increaseEmail'" class="material-icons">expand_more</i>
              <i v-else-if="sortingStatus === 'decreaseEmail'" class="material-icons">expand_less</i>
              <i v-else class="material-icons">unfold_more</i>
            </th>
            <th
              @click="sortByPhone">
              phone
              <i v-if="sortingStatus === 'increasePhone'" class="material-icons">expand_more</i>
              <i v-else-if="sortingStatus === 'decreasePhone'" class="material-icons">expand_less</i>
              <i v-else class="material-icons">unfold_more</i>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(user, i) in (searchStringGetter? filterUser(searchStringGetter) : paginatedUsers)"
            :key="i"
            @click="selectUser(i)"
            :class="{'tr-active': i === trNumber}">
            <td>{{user.id}}</td>
            <td>{{user.firstName}}</td>
            <td>{{user.lastName}}</td>
            <td>{{user.email}}</td>
            <td>{{user.phone}}</td>
            </tr>
        </tbody>
      </table>
      <div class="table__pagination" v-if="usersGetter.length > 50">
        <div
          class="page"
          :class="{'page-active': page === pageNumber}"
          v-for="(page, i) in pages"
          :key="i"
          @click="pageClick(page)">
          {{page}}
        </div>
      </div>
    </template>
    <CartUser v-if="showCart" :index="indexUser" />
  </div>
</template>

<script>
import Spinner from './Spinner'
import CartUser from './CartUser'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Table',
  components: {
    Spinner,
    CartUser
  },
  props: {
    sizeData: {
      type: String,
      required: true,
      default: ''
    }
  },
  data() {
    return {
      userPerPage: 50,
      pageNumber: 1,
      trNumber: undefined,
      reverse: false,
      sortingStatus: '',
      showCart: false,
      indexUser: 0

    }
  },
  computed: {
    ...mapGetters([
      'usersGetter',
      'loadingStatusGetter',
      'userForCartGetter',
      'filterUser',
      'searchStringGetter',
      'filterUserMap'
    ]),
    pages() {
      return Math.ceil(this.usersGetter.length / 50)
    },
    paginatedUsers() {
      let start = (this.pageNumber - 1) * this.userPerPage
      let end = start + this.userPerPage
      return this.usersGetter.slice(start, end)
    }

  },
  methods: {
    ...mapActions([
      'getSmallData',
      'getBigData'
    ]),
    pageClick(page) {
      this.pageNumber = page
    },
    sortById() {
      if (!this.reverse) {
        this.usersGetter.sort((a, b) => a.id - b.id)
        this.reverse = !this.reverse
        this.sortingStatus = 'increaseId'
      } else {
        this.usersGetter.sort((a, b) => b.id - a.id)
        this.reverse = !this.reverse
        this.sortingStatus = 'decreaseId'
      }
    },
    sortByFirstName() {
      if (!this.reverse) {
        this.usersGetter.sort((a, b) => a.firstName.localeCompare(b.firstName))
        this.reverse = !this.reverse
        this.sortingStatus = 'increaseFirst'
      } else {
        this.usersGetter.sort((a, b) => b.firstName.localeCompare(a.firstName))
        this.reverse = !this.reverse
        this.sortingStatus = 'decreaseFirst'
      }
      
    },
    sortByLastName() {
      if (!this.reverse) {
        this.usersGetter.sort((a, b) => a.lastName.localeCompare(b.lastName))
        this.reverse = !this.reverse
        this.sortingStatus = 'increaseLast'
      } else {
        this.usersGetter.sort((a, b) => b.lastName.localeCompare(a.lastName))
        this.reverse = !this.reverse
        this.sortingStatus = 'decreaseLast'
      }
    },
    sortByEmail() {
      if (!this.reverse) {
        this.usersGetter.sort((a, b) => a.email.localeCompare(b.email))
        this.reverse = !this.reverse
        this.sortingStatus = 'increaseEmail'
      } else {
        this.usersGetter.sort((a, b) => b.email.localeCompare(a.email))
        this.reverse = !this.reverse
        this.sortingStatus = 'decreaseEmail'
      }
    },
    sortByPhone() {
      if (!this.reverse) {
        this.usersGetter.sort((a, b) => a.phone.localeCompare(b.phone))
        this.reverse = !this.reverse
        this.sortingStatus = 'increasePhone'
      } else {
        this.usersGetter.sort((a, b) => b.phone.localeCompare(a.phone))
        this.reverse = !this.reverse
        this.sortingStatus = 'decreasePhone'
      }
    },
    selectUser(index) {
      this.showCart = true
      this.indexUser = index
      this.trNumber = index
    }
  },
  mounted() {
    if (this.sizeData === 'small') {
      this.getSmallData()
    }
    if (this.sizeData === 'big') {
      this.getBigData()
    }
  }
}
</script>

<style lang="scss">
.table-container {

}

table {
  table-layout: fixed;
  border: 1px solid gray;
  border-collapse: collapse;
  width: 100%;
}
th, td{
  border: 1px solid gray;
}

.table__pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

.page {
  padding: 10px;
  border: 1px solid gray;
  margin-top: 5px;
  margin-right: 5px;
}

.page:hover {
  background: darkgray;
  cursor: pointer;
  color: #fff;

}

.page-active {
  background: darkgray;
  cursor: pointer;
  color: #fff;
}

th {
  cursor: pointer;
}
tr:hover {
  cursor: pointer;
  background: darkgray;
  color: #fff;
}

.tr-active {
  cursor: pointer;
  background: darkgray;
  color: #fff;
}
</style>
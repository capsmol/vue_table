<template>
  <div class="cart-user">
    <h4>Выбран пользователь <b>{{fullName}}</b></h4>
    <span>Описание:</span>
    <textarea v-model="description">
    </textarea>
    <span>Адрес проживания: <b>{{user.address.streetAddress}}</b></span>
    <span>Город: <b>{{user.address.city}}</b></span>
    <span>Провинция/штат: <b>{{user.address.state}}</b></span>
    <span>Индекс: <b>{{user.address.zip}}</b></span>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'CartUser',
  props: {
    index: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data() {
    return {
      description: ''
    }
  },
  computed: {
    ...mapGetters([
      'userForCartGetter'
    ]),
    user() {
      return this.userForCartGetter(this.index)
    },
    fullName() {
      return this.user.firstName + ' ' + this.user.lastName
    },
  },
  mounted() {
    this.description = this.user.description
  },
  updated() {
    this.description = this.user.description
  }

}
</script>

<style lang="scss">
.cart-user {
  display: flex;
  flex-direction: column;
  width: 500px;
  border: 1px solid pink;
  background: plum;
  margin-top: 10px;

  textarea {
    background: plum;
    resize: none;
  }
}
</style>
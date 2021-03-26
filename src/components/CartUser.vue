<template>
  <div class="cart-user">
    <h4>Выбран пользователь <b>{{fullName}}</b></h4>
    <span>Описание:</span>
    <textarea v-model="description">
    </textarea>
    <span>Адрес проживания: <b>{{user.address ? user.address.streetAddress : 'Адрес не указан'}}</b></span>
    <span>Город: <b>{{user.address ? user.address.city : 'Город не указан'}}</b></span>
    <span>Провинция/штат: <b>{{user.address ? user.address.state : 'Штат не указан'}}</b></span>
    <span>Индекс: <b>{{user.address ? user.address.zip : 'Индекс не указан'}}</b></span>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'CartUser',
  props: {
    user: {
      type: Object,
      required: true,
      default() {
        return {}
      }
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
    fullName() {
      return this.user.firstName + ' ' + this.user.lastName
    },
  },
  mounted() {
    this.description = this.user.description ? this.user.description : 'Описание отсутствует'
  },
  updated() {
    this.description = this.user.description ? this.user.description : 'Описание отсутствует'
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
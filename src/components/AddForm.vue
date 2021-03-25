<template>
  <div class="add-form">
    <button @click="toggleForm">Добавить</button>
    <form
      @submit.prevent="submit"
      class="form">
        <input type="text" placeholder="id" v-model.number="id">
        <input type="text" placeholder="firstName" v-model.trim="firstName">
        <input type="text" placeholder="lastName" v-model.trim="lastName">
        <input type="email" placeholder="email" v-model.trim="email" :class="{invalid: ($v.email.$dirty && $v.email.required) || ($v.email.$dirty && $v.email.email)}">
        <input type="tel" placeholder="phone" v-model.trim="phone">
        <button type="submit">Добавить в таблицу</button>
    </form>
  </div>
</template>

<script>
import {email, required} from 'vuelidate/lib/validators'

export default {
  name: 'AddForm',
  data() {
    return {
      showForm: false,
      id: undefined,
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    }
  },
  methods: {
    toggleForm() {
      this.showForm = !this.showForm
    },
    submit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
    }
  },
  validations: {
    id : {},
    firstName: {},
    lastName: {},
    email: {email, required},
    phone: {}
  }
}
</script>

<style lang="scss">
.add-form {

}

.invalid {
  border: 2px solid red;
}
</style>
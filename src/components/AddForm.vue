<template>
  <div class="add-form">
    <button @click="toggleForm">Добавить</button>
    <form
      v-if="showForm"
      @submit.prevent="submit"
      class="form">
        <input type="text" placeholder="id" v-model.number="id" :class="{invalid: ($v.id.$dirty && !$v.id.required) || ($v.id.$dirty && !$v.id.numeric)}">
        <input type="text" placeholder="firstName" v-model.trim="firstName" :class="{invalid: ($v.firstName.$dirty && !$v.firstName.required) || ($v.firstName.$dirty && !$v.firstName.alpha)}">
        <input type="text" placeholder="lastName" v-model.trim="lastName" :class="{invalid: ($v.lastName.$dirty && !$v.lastName.required) || ($v.lastName.$dirty && !$v.lastName.alpha)}">
        <input type="email" placeholder="email" v-model.trim="email" :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}">
        <span>+7</span>
        <input
          type="tel" 
          v-model="phone"
          name="phone"
          id="phone"
          placeholder="(999) 999-9999"
          autocomplete="tel"
          maxlength="14"
          v-phone
          pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}"
          required
          :class="{invalid: ($v.phone.$dirty && !$v.phone.required)}"
        />
        <button v-if="!this.$v.$invalid" type="submit">Добавить в таблицу</button>
        <button v-else disabled="disabled">Добавить в таблицу</button>
    </form>
  </div>
</template>

<script>
import {email, required, numeric, alpha} from 'vuelidate/lib/validators'
import {mapMutations} from 'vuex'

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
    ...mapMutations([
      'addUserToState'
    ]),
    toggleForm() {
      this.showForm = !this.showForm
    },
    submit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      this.addUserToState({
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone
      })
    }
  },
  validations: {
    id : {numeric, required},
    firstName: {alpha, required},
    lastName: {alpha, required},
    email: {email, required},
    phone: {required}
  },
}
</script>

<style lang="scss">
.add-form {

}

.invalid {
  border: 1px solid red;
}
</style>
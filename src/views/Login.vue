<template>
  <v-container class="align-center">
    <v-row class="justify-center white rounded ma-16 pa-16" >
      <v-col>
        <!-- this whole form can be extracted to i.e. LoginComponent.. -->
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :append-icon="marker ? 'mdi-eye-off' : 'mdi-eye'"
            label="Password"
            :type="marker ? 'password' : 'text'"
            @click:append="toggleMarker"
            required
          ></v-text-field>

          <v-alert
            v-show="showError"
            type="error"
          >
            Invalid credentials
          </v-alert>

          <div class="d-flex justify-space-between">
            <v-btn
              class="px-0"
              color="primary"
              plain
              @click="forgetPass"
            >
              Forgot password?
            </v-btn>

            <v-btn
              class=""
              @click="submit"
              color="primary"
              :disabled="!valid || (this.email == '' || this.password == '')"
            >
              LOGIN
            </v-btn>
          </div>
          
             
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data: () => ({
    valid: true,
    email: '',
    password: '',
    marker: true,
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length >= 5 || 'Password must be at least 5 characters',
    ],
    users: [
      {email: 'test@test.com', password: 'test123'},
      {email: 'admin@test.com', password: 'admin'},
    ],
    showError: false
  }),

  methods: {
    ...mapActions([
      'authenticateUser',
    ]),
    toggleMarker () {
      this.marker = !this.marker
    },
    submit() {
      this.showError = false
      const existingUser = this.users.some(user => (user.email === this.email && user.password === this.password));
      if (existingUser) {
        // we can also make this async.. and wait for this action before routing
        this.authenticateUser()
        this.$router.push('/index')
      } else {
        this.showError = true
      }
      
    },
    forgetPass() {
      alert('Forgot passowrd..')
    }
  },
}
</script>


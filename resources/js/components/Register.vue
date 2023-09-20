<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Register</div>
  
            <div class="card-body">
              <form @submit.prevent="register">
                <div class="row mb-3">
                  <label for="name" class="col-md-4 col-form-label text-md-end">Name</label>
                  <div class="col-md-6">
                    <input v-model="name" type="text" class="form-control" name="name" required autofocus>
                  </div>
                </div>
  
                <div class="row mb-3">
                  <label for="email" class="col-md-4 col-form-label text-md-end">Email Address</label>
                  <div class="col-md-6">
                    <input v-model="email" type="email" class="form-control" name="email" required>
                  </div>
                </div>
  
                <div class="row mb-3">
                  <label for="password" class="col-md-4 col-form-label text-md-end">Password</label>
                  <div class="col-md-6">
                    <input v-model="password" type="password" class="form-control" name="password" required>
                  </div>
                </div>
  
                <div class="row mb-3">
                  <label for="password-confirm" class="col-md-4 col-form-label text-md-end">Confirm Password</label>
                  <div class="col-md-6">
                    <input v-model="passwordConfirmation" type="password" class="form-control" name="password_confirmation" required>
                  </div>
                </div>
  
                <div class="row mb-0">
                  <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn btn-primary" :disabled="loading">{{ loading ? 'Registering...' : 'Register' }}</button>
                  </div>
                </div>
  
                <div class="row mt-3">
                  <div class="col-md-8 offset-md-4">
                    <p v-if="registrationError" class="text-danger">{{ registrationError }}</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        loading: false,
        registrationError: '',
      };
    },
    methods: {
      register() {
        this.loading = true;
  
        axios
          .post('/api/register', {
            name: this.name,
            email: this.email,
            password: this.password,
            password_confirmation: this.passwordConfirmation,
          })
          .then((response) => {
            console.log('Registration successfu444444444l');
            localStorage.setItem('authToken', response.data.token);
            this.$router.push('/dashboard');
          })
          .catch((error) => {
            if (error.response && error.response.status === 422) {
              this.registrationError = 'Validation error. Please check your input.';
            } else {
              this.registrationError = 'Registration failed. Please try again later.';
            }
          })
          .finally(() => {
            this.loading = false;
          });
      },
    },
  };
  </script>
  
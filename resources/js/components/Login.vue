<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">{{ 'Login' }}</div>
  
            <div class="card-body">
              <form @submit.prevent="login">
                <div class="row mb-3">
                  <label for="email" class="col-md-4 col-form-label text-md-end">{{ 'Email Address' }}</label>
                  <div class="col-md-6">
                    <input v-model="email" type="email" class="form-control" name="email" required autofocus>
                  </div>
                </div>
  
                <div class="row mb-3">
                  <label for="password" class="col-md-4 col-form-label text-md-end">{{ 'Password' }}</label>
                  <div class="col-md-6">
                    <input v-model="password" type="password" class="form-control" name="password" required>
                  </div>
                </div>
  
                <div class="row mb-3">
                  <div class="col-md-6 offset-md-4">
                    <div class="form-check">
                      <input v-model="remember" class="form-check-input" type="checkbox" name="remember" id="remember">
                      <label class="form-check-label" for="remember">{{ 'Remember Me' }}</label>
                    </div>
                  </div>
                </div>
  
                <div class="row mb-0">
                  <div class="col-md-8 offset-md-4">
                    <button type="submit" class="btn btn-primary" :disabled="loading">{{ loading ? 'Logging in...' : 'Login' }}</button>
                  </div>
                </div>
  
                <div class="row mt-3">
                  <div class="col-md-8 offset-md-4">
                    <p v-if="loginError" class="text-danger">{{ loginError }}</p>
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
        email: '',
        password: '',
        remember: false,
        loading: false, // Add loading indicator
        loginError: '', // Add login error message
      };
    },
    methods: {
      login() {
        this.loading = true; // Start loading
  
        axios
          .post('/api/login', {
            email: this.email,
            password: this.password,
            remember: this.remember,
          })
          .then((response) => {
            localStorage.setItem('authToken', response.data.token);
            this.$router.push('/dashboard');
          })
          .catch((error) => {
            this.loginError = 'Invalid credentials. Please try again.'; // Set login error message
          })
          .finally(() => {
            this.loading = false; // Stop loading
          });
      },
    },
  };
  </script>
  
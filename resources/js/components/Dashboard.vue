<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">{{ 'Dashboard' }}</div>
  
            <div class="card-body">
              <div class="container">
                <h4 style="text-align: center;">You are logged in successfully!</h4>
                <div class="row">
                  <div class="col-md-6">
                    <router-link to="/companies" class="btn btn-primary">Companies</router-link>
                  </div>
                  <div class="col-md-6">
                    <router-link to="/employees" class="btn btn-primary" style="float: right;">Employees</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        status: '', // Initialize status with an empty string
      };
    },
    created() {
      // You can fetch the status from an API or set it as needed
      this.status = 'Your are logged in successfully!';
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  
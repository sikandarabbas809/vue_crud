<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Example Component</div>
  
            <div class="card-body">
              <p>Hello, this is an example Vue.js component.</p>
              <p>{{ message }}</p>
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
        message: "Welcome to this Vue.js component!",
      };
    },
  };
  </script>
  
  <style scoped>
  /* Component-specific styles go here */
  </style>
  
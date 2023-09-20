<template>
    <div class="container">
      <div class="card">
        <h1>Add Company</h1>
        <form @submit.prevent="createCompany">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" v-model="company.name" id="name" class="form-control" required>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" v-model="company.email" id="email" class="form-control" required>
          </div>

          <div class="form-group">
            <label for="logo">Logo</label>
            <input type="file" @change="onLogoChange" id="logo" class="form-control-file">
          </div>

          <div class="form-group">
            <label for="website">Website</label>
            <input type="text" v-model="company.website" id="website" class="form-control">
          </div>

          <button type="submit" class="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
   </template>
   
   <script>
    import axios from 'axios';
    export default {
      data() {
        return {
          company: {
            name: '',
            email: '',
            logo: null,
            website: '',
          },
        };
      },
      methods: {
        createCompany() {
          const formData = new FormData();
            formData.append('name', this.company.name);
            formData.append('email', this.company.email);
            formData.append('logo', this.company.logo);
            formData.append('website', this.company.website);

            axios
              .post('/api/companies', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data', // Required for file upload
                },
              })
              .then((response) => {
                // Handle success, e.g., show a success message and redirect to the index page
                console.log('Company created:', response.data);
                this.$router.push({ path: '/companies' }); // Redirect to the index page
              })
              .catch((error) => {
                // Handle errors, e.g., display validation errors or show an error message
                console.error('Error creating company:', error);
              });
        },
        onLogoChange(event) {
          // Update the logo property when a file is selected
          this.company.logo = event.target.files[0];
        },
      },
    };
   </script>
   
   <style scoped>
   /* Your component-specific styles go here */
   </style>
   
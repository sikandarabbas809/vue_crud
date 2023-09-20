<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">{{ 'Edit Company' }}</div>

            <div class="card-body">
              <form @submit.prevent="updateCompany">
                <!-- Company Name -->
                <div class="mb-3">
                  <label for="name" class="form-label">{{ 'Company Name' }}</label>
                  <input v-model="company.name" type="text" class="form-control" id="name" name="name" required>
                </div>

                <!-- Email -->
                <div class="mb-3">
                  <label for="email" class="form-label">{{ 'Email Address' }}</label>
                  <input v-model="company.email" type="email" class="form-control" id="email" name="email" required>
                </div>

                <!-- Logo -->
                <div class="mb-3">
                  <label for="logo" class="form-label">{{ 'Company Logo' }}</label>
                  <input type="file" class="form-control" id="logo" name="logo" accept="image/*">
                </div>

                <!-- Website -->
                <div class="mb-3">
                  <label for="website" class="form-label">{{ 'Website' }}</label>
                  <input v-model="company.website" type="text" class="form-control" id="website" name="website">
                </div>

                <button type="submit" class="btn btn-primary" :disabled="loading">{{ loading ? 'Updating...' : 'Update' }}</button>
              </form>

              <!-- Display update error message -->
              <div class="mt-3" v-if="updateError">
                <p class="text-danger">{{ updateError }}</p>
              </div>
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
        company: {
          name: '',
          email: '',
          website: '',
        },
        loading: false,
        updateError: '',
      };
    },
    created() {
      // Fetch company data for editing
      this.fetchCompanyData();
    },
    methods: {
      fetchCompanyData() {
        // Fetch company data for editing and populate the form fields
        axios
          .get(`/api/companies/${this.$route.params.id}/edit`)
          .then((response) => {
            this.company = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
      },
      updateCompany() {
        this.loading = true;

        // Prepare form data for updating
        let formData = new FormData();
        formData.append('name', this.company.name);
        formData.append('email', this.company.email);
        formData.append('website', this.company.website);
        if (this.$refs.logoInput.files.length > 0) {
          formData.append('logo', this.$refs.logoInput.files[0]);
        }

        axios
          .put(`/api/companies/${this.$route.params.id}`, formData)
          .then(() => {
            this.$router.push({ path: '/companies' });
          })
          .catch((error) => {
            this.updateError = 'Failed to update company. Please try again.';
          })
          .finally(() => {
            this.loading = false;
          });
      },
    },

   };
   </script>
   
   <style scoped>
   /* Your component-specific styles go here */
   </style>
   
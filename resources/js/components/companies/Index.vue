<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <router-link to="/create/company" class="btn btn-success">Add Company</router-link>
          <div class="card-header">{{ 'Companies List' }}</div>
            <div class="card-body">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="company in companies" :key="company.id">
                    <td>{{ company.name }}</td>
                    <td>{{ company.email }}</td>
                    <td>{{ company.website }}</td>
                    <td>
                      <img
                        :src="`/storage/company-logo/${company.logo}`"
                        alt="Company Logo"
                        width="80"
                        height="80"/>
                    </td>
                    <td>
                      <button @click="editCompany(company)" class="btn btn-primary"> Edit</button>
                      <button @click="deleteCompany(company.id)" class="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
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
        companies: [],
      };
    },
    methods: {
    // Fetch the list of companies when the component is mounted
      async fetchData() {
        try {
          const response = await axios.get('/api/companies');
          this.companies = response.data;
        } catch (error) {
          console.error(error);
        }
      },
      // Edit company: Redirect to the edit page
      editCompany(company) {
        // Redirect to the edit page with the company's ID
        this.$router.push(`/companies/${company.id}/edit`);
      },
      // Delete company: Send a request to delete the company
      async deleteCompany(companyId) {
        try {
          // Send a DELETE request to your API to delete the company
          await axios.delete(`/api/companies/${companyId}`);
          // After successful deletion, refresh the list of companies
          this.fetchData();
        } catch (error) {
          console.error(error);
        }
      },
    },
    created() {
      // Fetch the list of companies when the component is created
      this.fetchData();
    },
   };
  </script>
<template>
   <div class="container">
    <div class="card">
      <h1>Add Employee</h1>
      <form @submit.prevent="createEmployee">
        <div class="form-group">
          <label for="first_name">First Name</label>
          <input type="text" v-model="employee.first_name" id="first_name" class="form-control" required>
        </div>

        <div class="form-group">
          <label for="last_name">Last Name</label>
          <input type="text" v-model="employee.last_name" id="last_name" class="form-control" required>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" v-model="employee.email" id="email" class="form-control" required>
        </div>

        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="text" v-model="employee.phone" id="phone" class="form-control" required>
        </div>

        <div class="form-group">
          <label for="company">Company</label>
          <select v-model="employee.company_id" id="company" class="form-control" required>
            <option value="" disabled>Select a company</option>
            <option v-for="company in companies" :key="company.id" :value="company.id">{{ company.name }}</option>
          </select>
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
          employee: {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            company_id: null,
          },
          companies: [],
        };
      },
      methods: {
        createEmployee() {
          axios
            .post('/api/employees', this.employee)
            .then((response) => {
              console.log('Employee created:', response.data);
              this.$router.push({ path: '/employees' }); // Redirect to the employees list
            })
            .catch((error) => {
              console.error('Error creating employee:', error);
            });
        },
        // Fetch the list of companies when the component is mounted
        async fetchCompanies() {
          try {
            const response = await axios.get('/api/companies');
            this.companies = response.data;
          } catch (error) {
            console.error('Error fetching companies:', error);
          }
        },
      },
      created() {
        // Fetch the list of companies when the component is created
        this.fetchCompanies();
      },
    };
   </script>
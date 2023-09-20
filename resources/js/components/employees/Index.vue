<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <router-link to="/create/employee" class="btn btn-success">Add Employee</router-link>
          <div class="card-header">{{ 'Employees List' }}</div>
            <div class="card-body">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Company Name</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="employee in employees" :key="employee.id">
                    <td>{{ employee.company.name }}</td>
                    <td>{{ employee.first_name }}</td>
                    <td>{{ employee.last_name }}</td>
                    <td>{{ employee.email }}</td>
                    <td>{{ employee.phone }}</td>
                    <td>
                      <button @click="editEmployee(employee)" class="btn btn-primary"> Edit</button>
                      <button @click="deleteEmployee(employee.id)" class="btn btn-danger">Delete</button>
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
        employees: [],
      };
    },
    methods: {
    // Fetch the list of employees when the component is mounted
      async fetchData() {
        try {
          const response = await axios.get('/api/employees');
          this.employees = response.data;
        } catch (error) {
          console.error(error);
        }
      },
      // Edit employee: Redirect to the edit page
      editEmployee(employee) {
        // Redirect to the edit page with the employees's ID
        this.$router.push(`/employees/${employee.id}/edit`);
      },
      // Delete employee: Send a request to delete the employee
      async deleteCompany(employeeId) {
        try {
          // Send a DELETE request to your API to delete the employee
          await axios.delete(`/api/employees/${employeeId}`);
          // After successful deletion, refresh the list of employee
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
   
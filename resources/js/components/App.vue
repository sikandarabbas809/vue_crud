<template>
    <main>
        <nav class="navbar navbar-expand-md navbar-light bg-light">
            <div class="container">
                <router-link to="/" class="navbar-brand">
                    {{ appName }}
                </router-link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item" v-if="!isLoggedIn">
                        <router-link to="/login" class="nav-link">Login</router-link>
                    </li>
                    <li class="nav-item" v-if="!isLoggedIn">
                        <router-link to="/register" class="nav-link">Register</router-link>
                    </li>
                    <li class="nav-item dropdown" v-if="isLoggedIn">
                    <a
                        id="navbarDropdown"
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        v-pre
                    >
                        {{ currentUser.name }}
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#" @click="logout">Logout</a>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <div class="py-4">
            <router-view></router-view>
        </div>
    </main>
</template>
 
<script>
export default {
  data() {
    return {
      appName: '',
      isLoggedIn: false,
      currentUser: null,
      registrationEnabled: false, 
    };
  },
  created() {
    this.appName = 'Mini-CRM'; 
    this.checkAuthentication();
  },
  methods: {
    checkAuthentication() {
      this.isLoggedIn = false; 
      this.currentUser = null; 
    },
    logout() {
      this.isLoggedIn = false;
      this.currentUser = null;
      this.$router.push('/login');
    },
  },
};
</script>
<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img :src="require('C:/vueticketing/src/assets/logoB.png')" height="50"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <div v-show="session">
              <li class="nav-item">
              <a class="nav-link" href="#" @click="logout">Logout</a>
            </li>
            </div>
            <div v-show="!session" class="row">
            <li class="nav-item">
              <a class="nav-link" href="#" @click="openLogin" >Login</a>
            </li>
               
            <li class="nav-item">
              <a class="nav-link" href="#" @click="openRegistration">Registration</a>
            </li> 
             </div>                     
          </ul>
        </div>
      </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: "navbar",
  data(){
    return {
      session: false
    }
  },
  methods: {
    openLogin(){
      this.$root.$emit('openLogin', true);
    },
    openRegistration(){
      this.$root.$emit('openRegistration', true);
    },
    logout(){
      localStorage.removeItem('jwt');
      this.session = false;
      this.$root.$emit('logout', false);
    }
  },
    mounted(){
    this.$root.$on('session', data => {
       this.session = data;
    });
  }
};
</script>

<style>
.navbar {
  padding: 0.8rem;
}
.navbar-nav li {
  padding-right: 20px;
}
.nav-link {
  font-size: 1.1em !important;
}
</style>

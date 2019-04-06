<template>
<div class="container-fluid" v-if="!session">
    <div class="row jumbotron">
        <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
            <p class="lead">Welcome, feel free to explore our website but if you want to book a ticket you must be our member.You can make free account by clicking on Sign Up button.Thank you for visiting us and have fun!</p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
            <button type="button" class="btn btn-outline-secondary btn-lg" @click="openRegistration" data-toggle="modal" data-target="#registrationModalForm">Sign Up</button>
        </div>
    </div>

</div>
</template>

<script>
export default {
  name: "jumbotron",
  data(){
      return{
          session: false
      }
  },
  methods: {
      openRegistration(){
      this.$root.$emit('openRegistration', true);
    }
  },
    mounted(){
    this.$root.$on('session', data => {
       this.session = data;
    });
    this.$root.$on('logout', data => {
       this.session = data;
    });
   }
};
</script>

<style>

.jumbotron {
    padding: 1rem;
    border-radius: 0;
}

</style>

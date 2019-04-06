<template>
<mdb-modal class="fade" tabindex="-1" v-if="showModal" @close="showModal = false">
    <!--Content-->
    <div class="form-elegant">
      <!--Header-->
      <mdb-modal-header>        
      <mdb-modal-title tag="h4" class="w-100 dark-grey-text text-center font-weight-bold">Registration Form</mdb-modal-title>          
      </mdb-modal-header>      
      <!--Body-->
      <mdb-modal-body class="modal-body mx-4">       
        <!--Body-->
        <form @submit.prevent="saveUser">
          <span>{{msg}}</span>
          <div class="md-form mb-5">
          <input type="text" id="name" class="form-control validate" placeholder="Name" v-model="user.name">         
        </div>
          <div class="md-form mb-5">
          <input type="text" id="username" class="form-control validate" placeholder="Username" v-model="user.username">         
        </div>
        <div class="md-form mb-5">
          <input type="email" id="email" class="form-control validate" placeholder="Email" v-model="user.email">         
        </div>
        <div class="md-form pb-3">
          <input type="password" id="password" class="form-control validate" placeholder="Password" v-model="user.password">
          <p class="font-small blue-text d-flex justify-content-end">Forgot <a href="#" class="blue-text ml-1">
              Password?</a></p>
        </div>
        <div class="text-center mb-3">
          <mdb-btn type="submit" class="btn purple-gradient btn-block btn-rounded z-depth-1a">Sign Up</mdb-btn>
        </div>
        </form>
        <p class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in
          with:</p>
        <div class="row my-3 d-flex justify-content-center">
          <!--Facebook-->
          <button type="button" class="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i class="fab fa-facebook-f text-center"></i></button>
          <!--Twitter-->
          <button type="button" class="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i class="fab fa-twitter"></i></button>
          <!--Google +-->
          <button type="button" class="btn btn-white btn-rounded z-depth-1a"><i class="fab fa-google-plus-g"></i></button>
        </div>
      </mdb-modal-body>
      <!--Footer-->
      <mdb-modal-footer class="mx-5 pt-3 mb-1">
        <p class="font-small grey-text d-flex justify-content-end">Already a member? <a href="#/" @click="openLogin" class="blue-text ml-1">
            Sign In</a></p>
      </mdb-modal-footer>
    </div>
    <!--/.Content-->
</mdb-modal>
<!-- Modal -->
</template>
 
<script>
import {
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbBtn
} from "mdbvue";
import http from "C:/vueticketing/src/http-user.js";
 
export default {
  name: "add-user",
  components: {
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbBtn
  },
  data() {
    return {
      user: {
        name: "",
        username: "",
        email: "",
        password: ""
      },
      showModal: false,
      msg: ""
    };
  },
  methods: {
    /* eslint-disable no-console */
    saveUser() {
      var data = {
        name: this.user.name,
        username: this.user.username,
        email: this.user.email,
        password: this.user.password
      };
 
      http
        .post("api/auth/signup", data)
        .then(response => {
          if(response.data.success == true){
            console.log("good")
            this.msg = response.data.message;
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    openLogin(){
      this.showModal = false;
      this.$root.$emit('openLogin', true);
    }
    /* eslint-enable no-console */
  },
  mounted(){
    this.$root.$on('openRegistration', data => {
       this.showModal = data;
    });
  }
};
</script>
 
<style>
.submitform {
  max-width: 300px;
  margin: auto;
}
</style>
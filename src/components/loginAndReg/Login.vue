<template>
<mdb-modal class="fade" id="loginModalForm" tabindex="-1" v-if="showModal" @close="showModal = false">
    <!--Content-->
    <div class="form-elegant">
      <!--Header-->
      <mdb-modal-header>
      <mdb-modal-title tag="h4" class="w-100 dark-grey-text text-center font-weight-bold" id="myModalLabel">Sign in</mdb-modal-title>    
      </mdb-modal-header>      
      <!--Body-->
      <mdb-modal-body class="modal-body mx-4">
        <span id="errorMsg">{{msg}}</span>
        <!--Body-->
        <form @submit.prevent="loginUser">
        <div class="md-form mb-5">
          <input type="email" id="email" class="form-control validate" placeholder="Email" v-model="email">         
        </div>
        <div class="md-form pb-3">
          <input type="password" id="Form-pass1" class="form-control validate" placeholder="Password" v-model="password">
          <p class="font-small blue-text d-flex justify-content-end">Forgot <a href="#" class="blue-text ml-1">
              Password?</a></p>
        </div>
        <div class="text-center mb-3">
          <mdb-btn type="submit" class="btn purple-gradient btn-block btn-rounded z-depth-1a">Sign in</mdb-btn>
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
        <p class="font-small grey-text d-flex justify-content-end">Not a member? <a href="#/" @click="openRegistration" class="blue-text ml-1">
            Sign Up</a></p>
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
  name: "login-user",
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
      email: "",
      password: "",
      msg: "",
      showModal: false
    };
  },
  methods: {
    /* eslint-disable no-console */
    loginUser() {
      var data = {
        usernameOrEmail: this.email,
        password: this.password
      }
      http
        .post("api/auth/signin", data)
        .then(response => {
          if (response.status === 200) {
          localStorage.setItem("jwt", response.data.accessToken);
          this.showModal = false;
          this.$root.$emit('session', true);
          }
        })
        .catch(e => {
          this.msg = "Wrong Email or Password, Please try again.";
          console.log(e);
        });
    },
    openRegistration(){
      this.showModal = false;
      this.$root.$emit('openRegistration', true);
    }
    /* eslint-enable no-console */
  },
  mounted(){
    this.$root.$on('openLogin', data => {
       this.showModal = data;
    });
  }
};
</script>
 
<style>
.form-elegant .font-small {
    font-size: 0.8rem; }

.form-elegant .z-depth-1a {
    -webkit-box-shadow: 0 2px 4px 0 #6648b1, 0 4px 12px 0 #6648b1;
    box-shadow: 0 2px 4px 0 #6648b1, 0 4px 12px 0 #6648b1; }
    

.form-elegant .z-depth-1-half,
.form-elegant .btn:hover {
    -webkit-box-shadow: 0 3px 8px 0 #6648b1, 0 4px 15px 0 #6648b1;
    box-shadow: 0 3px 8px 0 #6648b1, 0 4px 15px 0 #6648b1; }

.form-elegant .modal-header {
    border-bottom: none; }

.modal-dialog .form-elegant .btn .fab {
    color: #6648b1!important; }

.form-elegant .modal-body, .form-elegant .modal-footer {
    font-weight: 400; }

#errorMsg {
  color: red;
}
</style>
<template>
  <div class="container-fluid padding" v-if="show == 3">
    <div class="m-auto col-sm-10 col-md-8 col-lg-6 text-center">
    <div v-if="sentFeedback">
      <h3>Feedback successfully sent.Thank you {{username}}!</h3>
      <input type="button" class="btn btn-outline-secondary btn-lg" @click="sentFeedback = false" value="Back"/>
    </div>
    <form v-else @submit.prevent="submitFeedback">
      <h3>Leave Feedback</h3>
      <div class="form-group">
        <p>Rating</p>
        <vue-stars v-model="rating"></vue-stars>
      </div>
      <div class="form-group purple-border">
        <mdb-textarea type="text" label="Feedback text..." v-model="feedbackText"/>
      </div>
      <div class="form-group">
        <input type="submit" class="btn btn-outline-secondary btn-lg" value="Send Feedback">
      </div>
    </form>
    </div>
    <hr class="my-4">
  </div>
</template>

<script>
import http from "C:/vueticketing/src/http-user.js";
import { mdbTextarea } from "mdbvue";
import { VueStars } from "vue-stars";

export default {
  name: "feedback",
  components: {
    mdbTextarea,
    VueStars
  },
  data() {
    return {
      feedbackText: "",
      rating: 0,
      sentFeedback: false,
      username: ''
    }
  },
  props: { show: Number },
  methods: {
    submitFeedback: function() {
      if(localStorage.getItem("jwt") === null){
        alert("You need to login to view this content. Please Login. Not a Member? Join Us.")
      }
      else {
      var data = {
        feedbackText: this.feedbackText,
        rating: this.rating
      };
      http
        .post("api/feedback/", data, {
          headers: {
          "Authorization": "Bearer " + localStorage.getItem("jwt")
        }
        })
        .then(response => {
          // eslint-disable-next-line
          console.log(response.data)
          this.sentFeedback = true;
          this.username = response.data
          return true;
        })
      }
    }
  }
};



</script>
<style>
.vue-stars label {
  width: 3.2rem;
  cursor: pointer;
  transform: scale(1.5);
}
</style>


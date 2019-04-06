<template>
  <div class="container-fluid padding" ref="projection" v-if="show == 2">
      <vue-good-wizard ref="wizard" :steps="steps" :onNext="nextClicked" :onBack="backClicked">
        <div slot="page1">
          <pageOne @choose-movie="chooseMovie"></pageOne>
        </div>
        <div slot="page2">
          <pageTwo :projection="projection" :movie="movie" :duration="duration" @submit-customer-form="submitCustomerForm"></pageTwo>
        </div>
        <div slot="page3">
          <pageThree :msg="msg"></pageThree>
        </div>
      </vue-good-wizard>
  </div>
</template><script>
import http from  "/vueticketing/src/http-user.js";
import { GoodWizard } from "vue-good-wizard";
import pageOne from "../components/reservationPages/PageOne.vue";
import pageTwo from "../components/reservationPages/PageTwo.vue";
import pageThree from "../components/reservationPages/PageThree.vue";

export default {
  name: "projection-list",
  components: {
    "vue-good-wizard": GoodWizard,
    pageOne,
    pageTwo,
    pageThree
  },
  props: {show: Number},
  data() {
    return {
      steps: [
        {
          label: "Select Projection",
          slot: "page1"
        },
        {
          label: "Reservation",
          slot: "page2"
        },
        {
          label: "Review information",
          slot: "page3"
        }
      ],
      projection: {},
      movie: "",
      duration: "",
      msg: ""
    };
  },
  methods: {
    submitCustomerForm: function(data) {
      http
        .post("api/reservation/", data, {
          headers: {
          "Authorization": "Bearer " + localStorage.getItem("jwt")
        }
        })
        .then(response => {
          response.preventDefault;
          this.msg = response.data;
          this.$refs.wizard.goNext();
          return true;
        })
        .catch(e => {
          e.preventDefault;
          return false;
        });
    },
    nextClicked() {
      return true;
    },
    backClicked() {
      return true;
    },
    chooseMovie(data) {
      this.projection = data.projection;
      this.movie = data.movie;
      this.duration = data.duration;
      this.$refs.wizard.goNext();
    }
  }
};
</script><style>
.list {
  text-align: left;
}

.bold {
  font-weight: bold;
}

.time {
  position: absolute;
  left: -115px;
}

.timeline-wrapper {
  padding-left: 80px;
  min-width: 400px;
  font-family: "Helvetica";
  font-size: 14px;
}

.StepProgress {
  position: relative;
  padding-left: 45px;
  list-style: none;

  -webkit-transition: 2s;
  /* For Safari 3.1 to 6.0 */
  transition: 2s;
}

.StepProgress::before {
  display: inline-block;
  content: "";
  position: absolute;
  top: 0;
  left: 85px;
  width: 52px;
  height: 100%;
  border-left: 2px solid #ccc;
}

.StepProgress-item {
  position: relative;
  counter-increment: list;
}

.StepProgress-item:not(:last-child) {
  padding-bottom: 20px;
}

.StepProgress-item::before {
  display: inline-block;
  content: "";
  position: absolute;
  left: 40px;
  height: 100%;
  width: 10px;
}

.StepProgress-item::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
  left: 33px;
  width: 12px;
  height: 12px;
  border: 2px solid #ccc;
  border-radius: 50%;
  background-color: #fff;
}

.StepProgress-item.is-done::before {
  border-left: 2px solid green;
}

.StepProgress-item.is-done::after {
  /*content: "?";*/
  font-size: 10px;
  color: #fff;
  text-align: center;
  border: 2px solid green;
  background-color: green;
}

.StepProgress strong {
  display: block;
}
</style>
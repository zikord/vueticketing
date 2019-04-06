<template>
<div>
    <navbar></navbar>
    <login></login>
    <registration></registration>
    <carousel :show="show" @clicked="goto"></carousel>
    <jumbotron></jumbotron>
    <welcome></welcome>
    <three-column :rShow="show" @clicked="onClick"></three-column>
    <movies  :show="show"></movies>
    <projection :show="show"></projection>
    <feedback :show="show"></feedback>
    <top-movies></top-movies>
    <two-column></two-column>
    <connect></connect>
    <page-footer></page-footer>
    </div>
</template>


<script>
import carousel from "../components/homeComponents/carousel.vue"
import jumbotron from "../components/homeComponents/jumbotron.vue"
import welcome from "../components/homeComponents/welcomeSection.vue"
import threeColumn from "../components/homeComponents/threeColumnSection.vue"
import twoColumn from "../components/homeComponents/twoColumnSection.vue"
import topMovies from "../components/homeComponents/popularMovies.vue"
import connect from "../components/homeComponents/connect.vue"
import navbar from "../components/homeComponents/navbar.vue"
import pageFooter from "../components/homeComponents/footer.vue"
import login from "../components/loginAndReg/Login.vue"
import registration from "../components/loginAndReg/AddUser.vue"
import projection from "../components/searchProjections.vue"
import movies from "../components/homeComponents/movies.vue"
import feedback from "../components/homeComponents/Feedback.vue"

export default {
  name: "home",
  components: {
      carousel,
      jumbotron,
      welcome,
      threeColumn,
      twoColumn,
      topMovies,
      connect,
      navbar,
      pageFooter,
      login,
      registration,
      projection,
      movies,
      feedback
  },
  data() {
    return {
    show: 0,
    showModal: false,
    session: false
    }
  },
  methods: {
    onClick(value) {
      this.show = value;
    },
    goto(value) {
      this.show = value;
    }
  }
};
</script>
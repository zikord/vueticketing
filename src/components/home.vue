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
import carousel from "../components/homeComponents/Carousel.vue"
import jumbotron from "../components/homeComponents/Jumbotron.vue"
import welcome from "../components/homeComponents/WelcomeSection.vue"
import threeColumn from "../components/homeComponents/ThreeColumnSection.vue"
import twoColumn from "../components/homeComponents/TwoColumnSection.vue"
import topMovies from "../components/homeComponents/PopularMovies.vue"
import connect from "../components/homeComponents/Connect.vue"
import navbar from "../components/homeComponents/Navbar.vue"
import pageFooter from "../components/homeComponents/Footer.vue"
import login from "../components/loginAndReg/Login.vue"
import registration from "../components/loginAndReg/AddUser.vue"
import projection from "../components/SearchProjections.vue"
import movies from "../components/homeComponents/Movies.vue"
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
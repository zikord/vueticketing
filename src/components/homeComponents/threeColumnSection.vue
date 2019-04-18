<template>
<div class="container-fluid padding">
    <div class="row text-center padding" ref="goto">
        <div class="col-xs-12 col-sm-6 col-md-4">
            <a href="#/" @click="open(rShow != 1 ? 1 : 0)"><mdb-icon icon="film" class="deep-purple-text"/></a>
            <h3 class="deep-purple-text">Movies</h3>
            <p>Read and learn everything about hit movies.</p>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4">
            <a href="#/" @click="open(rShow != 2 ? 2 : 0)"><mdb-icon icon="video" class="deep-purple-text"/></a>
            <h3 class="deep-purple-text">Projections</h3>
            <p>Select projection you like and book ticket in just a couple of clicks.</p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4">
            <a  href="#/" @click="open(rShow != 3 ? 3 : 0)"><mdb-icon icon="comment-alt" class="deep-purple-text"/></a>
            <h3 class="deep-purple-text">Feedback</h3>
            <p>Leave your opinion about us, good or bad we are happy to hear all your thoughts.</p>
        </div>
    </div>
    <hr class="my-3">
</div>
</template>

<script>
import { mdbIcon } from 'mdbvue';

export default {
  name: "three-column-section",
  components:{
      mdbIcon
  },
  props: {rShow: Number},
  methods: {
    open(event){
      this.$emit('clicked', event);
    }
  },
  mounted(){
        this.$root.$on('goto',(value) => {
        window.scrollTo(0, this.$refs["goto"].offsetTop);
        this.open(value);
    });
  }
};
</script>

<style>
.fa-film,.fa-video,.fa-comment-alt{
    font-size: 4em;
    margin: 1rem;
}
</style>

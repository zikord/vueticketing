<template>
  <div class="container-fluid padding movies" ref="movies" v-if="show == 1">
    <div class="row padding">
      <div class="col-lg-6">
         <div class="md-form active-purple active-purple-2 col-sm-10 mb-3">
          <input class="form-control" type="text" placeholder="Search Movie" aria-label="Search" @keyup.enter="searchHandler">
        </div>
        <h2>{{movie.Title}}</h2>
        <p>
          {{movie.Plot}}
        </p>
        <p> <strong>Genre:</strong> {{movie.Genre}}</p>
        <p> <strong>Written by:</strong> {{movie.Writer}}</p>
        <p><strong>Directed by:</strong> {{movie.Director}}</p>
        <p><strong>Starring:</strong></p>
        <ul class="list-inline">
          <li class="list-inline-item" v-for="(actor, index) in movie.Actors" :key="index">
            {{actor}}</li>
          </ul>
          <p><strong>Release Date:</strong> {{movie.Released}}</p>
        <br>
        <button href="#" class="btn btn-outline-secondary" @click="toggleTrailer">Watch Trailer</button>
      </div>
      <div class="col-lg-6">
          <iframe v-if="toggle == true" width="500" height="400"
          :src="'https://www.youtube.com/embed?listType=search&list=' + movie.Title + 'trailer'">
        </iframe>
        <img v-else :src="movie.Poster" @load="imgLoaded" v-show="showImg" class="img-fluid" :alt="'No image available for ' + movie.Title">
      </div>     
    </div>
    <hr class="my-4">
  </div>
</template>

<script>
const key = '2fb7569a';
const defaultTitle = 'Once Upon a Time in Hollywood';
const url = `https://www.omdbapi.com/?apikey=${key}&t=`;

export default {
  name: "movies",
  props: {show: Number},
  data() {
    return {
    showImg: false,
    movie: {},
    error: false,
    toggle: false,
    title: ''
    }
  }, 
  methods: {
    imgLoaded: function() {
      this.showImg = true;
    },
    findMovie: function(title) {
      this.error = false;
      this.toggle = false;   
      fetch(url + title).then(res => res.json()).then(data => {
          this.movie = data;
        // eslint-disable-next-line
        console.log(this.movie);
          if (this.movie.Actors) this.movie.Actors = data.Actors.split(', ');
          if (this.movie.Error) this.error = true;       
      }).catch(err => {
        // eslint-disable-next-line
        console.log(err);
        this.error = true;
      });
    },   
    searchHandler(e) {
      if (e.target.value) {
        this.findMovie(e.target.value);
        e.target.blur();
      }
    },
    toggleTrailer(){
      this.toggle = !this.toggle;
      this.title = this.movie.Title;
    }
  },
  mounted() {
    this.findMovie(defaultTitle);
  }
};
</script>

<style>
.img-fluid {
  width: 50%;
}
.active-purple-2 input[type=text]:focus:not([readonly]) {
    border-bottom: 1px solid #ce93d8;
    box-shadow: 0 1px 0 0 #ce93d8;
  }
  .active-purple input[type=text] {
    border-bottom: 1px solid #ce93d8;
    box-shadow: 0 1px 0 0 #ce93d8;
  }
</style>

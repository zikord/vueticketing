<template>
  <div>
    <div class="container-fluid padding">
      <div class="row welcome text-center">
        <div class="col-12">
          <h1 class="dispaly-4">Top Rated Movies</h1>
        </div>
        <hr>
      </div>
    </div>
    <div class="container-fluid padding">
        <div class="row padding">
            <div class="col-md-4" v-for="(movie, index) in movies" :key="index">
                <div class="card">
                    <img class="card-img-top" :src="movie.poster" width="200" height="600">
                    <div class="card-body">
                        <h4 class="card-title">{{movie.title}}></h4>
                        <p>Movie Info</p>
                        <a href="#" class="btn btn-outline-secondary">More Info</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import http from "/vueticketing/src/http-user.js";

export default {
  name: "popular-actors",
  data(){
    return {
      movies: []
    }
  },
   methods: {
    topMovies() {
      http
        .get(
          "api/movie/top/")
        .then(response => {
          this.movies = response.data; // JSON are parsed automatically.
          // eslint-disable-next-line 
          console.log(response.data);
        });
    }
},
    mounted(){
      this.topMovies();
    }
}
</script>
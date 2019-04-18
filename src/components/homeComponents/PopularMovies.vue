<template>
  <div>
    <div class="container-fluid padding">
      <div class="row welcome text-center">
        <div class="col-12">
          <h1 class="dispaly-4">Popular Movies</h1>
        </div>
        <hr>
      </div>
    </div>
    <div class="container-fluid padding">
      <div class="text-center">
        <input type="button" class="btn btn-link page btn-lg" value="1" @click="setPage(0)"/>
        <input type="button" class="btn btn-link page btn-lg" value="2" @click="setPage(1)"/>
        <input type="button" class="btn btn-link page btn-lg" value="3" @click="setPage(2)"/>
      </div>
        <div class="row padding">
            <div class="col-md-4" v-for="(movie, index) in movies" :key="index">
                <div class="card">                
                    <div class="card-body">
                      <div v-if="isOpenIndex === index" class="infoCard">
                        <h2 class="text-center">{{movie.title}}</h2><br>            
                        <p><strong>Genre: </strong>{{movie.genre}}</p>
                        <p><strong>Duration: </strong>{{movie.duration}}</p>
                        <p><strong>Description: </strong>{{movie.description}}</p>
                        <p><strong>Date of release: </strong>{{movie.dateOfRelease}}</p>
                      </div>
                      <div v-else>
                      <img class="card-img-top" :src="movie.poster" height="500">
                      <h4 class="card-title">{{movie.title}}</h4>
                      </div>
                        <a href="#/" @click="toggleInfo(index)" class="btn btn-outline-secondary">More Info</a>
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
      movies: [],
      page: 0,
      isOpenIndex: null
    }
  },
   methods: {
    topMovies() {
      http
        .get(
          "api/movie/top/" + this.page)
        .then(response => {
          this.movies = response.data; // JSON are parsed automatically.
          // eslint-disable-next-line 
          console.log(this.movies);
        });
    },
    setPage(value){
      this.page = value;
      this.isOpenIndex = null;
    },
    toggleInfo(index){
      this.isOpenIndex = ( this.isOpenIndex == index ) ? null : index;
    }
},
    mounted(){
      this.topMovies();
    },
    watch: {
      page: function(){
        this.topMovies();
      }
    }
}
</script>
<style>
.card{
  padding: 20px;
  margin: 40px;
}
.infoCard{
  height: 500px;
  padding: 20px;
}
</style>

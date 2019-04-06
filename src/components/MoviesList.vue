<template>
    <div class="list row">
        <div class="col-md-6">
            <h4>Movies List</h4>
            <select v-model="selected" v-on:change="changeRout()">
              <option disabled value="" hidden>Please select movie</option>
                <option v-for="movie in movies" :key="movie.id" :value="movie">  
                        {{movie.title}}                                               
                </option>
            </select>
        </div>
        <div class="col-md-6">
            <router-view @refreshData="refreshList"></router-view>
        </div>
    </div>
</template>
 
<script>
 
export default {
  name: "movie-list",
  data() {
    return {
      movies: [],
      selected: ""
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveMovies() {
      http
        .get("api/movies")
        .then(response => {
          this.movies = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
            changeRout() {
                this.$router.push({ name: "movie-details", params: {movie: this.selected, id: this.selected.id }})
            },
    refreshList() {
      this.retrieveMovies();
    }
    /* eslint-enable no-console */
  },
  mounted() {
    this.retrieveMovies();
  }
};
</script>
 
<style>
.list {
  text-align: left;
  max-width: 450px;
  margin: auto;
}
</style>
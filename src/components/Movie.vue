<template>
  <div v-if="this.movie">
    <h4>Movie</h4>
    <div>
      <label>Title: </label> {{this.movie.title}}
    </div>
    <div>
      <label>Description: </label> {{this.movie.description}}
    </div>
    <div>
      <label>Genre: </label> {{this.movie.genre}}
    </div>
    <div>
      <label>Date of release: </label> {{this.movie.dateOfRelease}}
    </div>
  </div>
  <div v-else>
    <br/>
    <p>Please click on a Movie...</p>
  </div>
</template>
 
<script>
 
export default {
  name: "movie",
  props: ["movie"]
  };
</script>
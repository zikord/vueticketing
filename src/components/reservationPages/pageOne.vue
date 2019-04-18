 <template>
  <div class="container-fluid padding">
    <div> 
      <input v-model="searchQuery" class="search-box" placeholder="Search for projections..."/>
      <p class="date"><date-picker
      v-model="today"
      format="dddd, DD MMM YYYY"
      lang="en"
      :not-before="new Date()"
      v-on:change="retrieveProjections"
    ></date-picker></p>
      <div class="timeline"  v-if="movies != '' ">      
        <div v-for="(movie, index) in filteredList" class="article row" :key="index">
          <div class="col-lg-6">   
          <span class="dot"></span>
          <div class="text-center">
          <h3 class="font-weight-bold">{{ movie.title }}</h3><br>
          </div>          
          <div>
          <span class="font-weight-bold">Time And Dimension: </span>
          <button type="button" class="btn btn-outline-secondary btn-sm dateBtn" v-for="(projection, index) in movie.projections" :key="index" @click="selectMovie(projection, movie.title, movie.duration)">
             {{ projection.projectionTime }} - {{projection.dimension}}</button>
          </div>
          <div>
            <p><span class="font-weight-bold">Duration:</span> {{movie.duration}} min</p>
            <p><span class="font-weight-bold">Genre:</span> {{movie.genre}}</p>
          </div>                     
          <button     
              class="btn btn-outline-secondary btn-sm"
              @click="toggle(index)"
            >Movie info</button>
            <div v-show="isOpenIndex === index">                          
              <br><p><span class="font-weight-bold">Description: </span> {{movie.description}}</p>          
              <p><span class="font-weight-bold">Date of release: </span> {{movie.dateOfRelease}}</p>             
            </div>
            </div>  
            <div class="col-lg-6">
              <img v-bind:src="movie.poster" width="250" height="350">
            </div>                     
        </div>      
      </div>      
      <p v-else>No projections on this date, please pick another date.</p>
    </div>
  </div>
</template>

<script>
import http from "/vueticketing/src/http-user.js";
import moment from "moment";
import DatePicker from "vue2-datepicker";

export default {
  name: "reservation-page-one",
  components: {
    DatePicker
  },
  data() {
    return {
      searchQuery: "",
      moment: moment,
      today: moment(),
      movies: [],
      isOpenIndex: null
    };
  },
  computed: {
    filteredList() {
        return this.movies.filter(movie => {
        return movie.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  },
  methods: {
    retrieveProjections() {
      http
        .get(
          "api/movie/date/" +
            moment(this.today).format("YYYY-MM-DD"))
        .then(response => {
          this.movies = response.data; // JSON are parsed automatically.
          // eslint-disable-next-line 
          console.log(response.data);
        });
      return true;
    },
    toggle: function(index){
        this.isOpenIndex = ( this.isOpenIndex == index ) ? null : index;
    },
    selectMovie: function(projection, movie, duration) {
      if(localStorage.getItem('jwt') == null){
        alert("You need to login to view this content. Please Login. Not a Member? Join Us.")
      }else{
      this.$emit("choose-movie", {projection: projection, movie: movie, duration: duration});
      // eslint-disable-next-line 
      console.log(movie);
      }
    }
  },
  mounted() {
    this.retrieveProjections();
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  width: 100%;
}
.search-box {
  padding: 10px;
  margin: 20px 0;
  border: 1px solid black;
  border-radius: 5px;
}
.timeline {
  position: relative;
  border-left: 1px solid black;
}
.date {
  display: inline-block;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  position: relative;
  left: 15px;
  margin: 15px 0;
}
 .date:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -16px;
  border: 1px solid black;
  width: 14px;
}

.article {
  position: relative;
  left: 20px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
}
.article:hover {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.4);
}
.article-date {
  font-weight: 300;
  font-size: 14px;
}
.dot {
  display: block;
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: grey;
  left: -25.5px;
  top: calc(50% - 5px);
}
.dateBtn {
  margin: 0.5rem;
}
</style>



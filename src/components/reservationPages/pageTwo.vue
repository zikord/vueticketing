<template>
<div class="container-fluid padding text-center">
  <h2>Booking info</h2>
  <div class="row">
    <div class="col-lg-4">           
            <h4>Projection information</h4><br>
            <p>Movie title: {{movie}}</p>
            <p>Date: {{moment(projection.projectionDate).format('YYYY-MM-DD')}}</p>
            <p>Time: {{moment(projection.projectionDate).format('LT')}}</p>
            <p>Duration: {{duration}} min</p>
            <p>Hall: {{projection.hall.name}}</p>            
          </div>
          <div class="col-lg-4">
            <h4>Customer information</h4>
            <form v-on:submit.prevent="submitForm"  refs="form">
              <pre>
              First name: <input type="text" name="firstName" v-model="reservationForm.customer.firstName" required/>
              Middle name: <input type="text" name="middleName" v-model="reservationForm.customer.middleName"/>
              Last name: <input type="text" name="lastName" v-model="reservationForm.customer.lastName" required/>
              Email:  <input type="email" name="email" v-model="reservationForm.customer.email" required/>
              Phone number: <input type="text" name="phone" v-model="reservationForm.customer.phone"/>
              Seat number: <span v-text="reservationForm.seatNumber == '' ? 'Please select seat from seat map' : reservationForm.seatNumber"/>
              <input type="submit" class="btn btn-outline-success btn-md" name="submit"/>          
              </pre>
            </form>
            <button class="btn btn-outline-secondary btn-sm" href="#" @click="retrieveSeats(projection.id)">Seat map</button>
          </div>
            <div v-if="toggle" class="col-lg-4">             
              <div class="seatsDiv">
                 <label id="screen"/>
              <div class="btn-group" v-for="(row, index) in projection.hall.seatRow * projection.hall.seatColumn" :key="index">
                      <button :title="row" :id="row" @click="setSeat(row)" v-bind:class="[isExist(row) ? 'buttonOccupiedSeat' : 'buttonFreeSeat']">{{row}}</button>
              </div>
              </div>
              </div>
            </div>
            </div>    
</template>

<script>
import http from "/vueticketing/src/http-user.js";
import moment from "moment";

export default {
  name: "reservation-page-two",
  components: {
  },
  props: {
      projection: Object,
      movie: String,
      duration: Number
  },
  data() {
    return {
        moment: moment,
        reservationForm: {
          customer: {
          firstName: "",
          middleName: "",
          lastName: "",
          email: "",
          phone: ""
          },
          projection:{
          id: ""
          },
          seatNumber: ""
      },
      seats: [],
      toggle: false  
    }
    },
    methods: {
    retrieveSeats(){
      http
      .get("api/reservation/seats/" + this.projection.id, {
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("jwt")
        }
      })
      .then(response => {
        this.seats = response.data;
        this.toggle = !this.toggle;
      })
    },
    isExist : function(data){
      for(var i=0; i < this.seats.length; i++){
        if( this.seats[i].seatNumber == data){
          return true
        }
      }
      return false
    },
    setSeat(data){
      this.reservationForm.seatNumber = data;
    },
    submitForm: function(){
        this.reservationForm.projection.id = this.projection.id
      this.$emit('submit-customer-form', this.reservationForm);
    }
    }
}
</script>

<style>
.buttonFreeSeat {
  width: 50px;
  height: 40px;
  background-image: url("https://www.clipartmax.com/png/small/235-2359839_computer-icons-cinema-clip-art-cinema-seat-icon.png");
  background-size: cover;
  background-color: black;
  cursor: pointer;
}

.buttonOccupiedSeat {
  width: 50px;
  height: 40px;
  background-image: url("https://www.clipartmax.com/png/small/154-1547922_cinema-icon-cinema-chair-icon.png");
  background-size: cover;
  background-color: black;
  pointer-events: none;
}

.seatsDiv {
  width: 60%;
  border: 1;
}

.btn-group:after {
  clear: both;
  display: table;
}

.btn-group button {
  border: 1px solid black;
  color: black;
  float: left;
  line-height: 1em;
  position: relative;
}

#screen {
  width: 100%;
  height: 180px;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrM2ZJ4lSraUhqiq-SuNc7TyL-7jAyw5FJHv50c-rukEsX09g_AA");
  background-size: cover;
  background-color: black;
}
</style>

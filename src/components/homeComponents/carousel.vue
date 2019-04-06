<template>
    <div class="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img :src="require('C:/vueticketing/src/assets/cinema.jpg')">
            <div class="carousel-caption">
                <h1 class="display-2">CINEMA TICKETS</h1>
                <h3>WELCOME</h3>
                <button type="button" @click="goto" class="btn peach-gradient btn-lg">VIEW MOVIES</button>
                <button type="button" @click="goto" class="btn purple-gradient btn-lg">Projections</button>
            </div>            
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "carousel",
  props: {show: Number},
  methods: {
    goto(){
      this.$root.$emit('goto');     
    }
  }
};
</script>

<style>
.carousel-inner img {
    width: 100%;
    height: 615px;
}
.carousel-caption {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.carousel-caption h1 {
    font-size: 500%;
    text-transform: uppercase;
    text-shadow: 1px 1px 15px #000;
}
.carousel-caption h3 {
    font-size: 200%;
    font-weight: 500;
    text-shadow: 1px 1px 10px #000;
    padding-bottom: 1rem;
}
.carousel-indicators{
    cursor: pointer;
}

 @media (max-width: 768px) {
.carousel-inner img {
    height: 450px;
}
.carousel-caption {
    top: 45%;
}
.carousel-caption h1 {
    font-size: 350%;
}
.carousel-caption h3 {
    font-size: 140%;
    font-weight: 400;
    padding-bottom: .2rem;
}
.carousel-caption .btn {
    font-size: 95%;
    padding: 8px 14px;
}
}

@media (max-width: 576px) {
.carousel-inner img {
    height: 300px;
}
.carousel-caption {
    top: 45%;
}
.carousel-caption h1 {
    font-size: 250%;
}
.carousel-caption h3 {
    font-size: 110%;
}
.carousel-caption .btn {
    font-size: 90%;
    padding: 4px 8px;
}
.carousel-indicators {
    display: none;
}
}

</style>
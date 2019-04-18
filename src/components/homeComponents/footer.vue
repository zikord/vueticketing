<template>
    <div>
         <footer>
      <div class="container-fluid padding">
        <div class="row text-center">
          <div class="col-md-4">
            <img :src="require('C:/vueticketing/src/assets/logoW.png')">
            <hr class="light">
            <p><i class="fas fa-phone"></i> 060/000-000</p>
            <p><i class="far fa-envelope-open"></i> zivan.kordulup@gmail.com</p>
            <p><i class="fas fa-map-marker-alt"></i> Street name 007</p>
            <p>Serbia, Belgrade, 11000</p>
          </div>
          <div class="col-md-4">
            <hr class="light">
            <h5>Our hours</h5>
            <hr class="light">
            <p>Monday: 8 am - 23 pm</p>
            <p>Saturday: 10 am - 8 pm</p>
            <p>Sunday: close</p>
          </div>
          <div class="col-md-4">
            <img :src="require('C:/vueticketing/src/assets/logoW.png')">
            <hr class="light">
            <p>About us</p>
            <p>Careers</p>
            <p>Customer Service</p>
            <p>Sitemap</p>
          </div>
          <div class="col-12">
            <hr class="light-100">
            <h5>&copy; Kordulup Zivan</h5>
          </div>
        </div>
      </div>
    </footer>
    </div>
</template>

<script>
export default {
  name: "page-footer"
};
</script>

<style>
footer a {
  color: #d5d5d5;
}

hr.light-100 {
  border-top: 1px solid #d5d5d5;
  width: 100%;
  margin-top: 0.8rem;
  margin-bottom: 1rem;
}
footer {
  background-color: #3f3f3f;
  color: #d5d5d5;
  padding-top: 2rem;
}
</style>

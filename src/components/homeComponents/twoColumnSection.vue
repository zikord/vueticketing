<template>
  <div class="container-fluid padding">
    <div class="row padding" id="locationText">
      <div class="col-lg-2">
        <h2>Location</h2><br>
        <p>
          City: Belgrade<br><br>
          Municipal: Zemun<br><br>
          Code: 11000
        </p>
        <br>
      </div>      
          <div id="map-container-google-1" class="map-container col-lg-10 border ">
            <iframe class="border" src="https://maps.google.com/maps?q=zemun&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0"
              style="border:0" allowfullscreen></iframe>
          </div>     
      </div>
        <hr class="my-4">
  </div>
</template>

<script>
export default {
  name: "two-column"
};
</script>

<style>
#locationText{
  padding: 1rem;
}
.map-container {
  height: 400px;
  width: 800px;
}
.map-container iframe{
height:100%;
width:100%;
}
</style>

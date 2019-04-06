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
            <div class="col-md-4">
                <div class="card">
                    <img class="card-img-top" src="#">
                    <div class="card-body">
                        <h4 class="card-title">Some Actor Name></h4>
                        <p>Some actor info</p>
                        <a href="#" class="btn btn-outline-secondary">More Info</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img class="card-img-top" src="#">
                    <div class="card-body">
                        <h4 class="card-title">Some Actor Name 2></h4>
                        <p>Some actor info</p>
                        <a href="#" class="btn btn-outline-secondary">More Info</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img class="card-img-top" src="#">
                    <div class="card-body">
                        <h4 class="card-title">Some Actor Name 3></h4>
                        <p>Some actor info</p>
                        <a href="#" class="btn btn-outline-secondary">More Info</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popular-actors"
};
</script>
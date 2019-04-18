<template>
<div>
  <hr class="my-4">
<div class="container-fluid padding">
    <div class="row text-center padding">
      <div class="col-12">
        <h2>Connect</h2>
      </div>
      <div class="col-12 social padding">
        <a href="https://sr-rs.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>
        <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://github.com/zikord" target="_blank"><i class="fab fa-github-square"></i></a>
        <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram" ></i></a>
        <a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube" ></i></a>
      </div>
    </div>
</div>
</div>
</template>

<script>
export default {
  name: "connect"
};
</script>

<style>
.social a {
  font-size: 4.5em;
  padding: 3rem;
}
.fa-facebook {
  color: #3b5998;
}
.fa-twitter {
  color: #00aced;
}
.fa-github-square {
  color: #dd4b39;
}
.fa-instagram {
  color: #517fa8;
}
.fa-youtube {
  color: #bb0000;
}
.fa-facebook:hover,.fa-github-square:hover,.fa-instagram:hover,.fa-twitter:hover,.fa-youtube:hover {
 color: #d5d5d5;
}

@media (max-width: 992px) {
  .social a {
  font-size: 4em;
  padding: 2rem;
  }
}

@media (max-width: 768px) {
  .social a {
  font-size: 2.5em;
  padding: 1.2rem;
  }
  .display-4 {
    font-size: 200%;
  }
}
@media (max-width: 576px) {
  .social a {
  font-size: 2em;
  padding: .7rem;
  }
  .display-4 {
    font-size: 160%;
  }
}
</style>

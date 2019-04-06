<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "app",
};
</script>
 
<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,700");

html,
body {
  height: 100%;
  width: 100%;
  font-family: "Poppins", sans-serif;
  color: #222;
}

.padding {
  padding-bottom: 2rem;
}

hr.light {
  border-top: 1px solid #d5d5d5;
  width: 75%;
  margin-top: 0.8rem;
  margin-bottom: 1rem;
}

footer a {
  color: #d5d5d5;
}

hr.light-100 {
  border-top: 1px solid #d5d5d5;
  width: 100%;
  margin-top: 0.8rem;
  margin-bottom: 1rem;
}

/*--- Bootstrap Padding Fix --*/
[class*="col-"] {
  padding: 1rem;
}

/*
Extra small (xs) devices (portrait phones, less than 576px)
No media query since this is the default in Bootstrap

Small (sm) devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

Medium (md) devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

Large (lg) devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

Extra (xl) large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }
*/
</style>

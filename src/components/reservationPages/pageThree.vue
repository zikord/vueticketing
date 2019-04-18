<template>
  <div>
    <div>
      <h1>Congratulations</h1>
      <h3>{{msg}}</h3>
      <p><span>Feel free to continue to use our site, if you want you can search for new and actual movies here <a href="#/" @click="goto(1)">link</a></span></p>
      <p><span>Or you can send us a feedback from <a href="#/" @click="goto(3)">here</a></span></p>
      <p><span>Cheers!</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "reservation-page-three",
  props: {
    msg: String
  },
  methods:{
    goto(value){
      this.$root.$emit('goto', value);  
    }
  }
}
</script>

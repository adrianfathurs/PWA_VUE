<template>
  <div>
      <Navbar></Navbar>
      <b-container>
        <router-view/>
      </b-container>
  </div>
  
</template>
<script>
import Navbar from "./components/Navbar"
export default {
  components:{Navbar}
}
</script>
<style>




</style>

<template>
<div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/details">Details</b-nav-item>
      <!-- Navbar dropdowns -->
       <div class="float-end mt-2 mr-md-3 pr-3" >
          <b-form-input size="sm" class="mr-sm-6" placeholder="Search" v-model="search" ></b-form-input>   
       </div>
      </b-navbar-nav>
  </b-navbar>
       <div style="clear:both"></div>
       <div v-show="status">
        <b-alert  show variant="warning" style="text-align:center">Anda Harus Klik Button Terlebih Dahulu</b-alert>
       </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      search:'',
      status:false,
    }
  },
  computed:{
    ...mapGetters({
      appData:"appStore/getAppData"
    })
  },
  watch:{
    search(){
      if(this.appData.length >0){

        this.$store.dispatch("appStore/searchWord",this.search)
        this.status=false;
      }else{
        if(this.search.length <=0){

          this.status=false;
        }else{

          this.status=true;
        }
      }
    }
  }
}
</script>
<style>
  .searchButton{
    float: right;
  }
</style>
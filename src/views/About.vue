<template>
  <div class="about">
    
    
    <b-button variant="primary" @click="tampilData()">Tampilkan Data</b-button>
    <div v-for="item in appSearchData" :key="item.id">
      <p>id : {{item.id}}</p>
      <p>app : {{item.app_name}}</p>
      
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
export default {
  computed:{
    ...mapGetters({
      appData:"appStore/getAppData",
      appSearchData:"appStore/getSearch",
    })
  },
  methods: {
    async tampilData(){
      await this.$store.dispatch("appStore/getAppData");
    }
  },
}
</script>

<template>
  <div>
    <div v-if="appData.length >1">
      {{appData.length}}
    </div>
    <div v-else>
      Tidak Ada
    </div>
    
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters({
      appData:"appStore/getAppData"
    })
  }
}
</script>
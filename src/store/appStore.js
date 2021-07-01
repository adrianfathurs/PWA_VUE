import Vue from 'vue'
import Vuex from 'vuex'
import * as application from '@/services/application'
Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    appData:[],
    search:'',
  },
  mutations: {
    appDataMutate(state,res){
      state.appData=res.data
      console.log(state.appData,"nyampe getters");
    },
    searchWordMutate(state,payload){
      state.search=payload
    }
  },
  getters:{
    getAppData(state){
      
      return state.appData;
    }, 
    getSearch(state){
      return state.appData.filter(app=>app.app_name.toLowerCase().indexOf(state.search.toLowerCase())>-1 || app.id == state.search )
    }
  },
  actions: {
    async getAppData(context){
      var res = await application.getApp();
      context.commit("appDataMutate",res);
    },
    async searchWord(context,payload){
      context.commit("searchWordMutate",payload);
    }
  },
  
})

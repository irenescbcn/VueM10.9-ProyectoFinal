import Vue from 'vue'
import Vuex, { createNamespacedHelpers } from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    users: [],
    albums: [],
    displayUsers:[],
    displayAlbums: [],
    repeatedAlbums: [],
    
    
  }, 
  
  getters:{
    repeatedAlbums(state){
      var originalAlbums = state.albums;
      var filteredAlbums = [];
      var count = 0;
      var start = false;

      for (let j = 0; j < originalAlbums.length; j++){
        for (let k = 0; k < filteredAlbums.length; k++){
          if( originalAlbums[j].albumId == filteredAlbums[k].albumId ){
            start = true;
          }
        }
        count++;
        if(count == 1 && start == false){
          filteredAlbums.push(originalAlbums[j])
        }
        start = false;
        count = 0;
      }
      return filteredAlbums;

    },

    


},

  mutations: {
    SET_USERS(state, users){
      state.users = users
    },
    SET_PICTURES (state, albums){
      state.albums = albums
    },

    countUser(state, item){
      if(state.displayUsers !== []){
        let index = state.displayUsers.findIndex(user => user.user === item);
        console.log(index)
        if(index !== -1 ){
          state.displayUsers[index].cant++;
        }else{
          state.displayUsers.push({user: item, cant:1})
        }
      }else{
        state.displayUsers.push({user: item, cant:1})
      }
      
    },

    countAlbum(state, item){
      if(state.displayAlbums !== []){
        let index = state.displayAlbums.findIndex( album => album.album === item);
        console.log(index)
        if(index !== -1 ){
          state.displayAlbums[index].cant++;
        }else{
          state.displayAlbums.push({album: item, cant:1})
        }
      }else{
        state.displayAlbums.push({album: item, cant:1})
      }
      
    },


  },

  actions: {
    getUsers({commit}){
      axios.get('http://jsonplaceholder.typicode.com/users').then(response => {
        commit('SET_USERS', response.data)
      })
    },

    getPictures({commit}){
      axios.get('http://jsonplaceholder.typicode.com/photos').then(response => {
        commit('SET_PICTURES', response.data)
      })
    },

  

  },
  modules: {
  }
})

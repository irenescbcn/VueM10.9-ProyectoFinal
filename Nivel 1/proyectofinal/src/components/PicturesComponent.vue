<template>
  <div class="picturesComponent">
    <h2>ALBUMS</h2>
    <div class="col">
        <div class="row align-items-center justify-content-center">
            <div class="card"  v-for="(album, index) in newAlbum"  style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Album {{album.albumId}}</h5> 
                    <router-link :to="{name:'PicturesAlbum', path:'/pictures/:albumId', params: { id: album.albumId }, query: {album} }">
                        <button @click="countAlbum(album.albumId)" class="btn userBtn">Check Album</button> 
                    </router-link>
                </div>
            </div>
        </div>
    
    </div>
    
  </div>
</template>

<script>
import Vuex from 'vuex'
import PicturesAlbum from './PicturesAlbum.vue'

export default {
    name: "PicturesComponent",
    components:{
        PicturesAlbum
    },
    data(){
        return{
            //albumsFiltered: repeatedAlbums(),
        }
    },
    computed:{
        ...Vuex.mapState(['albums']),

        ...Vuex.mapGetters({
            newAlbum: 'repeatedAlbums'
        })
    
    
    },
    mounted(){
        this.$store.dispatch("getPictures")
    },
    methods:{
       ...Vuex.mapMutations(['countAlbum'])
    }, 
    
}

</script>

<style lang="scss">
h2{
    margin-top: 20px
}
.card{
    margin: 20px
}

.userBtn{
    background: #F2DCBB;
    color: #AAAAAA;

    &:hover{
        color: #ffffff
    }
}
</style>
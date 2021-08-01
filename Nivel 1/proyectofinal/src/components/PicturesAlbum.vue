<template>

    <div class="picturesAlbum">
        
        <div class="col">
            <div class="row justify-content-center" >
            <h4>Album {{$route.params.id}}</h4>
                <div class="albumPhotos">
                    <img v-for="(photo) in photoAlbum(albums, $route.params.id)" :src="photo.thumbnailUrl" class="img-thumbnail rounded float-left">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Vuex from 'vuex'
export default {
    name: "PicturesAlbum",
    data(){
        return{

        }
    },

    computed:{
        ...Vuex.mapState(['albums']),
    },
    methods:{
        photoAlbum(array, id){
            let photosArray = [];
            for(let item of array){
                if(item.albumId == id){
                    photosArray.push(item)
                }
            }
            return photosArray;
        }

    }
}
</script>

<style>
.albumPhotos{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
</style>

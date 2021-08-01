<template>
    <div class="cardContainer">
        <div class="row align-items-center justify-content-center">
            <div class="card" style="width: 20rem;">
                <div class="card-body">
                    <h5 class="card-title">Users Consulted</h5>
                    <div class="">
                        <ul class="">   
                            <li class="d-flex justify-content-between align-items-center" v-for="(item, index) in displayUsers" :selected="index > 1">{{item.user}}
                            <p>{{item.cant}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card" style="width: 20rem;">
                <div class="card-body">
                    <h5 class="card-title">Pictures Consulted</h5>
                    <div class="">
                        <ul class="">   
                            <li class="d-flex justify-content-between align-items-center" v-for="(item, index) in displayAlbums">Album {{item.album}}
                            <p>{{item.cant}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'

export default {
    namespaced: true,

    computed:{
        users(){
            return this.$store.state.users
        }, 
        ...Vuex.mapState(['displayUsers']),
        ...Vuex.mapState(['displayAlbums']),
        ...Vuex.mapState(['userClicks'])
    },

    mounted(){
        this.$store.dispatch("getUsers")
    },

    methods:{
        ...Vuex.mapMutations(['countUser'])
    }
}
</script>

<style scoped>
.cardContainer{
    height: 100%;
    display: flex;
    justify-content:center
}
.card{
    margin: 10px;
    display: flex;
    align-self:center;
}
.usersConsulted{
    display: flex;
    justify-content: space-between;
    padding: 20px;
}
</style>
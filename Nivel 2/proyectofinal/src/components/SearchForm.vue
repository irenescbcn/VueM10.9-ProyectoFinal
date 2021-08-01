<template>
    <div>
        <div class="input-group rounded ">
            <input type="search" v-model="search" class="form-control rounded" placeholder="Search a User" aria-label="Search"
            aria-describedby="search-addon" />
            <button @click="onSubmit" class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search text-dark"></i>
            </button>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
import store from './../store/index'

export default {
    computed:{
        search:{
            get (){
                return store.state.filter.query;
            },
            set (val){
                store.commit('SET_QUERY', val)
            }
        }, 

        ...Vuex.mapGetters({
            usersFound: 'findUsers'
        }) 
    
    },
    methods:{
        onSubmit(){
            this.$router.push('/viewUsers')
        },   
    }
}
</script>

<style>
.input-group-text{
    background: #BBBBBB;
    cursor: pointer;
}
.input-group-text:hover{
    background: #F2DCBB;
}
</style>
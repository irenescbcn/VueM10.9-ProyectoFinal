<template>
    <div>
        <div class="input-group rounded ">
            <input type="search" v-model="search" class="form-control rounded " placeholder="Search a User" aria-label="Search"
            aria-describedby="search-addon" />
            <button @click="onSubmit(selectUser())" class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search text-dark"></i>
            </button>
        </div>

        <div class="list-group" v-show="showResults()" v-if="usersFound.length > 0">
            <div class="searchResults" v-for="user of usersFound">
                <a @click="onSubmitResult(user.name)" class="list-group-item list-group-item-action">
                {{user.name}}
                </a>  
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'
import store from './../store/index'

export default {
    data(){
        return{
            show: true,  
        }
    },

    computed:{
        search:{
            get (){
                return store.state.filter.query;
            },
            set (val){
                store.commit('SET_QUERY', val)
            }
        }, 
        ...Vuex.mapState(['displayUsers']),
        ...Vuex.mapGetters({
            usersFound: 'findUsers'
        }),
        ...Vuex.mapGetters({
            userSelected: 'selectUser'
        }) 
    },

    methods:{
        selectUser(){
            let result;
            for (let user of this.usersFound){
                if(user.name.toUpperCase().includes(this.search.toUpperCase())){
                    result = user.name;
                    if(this.displayUsers !== []){
                        let index = this.displayUsers.findIndex(user => user.user === result);
                        if(index !== -1 ){
                        this.displayUsers[index].cant++;
                        }else{
                        this.displayUsers.push({user: result, cant:1})
                        }
                    }else{
                        this.displayUsers.push({user: result, cant:1})
                    }    
                }
            }
        }, 

        showResults(){
            for (let user of this.usersFound){
                if(this.search == user.name){
                    this.show = false;
                    break;
                }else{
                    this.show = true;
                } 
            }
            if(this.search == ""){
                    this.show = true;
            }
            return this.show
        },

        onSubmitResult(val){
            this.$router.push('/viewUsers');
            this.search = val;
            this.countUser(val);
        },

        onSubmit(val){
            this.$router.push('/viewUsers');
            
        },

        ...Vuex.mapMutations(['countUser']),
       
    }
}
</script>

<style>
.input-group{
    align-self: flex-end;
}

.searchResults{
    border-radius: 3px
}

.input-group-text{
    background: #BBBBBB;
    cursor: pointer;
}

.input-group-text:hover{
    background: #F2DCBB;
}

.list-group-item{
    color: #AAAAAA !important;
    z-index: 9 !important;
}

.list-group a{
    cursor: pointer
}

.list-group{
    z-index: 9 !important;
    position:fixed;
}
</style>
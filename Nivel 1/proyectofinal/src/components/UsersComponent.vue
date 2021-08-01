<template>
    <div>
    
        <h2>USERS</h2>
    
    <div class="col">
        <div class="row align-items-center justify-content-center">
        
            <div class="card" :user="user" v-for="(user, index) in users" :key="user.id" style="width: 18rem;">
                <div class="card-body" >
                    <h5 class="card-title">{{user.name | uppercase}}</h5>
                    <router-link :to="{ name: 'userCard', path: '/users/:id', params: { id: user.name }, query: {user} }">
                        <button @click="countUser(user.name)" class="btn userBtn">Check User</button> 
                    </router-link>
                </div>
            </div>
        
        </div>
    
    </div>
    
    
    </div>

</template>

<script>
import Vuex from 'vuex'
import userCard from './userCard.vue'
//import titleAnimation from './animations/titleAnimation.vue'
//import forAnimation from './animations/forAnimation.vue'

export default {
    name: "UsersComponent",
    components:{
        userCard,
        //titleAnimation,
        //forAnimation
    },
    filters:{
      uppercase: function(value){
          return value.toUpperCase()
      },      
  },
    data(){
        return{
            
        }
    },
    computed:{
        ...Vuex.mapState(['users']),

    },
    mounted(){
        this.$store.dispatch("getUsers")
    },
    methods:{
       ...Vuex.mapMutations(['countUser'])
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
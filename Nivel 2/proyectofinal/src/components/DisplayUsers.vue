<template>
    <div >
        <div class="row " v-if="usersFound.length > 0">
            <div class="col" v-for="user of usersFound">
                <div class="col">
                    <div class="card" style="width: 20rem;">
                        <div class="card-header">
                        <h4>{{user.name}}</h4>
                        </div>

                        <div class="card-body">
                            <p class="card-text"><strong>Email: </strong>{{user.email}}</p>
                            <p class="card-text"><strong>Phone: </strong>{{user.phone}}</p>
                            <p class="card-text"><strong>Street: </strong>{{user.address.street}}</p>
                            <p class="card-text"><strong>Suite: </strong>{{user.address.suite}}</p>
                            <p class="card-text"><strong>City: </strong>{{user.address.city}}</p>
                            <p class="card-text"><strong>Zip: </strong>{{user.address.zipcode}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="alert alert-danger mt-2">Error: we can not find this user</div>
    </div>

</template>

<script>
import Vuex from 'vuex'

export default {
    computed:{
        ...Vuex.mapGetters({
            usersFound: 'findUsers'
        }) 
    },
}

</script>
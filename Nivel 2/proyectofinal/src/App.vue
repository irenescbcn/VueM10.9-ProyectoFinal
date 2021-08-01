<template>
  <div id="app">
    <header>
      <div id="nav">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="#">PROYECTO FINAL</a>
          <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon bg-light"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <router-link to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/users/:id">Users</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/pictures/:id">Pictures</router-link>
              </li>
              <SearchForm></SearchForm>
            </ul>
          </div>
        </nav>
      </div>

      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
      
    </header>
    <button class="btn" @click="goBack">Go Back</button>
    <footer>
      <p class="footer">Proyecto final 	&#169; Irene 2021 </p>
    </footer>
    
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue'
export default {
  components:{
    SearchForm
  },


  methods:{
      goBack(){
          this.$router.go(-1)
      }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #AAAAAA;
  
}

/* NAV */
#nav {
  background: #AAAAAA;

  .navbar-toggle{
    background-color: #AAAAAA;
  }

  .nav-item{
    padding: 10px;
  }

  a {
    font-weight: bold;
    color: #ffffff;

    &:hover{
      text-decoration:none;
    }
    
    &.router-link-exact-active {
      color: #F2DCBB;
      
    }
  }
  .dropdown-menu{
    background: #AAAAAA;
  }
  .dropdown-item:hover{
    background: #AAAAAA;
    color: #F2DCBB;
  }
  
}

.btn{
  background: #AAAAAA;
  color: #ffffff;
  margin: 5px;
}

/* FOOTER */
.footer{
  margin: 30px 0;
  padding: 10px;
  background: #AAAAAA;
  color: #ffffff;
}

/* TRANSITIONS */
.fade-enter-from,
.fade-leave-to{
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.4s ease-out;
}

</style>

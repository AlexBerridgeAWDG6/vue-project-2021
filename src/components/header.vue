<template>
   <div class="header">
      <a href="/"><img alt="myocardio logo" src="@/assets/logo.png"> </a>
   </div>
   <div id="nav">
      <router-link style="float:left" v-bind:to="{ name: 'Home' }">Home</router-link>
      <router-link style="float:left" :to="{ name: 'About'}">Help</router-link>
      <router-link style="float:left" :to="{ name: 'Search'}">Search</router-link>
      <router-link style="float:left" :to="{ name: 'GraphData'}">Data</router-link>
      <router-link style="float:left" :to="{ name: 'DataByTags'}">By Tags</router-link>  
      <router-link style="float:right" round v-if="!user" :to="{ name: 'Login'}">Login</router-link>
      <router-link style="float:right" round v-if="!user" :to="{ name: 'Registration'}">Register</router-link>

      <div style="float:right" v-if="user" >
         <!-- Logged in (
            <span style = "color: white; font-weight: bold"> {{ user }} </span> )
            <a @click="$emit('logout')">Logout? </a>
            <router-link style="float:right" :to="{ name: 'MyGraphs'}">My Graphs</router-link> 
            <router-link style="float:right" :to="{ name: 'MyAccount'}">My Account|</router-link>  -->
         <div class="dropdown">
           <i icon="el-icon-user"> </i>
            <button class="dropbtn" icon="el-icon-user" >
            <i icon="el-icon-user"> </i>
            <i class="fa fa-user"></i>
            Logged in ({{ user }})
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
               <router-link  :to="{ name: 'MyAccount'}">My Account</router-link>
               <router-link  :to="{ name: 'MyGraphs'}">My Graphs</router-link>
               <router-link  :to="{ name: 'UploadData'}"> Add Data</router-link>
               <a @click="$emit('logout'); redirectToLogin">Logout</a>
            </div>
         </div>
      </div>

   </div>
</template>

<script>
import {useRouter} from 'vue-router';
export default {
  props: ['user'],
  emits: [
    'logout'
  ],
  setup(){
    let router = useRouter();
    function redirectToLogin(){
      router.push('login');
    }
    return{
      redirectToLogin
    }
  }
}
</script>

<style scoped>
#nav {
  overflow: hidden;
  background-color: #C1272D;
}

#nav a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 22px 24px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


.dropdown {
  float: right;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;  
  border: none;
  outline: none;
  color: white;
  padding: 22px 24px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

#nav a:hover, .dropdown:hover .dropbtn {
  background-color: #7e2023;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #C1272D;
  min-width: 150px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #7e2023;
  cursor: pointer;  
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
<template>
  <v-app>
    <navbar v-if="login" />
   
    <v-content>
      <router-view></router-view>
    </v-content>
    <footervue  v-if="login" />
  </v-app>
</template>

<script>
import navbar from "@/components/navbar.vue";
import footervue from "@/components/Footer.vue";
import {EventBus} from './share-data/userstate.js';
export default {
  name: "App",
  components: {
    navbar,
    footervue

  },

  data: () => ({
   login:false
  }),
  methods:{

  },
   mounted() {  
    if( sessionStorage.getItem('token')){
      this.login=true;
    }
     EventBus.$on("loginEvent",dt=>{
       this.login=dt;
     })
   }
};
</script>

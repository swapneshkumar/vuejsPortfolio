<template>
  <nav>
    <v-app-bar  dark app>
      <v-app-bar-nav-icon @click.stop="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Test</span>
        <span>Idia pro</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <notification align-right/>
      <v-btn text>
        <span>Exit</span>
        <v-icon right>profile</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" dark app >
     <UserProfile/>
      <v-list flat>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
          action-class="boreder"
        >
          <v-list-item-action>
            <v-icon>{{link.icons}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-action-title>{{link.text}}</v-list-item-action-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script lang="js">

import notification from "../components/notification";
import UserProfile from "../components/Userprofile.vue";
  export default  {
    components:{
      notification,
      UserProfile
    },
    // name: 'navbar',
    data: ()=> ({
        drawer:true,
        interval:{},
        value:0,
        links:[
          {icons:'dashboard',text:'dashboard',route:'/'},
          {icons:'folder',text:'my project',route:'/projects'},
          {icons:'person',text:'Team',route:'/teams'}
        ]
    }),
    beforeOnDestroy(){
      clearInterval();
    },
    mounted(){
      this.interval=setInterval(() => {
        if (this.value===100) {
          return (this.value=0);
        }
        this.value+=10;
        }, 700);
    }
}
</script>

<style scoped lang="scss">
.v-progress-circula {
  margin: 1rem;
}
</style>

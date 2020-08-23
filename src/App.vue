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
export default {
  name: "App",

  components: {
    navbar,
    footervue

  },

  data: () => ({
   login:false
  }),
};
</script>

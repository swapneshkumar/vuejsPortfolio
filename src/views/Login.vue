<template>
  <v-app
    id="inspire"
    :style="{ backgroundImage: 'url(' + require('@/assets/faces/pexels-artem-beliaikin-853199.jpg') + ')' }"
  >
    <!-- <div  :style="{ backgroundImage: 'url(' + require('@/assets/faces/login-background.jpg') + ')' }"> -->
    <v-main no-gutter>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn :href="source" icon large target="_blank" v-on="on"></v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="userId"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn router :to="register" class="ma-2" offset-s6 md="4">Register</v-btn>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <!-- </div> -->
  </v-app>
</template>

<script>
import Axios from "axios";
import {  EventBus } from "../share-data/userstate.js";
export default {
  name: "Login",
  data() {
    return {
      register: "register",
      userId: "",
      password: "",
    };
  },
  props: {
    source: String,
  },
  methods: {
    login() {
      let data = {
        userId: this.userId,
        password: this.password,
      };
      Axios.post("http://localhost:8082/api/login", data).then((resp) => {
        sessionStorage.setItem("token", resp.data.token);
        console.log(resp.data.token);
        EventBus.$emit("loginEvent",true);
        this.$router.push("/dashbord");
      });
    },
  },
};
</script>

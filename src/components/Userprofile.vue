<template>
  <v-layout column align-center>
    <v-flex class="mt-5">
      <v-avatar size="100">
        <v-img src="../assets/faces/new_logo.png"></v-img>
      </v-avatar>
      
      <v-menu offset-y col>
        <template v-slot:activator="{ on, attrs }">
            <p  dark v-bind="attrs" v-on="on" class="white--text subheading mt-1 text-center">UserName</p>
          <!-- <v-link dark v-bind="attrs" v-on="on" class="white--text subheading mt-1 text-center">Dropdown</v-link> -->
        </template>
       <v-list nav>
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
      </v-menu>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
     data: () => ({
      items: [
        { title: 'Profile settings' },
        { title: 'Account settings' },
      ],
      links:[
          {icons:'build',text:'Profile setting',route:'/profilesetting'},
          {icons:'folder',text:'Account settings',route:'/accountSetting'},
        ]
    }),
}
</script>
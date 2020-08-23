<template>
  <div class="flex">
    <v-container class="mt-3">
      <v-row>
        <v-col :align-self="end" md="2" offset-md="9">
          <v-badge :content="messages" :value="messages" color="green" overlap>
            <v-icon large>notification_important</v-icon>
          </v-badge>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>



<script>
export default {
  data() {
    return {
      messages: 1,
      show: true
    };
  }
};
</script>
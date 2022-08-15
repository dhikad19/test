<template>
<v-card>
  <v-img
      class="img-top"
      src="https://res.cloudinary.com/kbru/image/upload/v1629369836/jagain/v2/assets/images/categories/Property-home_p0vcsa.jpg"
  ></v-img>
  <v-card-text>
      <homeform />
    <small>*Terms and Conditions</small>
  </v-card-text>
  </v-card>
</template>
<script>
import homeform from './HomeForm'

export default {
  data() {
    return {
      loaded: false,
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    }
  },
  components: { homeform },
  watch: {
    showDialog: function() {
      this.dialog = this.showDialog
    }
  },
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    tabControll: {
      type: String,
      default: 'none'
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>

<style>
.img-top {
  height: 200px;
}
@media screen and (max-width: 500px) {
  .img-top {
    height: 150px;
  }
}
@media screen and (max-width: 400px) {
  .img-top {
    height: 110px;
  }
}
</style>

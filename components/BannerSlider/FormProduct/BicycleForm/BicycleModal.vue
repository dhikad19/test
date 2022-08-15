<template>
<v-card>
  <v-img
      class="img-top"
      src="https://res.cloudinary.com/kbru/image/upload/v1629370105/jagain/v2/assets/images/categories/Bike_sjxlxx.jpg"
  ></v-img>
  <v-card-text>
      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="blue"
        centered
        show-arrows
      >
        <v-tab>Comprehensive</v-tab>
        <v-tab-item>
          <v-card>
            <v-img height="100" src="https://res.cloudinary.com/kbru/image/upload/v1629086299/jagain/v2/assets/images/categories/sub/Bike_Compre_goelcl.jpg"></v-img>
            <v-card-text>
              <v-form>
                <comprehensive />
              </v-form>
            </v-card-text>
            <v-card-action>
              <v-row>
                <v-col>
                  <v-btn color="grey darken-2" text><small>*See Terms and Conditions</small></v-btn>
                </v-col>
                <v-col class="text-right">
                  <v-btn
                    text
                    :loading="loading"
                    :disabled="loading"
                    @click="loader = 'loading'; vehicle = true"
                    v-model="find"
                    color="grey darken-2"
                  >
                    Search
                    <v-icon class="ml-2" small>mdi-magnify</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <v-dialog
                v-model="vehicle"
                open-delay="500"
                max-width="700px"
                transition="dialog-bottom-transition"
                scrollable
              >
              <v-card>
                <v-img class="img-top" src="https://res.cloudinary.com/kbru/image/upload/v1629369097/jagain/v2/assets/images/categories/Vehicle_iqgcua.jpg"></v-img>
                <v-card-text>
                  <list />
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    text
                    @click="vehicle = false"
                  >
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
              </v-dialog>
            </v-card-action>
          </v-card>
        </v-tab-item>
      </v-tabs>
  </v-card-text>
</v-card>
</template>
<script>
import comprehensive from './BicycleSub/ComprehensiveForm'

export default {
  data() {
    return {
      loaded: false,
      dialog: false,
      notifications: false,
      sound: true,
      open: 4000,
      loader: null,
      loading: false,
      widgets: false,
      vehicle: false
    }
  },
  components: {
    comprehensive
  },
  watch: {
    showDialog: function() {
      this.dialog = this.showDialog
    },
    loader() {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
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

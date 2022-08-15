<template>
<v-card>
  <v-img
      class="img-top"
      src="https://res.cloudinary.com/kbru/image/upload/v1631197591/jagain/v2/assets/images/categories/Travel-domestik_am5mtn.jpg"
  ></v-img>
  <v-card-text>
      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="#ad1c24"
        centered
        show-arrows
      >
        <v-tab>Individual</v-tab>
        <v-tab>Family</v-tab>
        <v-tab>Group or Duo</v-tab>
        <v-tab>Spirituality</v-tab>
        <v-tab>Delay Flight</v-tab>
        <v-tab-item>
          <v-card>
            <v-img height="100" src="https://res.cloudinary.com/kbru/image/upload/v1629086308/jagain/v2/assets/images/categories/sub/Travel_Individual_k9v51u.jpg"></v-img>
            <v-card-text>
              <v-form>
                <individual />
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card>
            <v-img height="100" src="https://res.cloudinary.com/kbru/image/upload/v1629086304/jagain/v2/assets/images/categories/sub/Travel_Family_bqn1nh.jpg"></v-img>
            <v-card-text>
              <v-form>
                <family />
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card>
            <v-img height="100" src="https://res.cloudinary.com/kbru/image/upload/v1629086305/jagain/v2/assets/images/categories/sub/travel_Group_Duo_osdrjz.jpg"></v-img>
            <v-card-text>
              <v-form>
                <group />
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card>
            <v-img height="100" src="https://res.cloudinary.com/kbru/image/upload/v1629086308/jagain/v2/assets/images/categories/sub/travel_Holy_Land_a28fpp.jpg"></v-img>
            <v-card-text>
              <v-form>
                <spirituality />
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card>
            <v-img height="100" src="https://res.cloudinary.com/kbru/image/upload/v1629086307/jagain/v2/assets/images/categories/sub/Travel_Flight_Delay_vdfkfa.jpg"></v-img>
            <v-card-text>
              <v-form>
                <delay />
              </v-form>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    <small>*Terms and Conditions</small>
  </v-card-text>
</v-card>
</template>
<script>
import individual from './SubTravel/IndividualForm'
import family from './SubTravel/FamilyForm'
import group from './SubTravel/GroupDuoForm'
import spirituality from './SubTravel/SpiritualForm'
import delay from './SubTravel/DelayForm'

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
  components: { individual, family, group, spirituality, delay },
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

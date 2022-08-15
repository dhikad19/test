<template>
  <div class="banner-container">
    <div class="banner-left">
      <div class="left-container">
        <div class="top-content">
          <h2 class="mb-2">Choose The Protection You Need</h2>
        </div>
          <div class="center-content">
            <div class="product-list">
              <div class="product-content" @click="vehicle = true">
                <div class="img-container">
                  <img src="/product/kendaraan.png" alt="">
                </div>
                <p class="product-text">Car</p>
              </div>
              <div class="product-content" @click="accident = true">
                <div class="img-container">
                  <img src="/product/kecelakaan.png" alt="">
                </div>
                <p class="product-text">Accident</p>
              </div>
              <div class="product-content" @click="travel = true">
                <div class="img-container">
                  <img src="/product/perjalanan.png" alt="">
                </div>
                <p class="product-text">Travel</p>
              </div>
              <div class="product-content" @click="bicycle = true">
                <div class="img-container">
                  <img src="/product/sepeda.png" alt="">
                </div>
                <p class="product-text">Bicycle</p>
                </div>
              </div>
              <div class="product-list">
                <div class="product-content" @click="home = true">
                  <div class="img-container">
                    <img src="/product/rumah.png" alt="">
                  </div>
                  <p class="product-text">Home</p>
                  </div>
                  <div class="product-content" @click="dialog = true">
                    <div class="img-container">
                      <img src="/product/apartmen.png" alt="">
                    </div>
                    <p class="product-text">Apartment</p>
                  </div>
                        <div class="product-content" @click="dialog = true">
                            <div class="img-container">
                                <img src="/product/jiwa.png" alt="">
                            </div>
                            <p class="product-text">Life</p>
                        </div>
                        <div class="product-content" @click="dialog = true">
                            <div class="img-container">
                                <img src="/product/kesehatan.png" alt="">
                            </div>
                            <p class="product-text">Health</p>
                        </div>
                    </div>
                    <div class="product-list">
                        <div class="product-content" @click="dialog = true">
                            <div class="img-container">
                                <img src="/product/villa.png" alt="">
                            </div>
                            <p class="product-text">Villa</p>
                        </div>
                        <div class="product-content" @click="dialog = true">
                            <div class="img-container">
                                <img src="/product/pet.png" alt="">
                            </div>
                            <p class="product-text">Pet</p>
                        </div>
                        <div class="product-content" @click="dialog = true">
                            <div class="img-container">
                                <img src="/product/ruko.png" alt="">
                            </div>
                            <p class="product-text">Shophouse</p>
                        </div>
                        <div class="product-content" @click="dialog = true">
                            <div class="img-container">
                                <img src="/product/rukan.png" alt="">
                            </div>
                            <p class="product-text">Office</p>
                        </div>
                        <v-dialog
                            v-model="vehicle"
                            max-width="700px"
                            transition="dialog-bottom-transition"
                            scrollable
                        >
                          <Car />
                        </v-dialog>
                        <v-dialog
                            v-model="accident"
                            max-width="700px"
                            transition="dialog-bottom-transition"
                            scrollable
                        >
                          <accident />
                        </v-dialog>
                        <v-dialog
                            v-model="travel"
                            max-width="700px"
                            transition="dialog-bottom-transition"
                            scrollable
                        >
                          <travel />
                        </v-dialog>
                        <v-dialog
                            v-model="bicycle"
                            max-width="700px"
                            transition="dialog-bottom-transition"
                            scrollable
                        >
                          <bicycle />
                        </v-dialog>
                        <v-dialog
                            v-model="home"
                            max-width="700px"
                            transition="dialog-bottom-transition"
                            scrollable
                        >
                          <home />
                        </v-dialog>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner-right">
            <div class="right-container">
                <v-carousel
                  cycle
                  height="auto"
                  style="box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);"
                  hide-delimiter-background
                  show-arrows-on-hover
                  class="rounded-lg"
                >
                  <v-carousel-item
                    v-for="(item, i) in items"
                    :key="i"
                    :src="item.img"
                    centered
                    contain
                    class="rounded-lg"
                  >
                  </v-carousel-item>
                </v-carousel>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './slider-styles';
</style>

<script>
import Car from './FormProduct/VehicleForm/CarModal'
import Accident from './FormProduct/AccidentForm/AccidentModal'
import Travel from './FormProduct/TravelForm/TravelModal'
import Bicycle from './FormProduct/BicycleForm/BicycleModal'
import Home from './FormProduct/HomeForm/HomeModal'

export default {
  components: { Car, Accident, Travel, Bicycle, Home },
  data() {
    return {
      loaded: false,
      accident: false,
      vehicle: false,
      travel: false,
      bicycle: false,
      home: false,
      notifications: false,
      sound: true,
      widgets: false,
      items: [
        {
          img: '/banner/banner2-1.png'
        },
        {
          img: '/banner/banner2-2.png'
        }
      ]
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    next() {
      this.$refs.slick.next()
    },
    prev() {
      this.$refs.slick.prev()
    }
  }
}
</script>

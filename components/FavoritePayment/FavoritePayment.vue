<template>
    <div class="favorite-wrapper">
        <div class="top-wrapper">
            <h2>Favorite Payment Promo</h2>
            <a href=""><p>More Promo</p></a>
        </div>
        <div class="favorite-content">
            <VueSlickCarousel v-bind="slickOptions">
                <div
                v-for="(item, index) in testiContent"
                :key="index"
                class="item"
                >
                    <v-card
                        class="mx-auto rounded"
                        max-width="542"
                        elevation="4"
                    >
                        <v-img
                          :src="item.img"
                          contain
                        ></v-img>

                        <v-card-title class="title-text">
                          {{item.title}}
                        </v-card-title>

                        <v-card-subtitle class="sub-text">
                          {{item.text}}
                        </v-card-subtitle>

                        <v-card-actions>
                                <v-btn
                                    text
                                    outlined
                                    color="#4f4f4f"
                                >
                                    More Detail
                                </v-btn>
                            </v-card-actions>
                    </v-card>
                </div>
            </VueSlickCarousel>
        </div>
    </div>    
</template>

<style lang="scss" scoped>
@import './FavoritePayment.scss';
</style>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      testiContent: [
        {
          img:
            'https://res.cloudinary.com/kbru/image/upload/v1629369836/jagain/v2/assets/images/categories/Property-home_p0vcsa.jpg',
          title: 'Asuransi Covid',
          text: 'Disc 25%'
        },
        {
          img:
            'https://res.cloudinary.com/kbru/image/upload/v1629369202/jagain/v2/assets/images/categories/Accident_uchzyx.jpg',
          title: 'Asuransi Rumah',
          text: 'DP 0%'
        },
        {
          img:
            'https://res.cloudinary.com/kbru/image/upload/v1629370105/jagain/v2/assets/images/categories/Bike_sjxlxx.jpg',
          title: 'Kecelakaan Kerja',
          text: 'Disc 10%'
        },
        {
          img:
            'https://res.cloudinary.com/kbru/image/upload/v1629369938/jagain/v2/assets/images/categories/Travel_wnjpji.jpg',
          title: 'Kecelakaan Ringan',
          text: 'Disc 5%'
        },
        {
          img:
            'https://res.cloudinary.com/kbru/image/upload/v1629369748/jagain/v2/assets/images/categories/Health-Critical_jioiyn.jpg',
          title: 'Kecelakaan Mendadak',
          text: 'Disc 2%'
        },
        {
          img:
            'https://res.cloudinary.com/kbru/image/upload/v1629088757/jagain/v2/assets/images/categories/vehicle-banner_ldwsuo.jpg',
          title: 'Asuransi Ruko',
          text: 'Disc 3%'
        },
        {
          img:
            'https://res.cloudinary.com/kbru/image/upload/v1631197591/jagain/v2/assets/images/categories/Travel-domestik_am5mtn.jpg',
          title: 'Asuransi Mobil',
          text: 'Kerusakan Berat'
        },
        {
          img:
            'https://res.cloudinary.com/kbru/image/upload/v1629370047/jagain/v2/assets/images/categories/Pet_ovrlsb.jpg',
          title: 'Asuransi Peliharaan',
          text: 'Disc 40% pendaftaran pertama'
        }
      ],
      slickOptions: {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 9000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        arrows: true,
        centerMode: false,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              arrows: false,
              dots: false,
              centerMode: true,
              centerPadding: '25px',
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  }
}
</script>

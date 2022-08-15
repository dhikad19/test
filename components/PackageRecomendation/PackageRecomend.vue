<template>
    <div class="package-wrap">
        <div class="top-wrapper">
            <h2>Package Recomendation</h2>
            <a href=""><p>More Promo</p></a>
        </div>
        <div class="carousel" v-if="loaded">
            <VueSlickCarousel 
                v-bind="slickOptions"
            >
                <div
                v-for="(item, index) in testiContent"
                :key="index"
                class="item"
                >
                    <v-card
                        class="mx-auto rounded"
                        max-width="400"
                        elevation="4"
                    >
                        <v-img
                        class="white--text align-end"
                        contain
                        :src="item.img"
                        >
                        </v-img>
                            <v-card-actions>
                                <v-btn outlined color="#4f4f4f" text>
                                    More Detail
                                </v-btn>
                            </v-card-actions>
                    </v-card>
                </div>
            </VueSlickCarousel >
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './PackageRecomend.scss';
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
      loaded: false,
      testiContent: [
        {
          img:
            'https://res.cloudinary.com/kbru/image/upload/v1629369938/jagain/v2/assets/images/categories/Travel_wnjpji.jpg',
          text1: 'Disc 20%',
          text2: 'Cicilan 12 Bulan'
        },
        {
          img:
            'https://res.cloudinary.com/kbru/image/upload/v1629369097/jagain/v2/assets/images/categories/Vehicle_iqgcua.jpg',
          text1: 'Disc 20%',
          text2: '50.000'
        },
        {
          img:
            'https://res.cloudinary.com/kbru/image/upload/v1629369202/jagain/v2/assets/images/categories/Accident_uchzyx.jpg',
          text1: 'Disc 15%',
          text2: 'Cicilan 12 Bulan'
        },
        {
          img:
            'https://res.cloudinary.com/kbru/image/upload/v1629370047/jagain/v2/assets/images/categories/Pet_ovrlsb.jpg',
          text1: '15.000 Rp. / hari',
          text2: 'Disc 10%'
        }
      ],
      slickOptions: {
        dots: false,
        infinite: true,
        slidesToShow: 3,
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
              arrows: true,
              centerMode: false,
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

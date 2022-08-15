<template>
    <div class="package-wrap">
        <div class="top-wrapper">
            <h2>Latest Articles</h2>
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
                        style="z-index: 5"
                    >
                        <v-img
                          class="white--text align-end"
                          contain
                          :src="item.img"
                        >
                        </v-img>
                        <v-card-title class="text-title">
                          {{item.title}}
                        </v-card-title>
                        <v-card-text class="text-sub">
                          {{item.text}}
                        </v-card-text>
                        <v-divider class="mx-4 text-divider"></v-divider>
                        <v-card-subtitle class="text-date">
                          {{item.date}} by <b>Jagain</b>
                        </v-card-subtitle>
                    </v-card>
                </div>
            </VueSlickCarousel >
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './blog-style.scss';
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
            'https://res.cloudinary.com/kbru/image/upload/v1629369202/jagain/v2/assets/images/categories/Accident_uchzyx.jpg',
          title: 'Most New Headline',
          text:
            'Asuransi akan memberi perlindungan ketika kamu mengalami risiko di kemudian hari. Perlindungan yang didapatkan ...',
          date: '2022-07-01 08:00'
        },
        {
          img:
            'https://res.cloudinary.com/kbru/image/upload/v1629369748/jagain/v2/assets/images/categories/Health-Critical_jioiyn.jpg',
          title: 'Most New Headline',
          text:
            'Asuransi akan memberi perlindungan ketika kamu mengalami risiko di kemudian hari. Perlindungan yang didapatkan ...',
          date: '2022-06-22 10:00'
        },
        {
          img:
            'https://res.cloudinary.com/kbru/image/upload/v1629369836/jagain/v2/assets/images/categories/Property-home_p0vcsa.jpg',
          title: 'Most New Headline',
          text:
            'Asuransi akan memberi perlindungan ketika kamu mengalami risiko di kemudian hari. Perlindungan yang didapatkan ...',
          date: '2022-04-01 12:00'
        },
        {
          img:
            'https://res.cloudinary.com/kbru/image/upload/v1629088757/jagain/v2/assets/images/categories/vehicle-banner_ldwsuo.jpg',
          title: 'Most New Headline',
          text:
            'Asuransi akan memberi perlindungan ketika kamu mengalami risiko di kemudian hari. Perlindungan yang didapatkan ...',
          date: '2022-11-11 11:11'
        }
      ],
      slickOptions: {
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        centerPadding: '65px',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 9000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        arrows: true,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
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

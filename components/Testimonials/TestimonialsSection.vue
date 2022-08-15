<template>
  <div class="testimonial-wrap">
    <h2 class="mb-8">
      Customer Reviews
    </h2>
    <div class="testimonial-content">
      <VueSlickCarousel v-bind="slickOptions">
        <div
          v-for="(item, index) in testiContent"
          :key="index"
          class="item"
        >
          <v-card elevation="4">
            <v-card-text>
              <p>"{{item.text}}"</p>
              <div class="bio">
                <v-avatar
                  :size="30"
                  class="avatar"
                >
                  <img
                    :src="item.avatar"
                    :alt="name"
                  >
                </v-avatar>
                <span class="name">
                  {{ item.name }}
                </span>
                <span class="caption">
                  Client
                </span>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './testimonials-style';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      loaded: false,
      testiContent: [
        {
          text:
            'Pertama saya tidak percaya, karena proses begitu mudah dan simple. Hanya perlu submit foto dan melakukan pembayaran setelah itu polis langsung saya dapatkan. Proses klaimnya sangat mudah dan simple.',
          avatar: imgAPI.avatar[1],
          name: 'Dian Ariesta W'
        },
        {
          text:
            'Saya tidak perlu pusing dan ribet lagi untuk mencari asuransi mobil saya. Baru kali ini saya puas membeli asuransi tanpa ribet dan tanpa perlu bertemu dengan marketing Asuransi. Terima kasih Jagain.com.',
          avatar: imgAPI.avatar[10],
          name: 'Edwin'
        },
        {
          text:
            'Sumpah! Lebih praktis beli asuransi di Jagain.com, Costumer Servicenya Oke, dan banyak diskonnya, jadi jauh lebih murah beli asuransi disini. Recomended Website. fiturnya jelas. Sukses terus Jagain 👍',
          avatar: imgAPI.avatar[8],
          name: 'Niko'
        },
        {
          text:
            'Portal asuransi yang sangat mudah digunakan untuk pembelian asuransi dan juga pada saat klaim di bantu proses klaimnya. Sangat membantu untuk pencarian produk asuransi yang sesuai.',
          avatar: imgAPI.avatar[6],
          name: 'Budiono Tjiandra'
        }
      ],
      slickOptions: {
        dots: false,
        arrows: false,
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
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
              slidesToScroll: 1,
              arrows: false,
              dots: true
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

<template>
  <div class="banner-wrap">
    <div class="carousel" v-if="loaded">
      <slick
        ref="slider"
        :options="slickOptions"
        @afterChange="handleAfterChange"
      >
        <div class="slide">
          <div class="inner">
            <v-container>
              <v-row>
                <v-col sm="7" lg="6" cols="12">
                  <div class="text">
                    <h4 class="text-h4">{{ $t('starter.banner_title_1') }}</h4>
                    <h5 class="text-h5">{{ $t('starter.banner_subtitle_1') }}</h5>
                  </div>
                </v-col>
              </v-row>
            </v-container>
            <div class="img">
              <img src="/banner/banner-jagain-3.png" alt="banner" />
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="inner">
            <v-container>
              <v-row>
                <v-col sm="7" lg="6" cols="12">
                  <div class="text">
                    <h4 class="text-h4">{{ $t('starter.banner_title_2') }}</h4>
                    <h5 class="text-h5">{{ $t('starter.banner_subtitle_2') }}</h5>
                  </div>
                </v-col>
              </v-row>
            </v-container>
            <div class="img">
              <img src="/banner/banner-jagain-2.png" alt="banner" />
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="inner">
            <v-container>
              <v-row>
                <v-col sm="7" lg="6" cols="12">
                  <div class="text">
                    <h4 class="text-h4">{{ $t('starter.banner_title_3') }}</h4>
                    <h5 class="text-h5">{{ $t('starter.banner_subtitle_3') }}</h5>
                  </div>
                </v-col>
              </v-row>
            </v-container>
            <div class="img">
              <img src="/banner/banner-jagain-1.png" alt="banner" />
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="inner">
            <v-container>
              <v-row>
                <v-col sm="7" lg="6" cols="12">
                  <div class="text">
                    <h4 class="text-h4">{{ $t('starter.banner_title_4') }}</h4>
                    <h5 class="text-h5">{{ $t('starter.banner_subtitle_4') }}</h5>
                  </div>
                </v-col>
              </v-row>
            </v-container>
            <div class="img">
              <img src="/banner/banner-jagain-4.png" alt="banner" />
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="inner">
            <v-container>
              <v-row>
                <v-col sm="7" lg="6" cols="12">
                  <div class="text">
                    <h4 class="text-h4">{{ $t('starter.banner_title_5') }}</h4>
                    <h5 class="text-h5">{{ $t('starter.banner_subtitle_5') }}</h5>
                  </div>
                </v-col>
              </v-row>
            </v-container>
            <div class="img">
              <img src="/banner/banner-jagain-5.png" alt="banner" />
            </div>
          </div>
        </div>
      </slick>
    </div>
    <hidden point="mdDown">
      <v-container class="max-md">
        <nav class="slide-nav">
          <v-btn
            :class="{ active: currentSlide === 0 }"
            @click="gotoSlide(0)"
            text
          >
            <strong>{{ $t('starter.banner_slider_strong_1') }}</strong>
            {{ $t('starter.banner_slider_1') }}
          </v-btn>
          <v-divider class="divider" vertical inset />
          <v-btn
            :class="{ active: currentSlide === 1 }"
            @click="gotoSlide(1)"
            text
          >
            <strong>{{ $t('starter.banner_slider_strong_2') }}</strong>
            {{ $t('starter.banner_slider_2') }}
          </v-btn>
          <v-divider class="divider" vertical inset />
          <v-btn
            :class="{ active: currentSlide === 2 }"
            @click="gotoSlide(2)"
            text
          >
            <strong>{{ $t('starter.banner_slider_strong_3') }}</strong>
            {{ $t('starter.banner_slider_3') }}
          </v-btn>
          <v-divider class="divider" vertical inset />
          <v-btn
            :class="{ active: currentSlide === 3 }"
            @click="gotoSlide(3)"
            text
          >
            <strong>{{ $t('starter.banner_slider_strong_4') }}</strong>
            {{ $t('starter.banner_slider_4') }}
          </v-btn>
          <v-divider class="divider" vertical inset />
          <v-btn
            :class="{ active: currentSlide === 4 }"
            @click="gotoSlide(4)"
            text
          >
            <strong>{{ $t('starter.banner_slider_strong_5') }}</strong>
            {{ $t('starter.banner_slider_5') }}
          </v-btn>
        </nav>
      </v-container>
    </hidden>
  </div>
</template>

<style scoped lang="scss">
@import './slider-styles';
</style>

<script>
import Hidden from '../Hidden'

export default {
  components: {
    Hidden,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      currentSlide: 0,
      slickOptions: {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000,
        responsive: [
          {
            breakpoint: 800,
            settings: {
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
    handleAfterChange(event, slick, currentSlide) {
      this.currentSlide = currentSlide
    },
    gotoSlide(index) {
      this.$refs.slider.goTo(index)
    }
  }
}
</script>

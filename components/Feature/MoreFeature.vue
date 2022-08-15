<template>
  <div class="feature-more" id="download">
    <v-container>
      <!-- <u-animate-container>
        <v-row id="feature1">
          <v-col
            md="6"
            class="px-6"
            cols="12"
          >
            <div v-if="loaded" class="feature-item">
              <u-animate
                name="fadeInLeft"
                duration="0.6s"
              >
                <h3 class="title-app display-2">Aplikasi <span style="color: #ed1c24">Jagain</span></h3>
              </u-animate>
              <u-animate
                name="fadeInLeft"
                delay="0.3s"
                duration="0.6s"
              >
                <p class="text">
                  Tersedia beragam pilihan asuransi yang bisa anda akses kapanpun dan dimanapun.
                </p>
              </u-animate>
            </div>
          </v-col>
          <v-col
            md="6"
            class="px-6"
            cols="12"
          >
            <div v-if="loaded" class="feature-item">
              <u-animate
                name="zoomIn"
                delay="0.3s"
                duration="0.6s"
              >
                <div class="deco1" />
              </u-animate>
              <u-animate
                name="fadeInRight"
                delay="0.5s"
                duration="0.6s"
              >
                <figure class="img">
                  <img src="/images/banner-feature/banner-jagain-feature-2.png" alt="banner" />
                </figure>
              </u-animate>
            </div>
          </v-col>
        </v-row>
      </u-animate-container> -->
      <!-- <u-animate-container>
        <v-row>
          <v-col
            md="6"
            class="px-6"
            cols="12"
          >
            <div v-if="loaded" class="feature-item">
              <u-animate
                name="fadeInLeft"
                delay="0.5s"
                duration="0.6s"
              >
                <figure class="img">
                  <img src="/images/banner-feature/banner-jagain-feature-1.png" alt="banner" />
                </figure>
              </u-animate>
            </div>
          </v-col>
          <v-col
            md="6"
            class="px-6"
            cols="12"
          >
            <div v-if="loaded" class="feature-item">
              <u-animate
                name="fadeInLeft"
                duration="0.6s"
              >
                <h3 class="title-app display-2">Lorem ipsum dolor</h3>
              </u-animate>
              <u-animate
                name="fadeInRight"
                delay="0.5s"
                duration="0.6s"
              >
                <p class="text">
                  Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
                </p>
              </u-animate>
            </div>
          </v-col>
        </v-row>
      </u-animate-container> -->
      <u-animate-container>
        <v-row>
          <v-col
            md="12"
            class="px-6"
            cols="12"
          >
            <div v-if="loaded" class="feature-item last text-center">
              <u-animate
                name="fadeInUp"
                duration="0.6s"
              >
                <h3 class="title-app display-2">{{ $t('feature.feature_download_title') }} <span style="color: #ed1c24">Jagain</span></h3>
              </u-animate>
              <u-animate
                name="fadeInUp"
                duration="0.6s"
                delay="0.4s"
              >
                <p class="text">
                  <span>{{ $t('feature.feature_download_desc') }}
                  <br>{{ $t('feature.feature_download_desc_1') }}</span>
                </p>
              </u-animate>
              <u-animate
                name="fadeInUp"
                duration="0.6s"
                delay="0.3s"
              >
                <div class="icon">
                    <a class="social" href="https://play.google.com/store/apps/details?id=com.jagain" target="_blank"><img src="/images/apps/playstore.png" alt="playstore"></a>
                    <a class="social" href="https://apps.apple.com/id/app/jagain/id1449945123?l=id" target="_blank"><img src="/images/apps/appstore.png" alt="appstore"></a>
                  </div>
              </u-animate>
              <u-animate
                name="fadeInUp"
                duration="0.6s"
                delay="0.5s"
              >
                <figure class="img-full">
                  <img style="object-fit: contain" src="/images/banner-feature/banner-feature-jagain-3.png" alt="banner" />
                </figure>
              </u-animate>
            </div>
          </v-col>
        </v-row>
      </u-animate-container>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import './feature-styles';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'

export default {
  data() {
    return {
      imgAPI,
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>

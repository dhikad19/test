<template>
  <div>
    <div class="main-wrap">
      <main-header />
      <div class="container-wrap">
        <div id="home">
          <banner-slider />
        </div>
        <top-up />
        <div
          id="feature"
          class="mb-10"
        >
        <LowPrice />
        </div>
        <div id="content" class="mb-10">
        <ContentSection />
        </div>
        <div id="package" class="mb-10">
        <PackageRecomendation />
        </div>
        <div id="payment" class="mb-10">
        <FavoritePayment />
        </div>
        <div id="blog" class="mb-10">
          <blog />
        </div>
        <div
          id="testimonials"
          class="mb-10"
        >
          <Testimonials />
        </div>
      </div>
      <partner id="partner" class="mb-10" />
      <main-footer />
      <hidden>
        <corner />
      </hidden>
      <hidden>
        <notification />
      </hidden>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/pages';
</style>

<script>
import Header from '~/components/Header/Mega'
import Hidden from '~/components/Hidden'
import BannerSlider from '~/components/BannerSlider'
import TopUp from '../components/TopUp'
import Testimonials from '~/components/Testimonials'
import Partner from '~/components/Partner'
import Blog from '~/components/Blog'
import Footer from '~/components/Footer'
import Corner from '~/components/Corner'
import Notification from '~/components/Notification'
import brand from '~/static/text/brand'
import LowPrice from '../components/LowPricePromo/LowPrice'
import PackageRecomendation from '../components/PackageRecomendation'
import ContentSection from '../components/Content'
import FavoritePayment from '../components/FavoritePayment'

export default {
  components: {
    'main-header': Header,
    BannerSlider,
    TopUp,
    LowPrice,
    PackageRecomendation,
    Hidden,
    Testimonials,
    Blog,
    Partner,
    Corner,
    Notification,
    'main-footer': Footer,
    ContentSection,
    FavoritePayment
  },
  head() {
    return {
      title: brand.starter.name + ' - Trusted Insurance Marketplace'
    }
  },
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 60
    },
    toTop() {
      this.$vuetify.goTo(0)
    }
  }
}
</script>

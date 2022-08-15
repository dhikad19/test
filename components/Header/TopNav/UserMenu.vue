<template>
  <nav class="user-menu">
    <header-menu :data-menu="dataMenu" />
    <v-menu
      :href="link.starter.login"
      v-if="isDesktop"
      text
      color="black"
      close-on-click
      open-on-hover
      offset-y
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn 
          text 
          v-bind="attrs"
          v-on="on"
          @click="show = !show"
          style="text-transform: capitalize; font-size: 16px; color: #000000; font-weight: 500"
          >
          <v-icon small class="mr-1">mdi-account</v-icon>
          Login
          <v-icon right>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list dense class="mt-3">
        <v-list-item style="max-height: 40px" v-for="(item, index) in items" :key="index" link>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-avatar><v-icon small>{{ item.icon }}</v-icon></v-list-item-avatar>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn
      v-if="isDesktop"
      :href="link.starter.register"
      color="error"
      style="text-transform: capitalize; font-size: 16px; font-weight: 500"
    >
      {{ $t('common.register') }}
    </v-btn>
    <v-spacer
      v-if="isDesktop"
      class="vertical-divider"
    />
    <setting-menu />
  </nav>
</template>

<style lang="scss" scoped>
@import '../header-style.scss';
</style>

<script>
import link from '~/static/text/link'
import Settings from './Settings'
import samplePages from '../data/sample-pages'
import MegaMenu from '../TopNav/MegaMenu'
import navMenu from '../data/single'

let counter = 0
function createData(name, link, offset) {
  counter += 1
  return {
    id: counter,
    name,
    link,
    offset
  }
}

export default {
  data() {
    return {
      link: link,
      items: [
        { icon: 'mdi-account', title: 'User' },
        { icon: 'mdi-shopping', title: 'Pembelian' },
        { icon: 'mdi-cog', title: 'Setting' },
        { icon: 'mdi-logout-variant', title: 'Logout' }
      ],
      navOffset: 20,
      hover: false,
      curURL: '',
      curOrigin: '',
      langPath: '',
      fixed: false,
      loaded: false,
      openNavMobile: null,
      menuSecondary: samplePages,
      menuPrimary: [
        createData(navMenu[0], '#' + navMenu[0]),
        createData(navMenu[1], '#' + navMenu[1]),
        createData(navMenu[2], '#' + navMenu[2]),
        createData(navMenu[3], '#' + navMenu[3], -40),
        createData(navMenu[4], '#' + navMenu[4], -40)
      ]
    }
  },
  methods: {
    setOffset: function(offset) {
      this.navOffset = offset
    },
    handleScroll: function() {
      if (window.scrollY > 100) {
        return (this.fixed = true)
      }
      return (this.fixed = false)
    },
    handleToggleOpen: function() {
      this.openNavMobile = !this.openNavMobile
    }
  },
  mounted() {
    this.curURL = window.location.href
    this.curOrigin = window.location.origin
    this.langPath = '/' + this.$i18n.locale
    this.loaded = true
  },
  components: {
    'setting-menu': Settings,
    'header-menu': MegaMenu
  },
  computed: {
    isTablet() {
      const mdDown = this.$store.state.breakpoints.mdDown
      return mdDown.indexOf(this.$mq) > -1
    },
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>

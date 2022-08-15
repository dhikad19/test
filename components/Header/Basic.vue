<template>
  <fragment>
    <v-app-bar
      v-scroll="handleScroll"
      :class="{ fixed: fixed }"
      class="header"
      fixed
      dense
      app
      height="auto"
    >
      <v-container>
        <div class="header-content">
          <nav class="nav-menu">
            <div class="logo start-mobile">
              <a :href="link.starter.home">
                <logo type="landscape" />
              </a>
            </div>
          </nav>
          <nav class="user-menu">
            <a style="margin-right: -5px; text-decoration: none;" href="linktr.ee/jagain" target="_blank">
            <v-btn text ><v-icon class="mr-1" small>mdi-cellphone</v-icon> Download Apps</v-btn>
            </a>
    <v-menu
      open-on-hover
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          light
          v-bind="attrs"
          v-on="on"
          href="/login"
        > <v-icon small class="mr-1">mdi-account</v-icon>
          Login
          <v-icon small class="ml-1">mdi-chevron-down</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>

    </v-menu>
    
    <v-btn class="mr-8" href="/register" depressed color="error">Register</v-btn>
            <v-spacer
              v-if="isDesktop"
              class="vertical-divider"
            />
            <setting-menu />
          </nav>
        </div>
      </v-container>
    </v-app-bar>
  </fragment>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import link from '~/static/text/link'
import Logo from '../Logo'
import Settings from './TopNav/Settings'

export default {
  components: {
    'setting-menu': Settings,
    Logo
  },
  data() {
    return {
      link: link,
      fixed: false,
      loaded: false,
      openNavMobile: null,
      items: [
        { title: 'My Account' },
        { title: 'Profile' },
        { title: 'Log Out' }
      ]
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
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
  computed: {
    isTablet() {
      const mdDown = this.$store.state.breakpoints.mdDown
      return mdDown.indexOf(this.$mq) > -1
    },
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  },
  props: {
    text: {
      type: String,
      default: 'login'
    },
    href: {
      type: String,
      default: '/'
    }
  }
}
</script>

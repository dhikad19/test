<template>
<div>
  <v-menu
    v-model="open"
    :close-on-content-click="closeOnContentClick"
    transition="slide-y-transition"
    offset-y
    open-on-hover
    nudge-top="-6"
    bottom
    class="menu-setting"
  >
    <template v-slot:activator="{ on }">
      <div class="setting">
        <v-btn
          text
          small
          v-on="on"
          class="ma-1"
          style="padding: 17px 20px 17px 20px;"
        >
          <v-icon
            class="icon"
            color="black"
            dense
          >
            mdi-translate
          </v-icon>
          <v-icon right>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </div>
    </template>
    <div class="popover violeta-var">
      <v-list dense class="lang-menu">
        <v-subheader class="sub-title">{{ $t('common.header_language') }}</v-subheader>
        <v-list-item
          v-for="locale in $i18n.locales"
          :key="locale.code"
          class="lang-list"
          @click="switchLang(locale.code)"
        >
          <v-list-item-avatar class="flag">
            <i :class="locale.code" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="lang-opt">
              {{ $t('common.'+locale.code) }}
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon
              v-if="locale.code === $i18n.locale"
              color="primary"
            >
              mdi-check
            </v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </div>
  </v-menu>
  <v-menu
    open-on-hover
    offset-y
    :close-on-click="closeOnClick"
    class="user"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        fab
        v-bind="attrs"
        v-on="on"
        text
        class="user"
      > 
          <v-icon large class="mr-1">mdi-account</v-icon>
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
</div>
</template>

<style lang="scss" scoped>
@import '../header-style.scss';
</style>

<script>
import { mapGetters, mapState } from 'vuex'

let darkMode = false
if (typeof Storage !== 'undefined') {
  // eslint-disable-line
  darkMode = localStorage.getItem('luxiDarkMode') || false
}

export default {
  props: {
    invert: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    dark: darkMode === 'true',
    rtl: false,
    open: false,
    show: false,
    closeOnClick: true,
    items: [
      { title: 'My Account' },
      { title: 'Profile' },
      { title: 'Log Out' }
    ],
    closeOnContentClick: false
  }),
  computed: {
    ...mapState(['counter', 'darkMode']),
    ...mapGetters(['getDir'])
  },
  methods: {
    switchLang: function(val) {
      this.$i18n.setLocale(val)
    },
    setDark: function() {
      localStorage.setItem('luxiDarkMode', this.dark)
      this.$vuetify.theme.dark = this.dark
    },
    setDirection: function() {
      this.$vuetify.rtl = this.rtl
      document.dir = this.rtl ? 'rtl' : 'ltr'
    }
  }
}
</script>

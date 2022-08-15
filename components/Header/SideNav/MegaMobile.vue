<template>
  <v-list class="side-multilv">
    <fragment
       v-for="(item, index) in dataMenu"
      :key="index"
    >
      <v-list-group
        style="margin-top: -50px"
        v-if="item.child"
        no-action
        class="group-child"
      >
        <template v-slot:activator>
          <v-list-item class="has-child">
            <v-list-item-title class="menu-list">
              {{ item.name }}
            </v-list-item-title>
          </v-list-item>
        </template>
        <v-list
          v-for="(subitem, index) in item.child"
          :key="index"
        >
          <v-subheader class="title-mega">{{ subitem.name }}</v-subheader>
          <v-list-item-group>
            <v-list-item
              v-for="(item, index) in subitem.child"
              :key="index"
              :href="item.link"
              :class="{ current: curURL === (curOrigin+langPath+item.link)}"
            >
              <v-list-item-content>
                <v-list-item-title class="menu-list" v-text="item.name" />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-list-group>
      <!-- Single Nav -->
      <v-list-item
        v-else
        :href="item.link"
        :class="{ current: curURL === (curOrigin+langPath+item.link)}"
        link
      >
        <v-list-item-title class="menu-list">
          {{ item.name }}
        </v-list-item-title>
      </v-list-item>
      <a href="https://linktr.ee/jagain" target="_blank">
        <v-list-item>
          Download Apps
        </v-list-item>
      </a>
    </fragment>
    <v-divider />
    <v-list-item
      v-for="(item, index) in ['login', 'register']"
      :key="index"
      :href="'/' + item"
      :class="{ current: curURL === (curOrigin+langPath+item)}"
      link
    >
      <v-list-item-content>
        <v-list-item-title class="menu-list">{{ $t('common.header_'+item) }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-menu
        v-model="open"
        :close-on-content-click="closeOnContentClick"
        transition="slide-y-transition"
        offset-y
        nudge-top="-6"
        bottom
        class="menu-setting"
      >
      <template v-slot:activator="{ on }">
      <div class="setting">
        <v-btn
          fab
          text
          v-on="on"
          class="font-weight-regular"
        >
          Language
        </v-btn>
      </div>
    </template>
    <div class="popover violeta-var">
      <v-list class="lang-menu">
        <v-list-item
          v-for="locale in $i18n.locales"
          :key="locale.code"
          class="lang-list"
          @click="switchLang(locale.code)"
        >
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
</v-list-item>
</v-list>
</template>

<style scoped lang="scss">
@import '../sidenav-style';
</style>

<script>
export default {
  data() {
    return {
      isOpen: false,
      open: false,
      closeOnContentClick: false,
      curURL: '',
      curOrigin: '',
      langPath: ''
    }
  },
  mounted() {
    this.curURL = window.location.href
    this.curOrigin = window.location.origin
    this.langPath = '/' + this.$i18n.locale
  },
  props: {
    dataMenu: {
      type: Array,
      required: true
    },
    invert: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    switchLang: function(val) {
      this.$i18n.setLocale(val)
    }
  }
}
</script>

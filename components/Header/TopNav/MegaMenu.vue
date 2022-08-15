<template>
  <div class="multi-menu">
    <fragment
      v-for="(item, index) in dataMenu"
      :key="index"
    >
      <!-- Multilevel Nav -->
      <v-menu
        v-if="item.child"
        :position-x="0"
        max-height="480"
        offset-y
        open-on-hover
        content-class="mega-menu-root"
        min-width="100%"
        nudge-left
        nudge-width
      >
        <template v-slot:activator="{ attrs, on }">
          <span
            class="button-item"
            v-bind="attrs"
            v-on="on"
          >
            <v-btn @click="show = !show" text style="text-transform: capitalize; font-size: 16px; color: #000000; font-weight: 500; margin-right: -31px;">
              <v-icon small class="mr-1">mdi-shield-check</v-icon>
              {{ $t('common.header_sample_page') }}
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </span>
        </template>
        <div class="mega-menu">
          <v-container class="max-md">
            <v-row>
              <v-col
                v-for="(subitem, index) in item.child"
                :key="index"
                sm="3"
              >
                <v-list class="mt-3">
                  <v-subheader class="title-mega">{{ subitem.name }}</v-subheader>
                  <img :src="subitem.thumb" alt="thumbnail" class="thumb-menu" />
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
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-menu>
      <!-- Single Nav -->
      <v-btn
        v-else
        :href="item.link"
        :class="{ current: curURL === (curOrigin+langPath+item.link)}"
      >
        {{ item.name }}
      </v-btn>
    </fragment>
  </div>
</template>

<style lang="scss" scoped>
@import '../header-style.scss';
</style>

<script>
import Submenu from './SubMenuClick'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Submenu
  },
  data() {
    return {
      hover: false,
      curURL: '',
      curOrigin: '',
      langPath: '',
      show: false
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
    }
  }
}
</script>

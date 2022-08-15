<template>
  <div>
    <div class="accordion">
      <h4 class="use-text-subtitle mb-3">
        Kenapa Harus Jagain
      </h4>
      <v-expansion-panels
        v-model="panel"
        active-class="expanded"
      >
        <v-expansion-panel
          v-for="(item, index) in faqData"
          :key="index"
          class="paper"
        >
          <v-expansion-panel-header class="content">
            <span class="heading">
              {{ item.q }}
            </span>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="detail">
            <span>
              {{ item.a }}
            </span>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="accordion">
      <h4 class="use-text-subtitle mb-3">
        Keuntungan Menggunakan Jagain
      </h4>
      <v-expansion-panels
        v-model="panel1"
        active-class="expanded"
      >
        <v-expansion-panel
          v-for="(item, index) in faqData1"
          :key="index"
          class="paper"
        >
          <v-expansion-panel-header class="content">
            <span class="heading">
              {{ item.q }}
            </span>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="detail">
            <span>
              {{ item.a }}
            </span>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
@import './faq-style.scss';
</style>

<script>
import Hidden from '../Hidden'

const faqData = [
  {
    q: 'Apa itu aplikasi Jagain?',
    a:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.'
  },
  {
    q: 'Mengapa Harus Jagain?',
    a:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    q: 'Bagaimana cara kerja dari Jagain?',
    a:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  }
]
const faqData1 = [
  {
    q: 'Polisnya berapa lama sampai jadi?',
    a:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.'
  },
  {
    q: 'Apakah Mendapatkan Diskon?',
    a:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  },
  {
    q: 'Bagaimana Promonya?',
    a:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
  }
]

export default {
  components: {
    Hidden
  },
  data() {
    return {
      panel: 0,
      faqData: faqData,
      panel1: 1,
      faqData1: faqData1
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>

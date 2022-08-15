<template>
  <v-container class="fixed-width">
    <div class="root">
      <img
        v-for="(logo, index) in logos"
        :key="index"
        :src="logo"
        :alt="'logo' + index"
      >
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import './logo-style.scss';
</style>

<script>
export default {
  data() {
    return {
      logos: [
        'https://res.cloudinary.com/kbru/image/upload/v1641545793/jagain/assets/partner/lippo.png',
        'https://res.cloudinary.com/kbru/image/upload/v1606218029/jagain/assets/partner/avrist_old.png',
        'https://res.cloudinary.com/kbru/image/upload/v1639465762/jagain/assets/partner/sinarmas.png',
        'https://res.cloudinary.com/kbru/image/upload/v1639465762/jagain/assets/partner/mag.png',
        'https://res.cloudinary.com/kbru/image/upload/v1639465762/jagain/assets/partner/kb.png',
        'https://res.cloudinary.com/kbru/image/upload/v1639465762/jagain/assets/partner/insurtech.png',
        'https://res.cloudinary.com/kbru/image/upload/v1639104250/jagain/assets/partner/simasjiwa.png',
        'https://res.cloudinary.com/kbru/image/upload/v1606218031/jagain/assets/partner/adira.png',
        'https://res.cloudinary.com/kbru/image/upload/v1606218029/jagain/assets/partner/axa.png'
      ]
    }
  }
}
</script>

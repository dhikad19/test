<template>
    <div class="topup-wrap">
        <div class="topup-container">
            <h2 class="mb-8">Bills & Top Up</h2>
            <div class="topup-list">
                <a :href="item.link" v-for="(item, index) in topupData" :key="index">
                    <div class="topup-content">
                        <div class="img-wrapper">
                            <v-img :src="item.img"></v-img>
                        </div>
                        <p>{{item.title}}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './TopUp.scss';
</style>

<script>
export default {
  data() {
    return {
      topupData: [
        {
          img: '/bills/pln-sm.png',
          title: 'Tagihan PLN',
          link: '/bills/tagihanpln'
        },
        {
          img: '',
          title: 'Token PLN',
          link: '/bills/tokenpln'
        },
        {
          img: '',
          title: 'BPJS Kesehatan',
          link: '/bills/bpjskesehatan'
        },
        {
          img: '/bills/telkom-sm.png',
          title: 'Telkom',
          link: '/bills/telkom'
        },
        {
          img: '/bills/prepaid-sm.png',
          title: 'Pulsa Prabayar',
          link: '/bills/pulsaprabayar'
        },
        {
          img: '/bills/postpaid-sm.png',
          title: 'Pulsa Pascabayar',
          link: '/bills/pulsapascabayar'
        },
        {
          img: '/bills/pbb-sm.png',
          title: 'Pajak PBB',
          link: '/bills/pajakpbb'
        },
        {
          img: '/bills/tv-kabel-sm.png',
          title: 'TV Kabel',
          link: ''
        },
        {
          img: '/bills/pdam-sm.png',
          title: 'PDAM',
          link: ''
        },
        {
          img: '',
          title: 'Paket Data',
          link: ''
        },
        {
          img: '',
          title: 'Voucher Belanja',
          link: ''
        },
        {
          img: '/bills/voucher-game-sm.png',
          title: 'Voucher Games',
          link: ''
        },
        {
          img: '/bills/cicilan-sm.png',
          title: 'Angsuran Kredit',
          link: ''
        },
        {
          img: '',
          title: 'E-Wallet',
          link: ''
        },
        {
          img: '',
          title: 'E-Toll',
          link: ''
        },
        {
          img: '/bills/zakat-sm.png',
          title: 'Zakat',
          link: ''
        }
      ]
    }
  }
}
</script>

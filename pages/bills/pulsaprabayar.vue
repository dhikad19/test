<template>
    <div class="prabayar-section">
        <main-header />
            <div class="slide-container">
                <v-carousel
                    cycle
                    height="270"
                    hide-delimiter-background
                    show-arrows-on-hover
                >
                    <v-carousel-item
                        v-for="(item, i) in items"
                        :key="i"
                        :src="item.src"
                        contain
                        center
                    >
                    </v-carousel-item>
                </v-carousel>
            </div>
            <div class="option-container">
                <v-slide-group
                    class="mt-6 mb-4"
                    center-active
                >
                    <v-slide-item
                        v-for="item in topupData"
                        :key="item"
                    >
                        <v-card
                            class="mx-auto mr-6"
                            max-width="270"
                            outlined
                            style="border-radius: 2px"
                        >
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h6 mb-1">
                                        {{item.title}}
                                    </v-list-item-title>
                                    <v-list-item-subtitle>{{ item.desc }}</v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-avatar tile size="60">
                                    <v-img :src="item.img"></v-img>
                                </v-list-item-avatar>
                            </v-list-item>
                            <v-card-actions>
                                <v-btn
                                    outlined
                                    text
                                    :href="item.link"
                                >
                                    Beli
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-slide-item>
                </v-slide-group>
            </div>
            
            <div class="bills-content">
                <h2>Pulsa Prabayar</h2>
                <v-form class="mt-6 mb-2">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="number"
                                label="Nomor Telepon"
                                type="number"
                                :rules="validating"
                                placeholder="Examples: 081234567890"
                            >
                                <template v-slot:prepend>
                                    <v-tooltip
                                        top
                                    >
                                        <template v-slot:activator="{ on }">
                                            <v-icon v-on="on">
                                                mdi-information
                                            </v-icon>
                                        </template>
                                        Nomor Ponsel Anda
                                    </v-tooltip>
                                </template>
                                <template v-slot:append>
                                    <v-fade-transition leave-absolute>
                                        <v-img height="24" width="24" v-if="number.length >= 10" src="/bills/prepaid-sm.png"></v-img>
                                        <v-img height="24" width="24" v-else></v-img>
                                    </v-fade-transition>
                                </template>
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-form>
            </div>
            <div class="nominal mb-6">
                <v-col style="width: 100%">
                    <p style="text-align: left">Nominal</p>
                    <v-btn-toggle
                        mandatory
                        v-model="harga"
                        color="black accent-3"
                        group
                        style="display: flex; flex-wrap: wrap; align-items: center; justify-content: flex-start;"
                    >
                        <v-btn 
                            style=" border-radius: 2px; border: 1px solid rgb(212, 212, 212); color: #4f4f4f;" 
                            :value="number.value"
                            v-for="number in nominal"
                            :key="number"
                            :v-model="harga.name"
                            class="harga"
                        >
                            {{ number.name }}
                        </v-btn>
                    </v-btn-toggle>
                    <div class="mt-6 card" elevation="4">
                        <v-card-subtitle><b>Keterangan</b></v-card-subtitle>
                        <v-card-text style="margin-top: -10px">{{harga[1]}}</v-card-text>
                    </div>
                    <div class="payment">
                        <p class="mt-5 desc">Harga: <b>{{harga[0]}}</b></p>
                        <v-btn color="#4f4f4f" dark class="pay-btn mt-5" style="padding: 20px 35px 20px 35px">Bayar</v-btn>
                    </div>
                </v-col>
            </div>
        <div id="footer">
            <main-footer />
        </div>
    </div>
</template>

<style lang="scss">
@import './BillsStyle.scss';
</style>

<script>
import Header from '~/components/Header/Mega'
import Footer from '~/components/Footer'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer
  },
  data() {
    return {
      number: '',
      numbers: [],
      harga: '',
      option: null,
      validating: [
        v => !!v || 'Kolom perlu diisi',
        v =>
          (v && v.length <= 13) || 'Nomor terlalu panjang, maksimum 13 karakter'
      ],
      topupData: [
        {
          img: '/bills/pln-sm.png',
          title: 'Tagihan PLN',
          link: '/bills/tagihanpln',
          desc: 'Bayar tagihan PLN lebih murah di Jagain'
        },
        {
          img: '',
          title: 'Token PLN',
          link: '/bills/tokenpln',
          desc: 'Beli token PLN, banyak promonya. Cek sekarang!'
        },
        {
          img: '',
          title: 'BPJS Kesehatan',
          link: '/',
          desc: 'Bayar BPJS kesehatan makin mudah di Jagain!'
        },
        {
          img: '/bills/prepaid-sm.png',
          title: 'Pulsa Prabayar',
          link: '/bills/pulsaprabayar',
          desc: 'Beli pulsa gak perlu repot lagi keluar rumah!'
        },
        {
          img: '/bills/postpaid-sm.png',
          title: 'Pulsa Pascabayar',
          link: '/',
          desc: 'Bayar tagihan pulsa pascabayar disini!'
        },
        {
          img: '/bills/pbb-sm.png',
          title: 'Pajak PBB',
          link: '/',
          desc: 'Bayar Pajak Bumi dan Bangunan (PBB) di jagain'
        },
        {
          img: '/bills/tv-kabel-sm.png',
          title: 'TV Kabel',
          link: '/',
          desc: 'Bayar tagihan TV Kabel kamu di Tokopedia, banyak untung'
        },
        {
          img: '/bills/pdam-sm.png',
          title: 'PDAM',
          link: '/',
          desc: 'Bayar tagihan PDAM di banyak wilayah di Indonesia'
        },
        {
          img: '',
          title: 'Paket Data',
          link: '/',
          desc: 'Beli paket data disini, ada promo buatmu'
        },
        {
          img: '',
          title: 'Voucher Belanja',
          link: '/',
          desc: 'Banyak pilihan voucher populer yang bisa kamu beli'
        },
        {
          img: '/bills/voucher-game-sm.png',
          title: 'Voucher Games',
          link: '/',
          desc: 'Beragam jenis voucher dari games populer'
        },
        {
          img: '/bills/cicilan-sm.png',
          title: 'Angsuran Kredit',
          link: '/',
          desc: 'Bayar angsuran kreditmu di Jagain'
        },
        {
          img: '',
          title: 'E-Wallet',
          link: '/',
          desc: 'Beli saldo E-Wallet disini, ada cashback buatmu'
        },
        {
          img: '',
          title: 'E-Toll',
          link: '/',
          desc: 'Isi saldo E-Toll anda disini, diskon 5%'
        },
        {
          img: '/bills/zakat-sm.png',
          title: 'Zakat',
          link: '/',
          desc: 'Salurkan Bantuan Untuk saudara kita yang membutuhkan'
        }
      ],
      nominal: [
        {
          name: 'Rp 15.000',
          value: ['Rp 17.000', 'Masa Berlaku 20 Hari']
        },
        {
          name: 'Rp 25.000',
          value: ['Rp 27.000', 'Masa Berlaku 30 Hari']
        },
        {
          name: 'Rp 30.000',
          value: ['Rp 32.000', 'Masa Berlaku 30 Hari']
        },
        {
          name: 'Rp 40.000',
          value: ['Rp 42.000', 'Masa Berlaku 30 Hari']
        },
        {
          name: 'Rp 50.000',
          value: ['Rp 52.000', 'Masa Berlaku 45 Hari']
        },
        {
          name: 'Rp 75.000',
          value: ['Rp 77.000', 'Masa Berlaku 45 Hari']
        },
        {
          name: 'Rp 100.000',
          value: ['Rp 102.000', 'Masa Berlaku 60 Hari']
        },
        {
          name: 'Rp 150.000',
          value: ['Rp 152.000', 'Masa Berlaku 120 Hari']
        },
        {
          name: 'Rp 200.000',
          value: ['Rp 202.000', 'Masa Berlaku 150 Hari']
        },
        {
          name: 'Rp 300.000',
          value: ['Rp 302.000', 'Masa Berlaku 180 Hari']
        },
        {
          name: 'Rp 500.000',
          value: ['Rp 502.000', 'Masa Berlaku 240 Hari']
        },
        {
          name: 'Rp 1.000.000',
          value: ['Rp 1.002.000', 'Masa Berlaku 330 Hari']
        }
      ],
      items: [
        {
          src: '/banner/jagainbanner1.png'
        },
        {
          src: '/banner/jagainbanner2.png'
        }
      ]
    }
  }
}
</script>

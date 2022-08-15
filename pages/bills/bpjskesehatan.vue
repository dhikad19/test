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
                <h2>BPJS Kesehatan</h2>
                <v-form class="mt-6 mb-2">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="number"
                                label="Nomor Virtual Account Keluarga / Perusahaan"
                                type="number"
                                :rules="validating"
                                placeholder="Examples: 0000012345678910"
                            >
                                <template v-slot:prepend>
                                    <v-tooltip
                                        top
                                        max-width="190"
                                    >
                                        <template v-slot:activator="{ on }">
                                            <v-icon v-on="on">
                                                mdi-information
                                            </v-icon>
                                        </template>
                                        Nomor virtual account keluarga untuk BPJS Kesehatan Keluarga / Perusahaan
                                    </v-tooltip>
                                </template>
                                <template v-slot:append>
                                    <v-fade-transition leave-absolute>
                                        <v-icon v-if="number.length >= 10">mdi-shield</v-icon>
                                        <v-icon v-else></v-icon>
                                    </v-fade-transition>
                                </template>
                            </v-text-field>
                            <v-select
                                class="mt-4 mb-2"
                                :items="dates"
                                prepend-icon="mdi-calendar"
                                label="Standard"
                                dense
                            ></v-select>
                        </v-col>
                    </v-row>
                </v-form>
            </div>
            <div class="nominal mb-6">
                <v-col style="width: 100%">
                    <div class="card" elevation="4">
                        <v-card-subtitle><b>Keterangan</b></v-card-subtitle>
                        <v-card-text style="margin-top: -10px">Status tagihan BPJS akan diperbarui maks. 3x24 jam (hari kerja) setelah transaksi berhasil.</v-card-text>
                    </div>
                    <div class="payment-tagihan">
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
      validating: [
        v => !!v || 'Kolom perlu diisi',
        v =>
          (v && v.length >= 11) || 'Nomor terlalu pendek, minimal 11 karakter',
        v =>
          (v && v.length <= 16) || 'Nomor terlalu panjang, maksimum 16 karakter'
      ],
      dates: [
        'Agustus 2022',
        'September 2022',
        'Oktober 2022',
        'November 2022',
        'Desember 2022',
        'Januari 2023',
        'Februari 2023',
        'Maret 2023',
        'April 2023',
        'Mei 2023',
        'Juni 2023',
        'Juli 2023'
      ],
      items: [
        {
          src: '/banner/jagainbanner1.png'
        },
        {
          src: '/banner/jagainbanner2.png'
        }
      ],
      topupData: [
        {
          img: '',
          title: 'Token PLN',
          link: '/bills/tokenpln',
          desc: 'Beli token PLN, banyak promonya. Cek sekarang!'
        },
        {
          img: '/bills/pln-sm.png',
          title: 'Tagihan PLN',
          link: '/bills/tagihanpln',
          desc: 'Bayar tagihan PLN lebih murah di Jagain'
        },
        {
          img: '/bills/telkom-sm.png',
          title: 'Telkom',
          link: '/',
          desc: 'Bayar tagihan Telkom Indihome anda disini'
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
      ]
    }
  }
}
</script>

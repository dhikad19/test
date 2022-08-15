<template>
    <div class="footer-container">
        <div class="top-footer">
            <div class="left-container">
                <p class="hashtag">
                    <b>Jagain</b> #TheBestIndonesia'sInsurtechPlatform
                </p>
                <p class="address">
                    Komp. Mega Grosir Cempaka Mas Blok E No. 01 - 06,
                    Jl. Letjen Suprapto, Jakarta, Indonesia - 10640
                </p>
                <div class="list-footer">
                    <a href="tel: 021-42883707" target="_blank"><img src="/icon/telephone.png" alt=""><p  style="color: #4f4f4f;">021-42883707 (Ext.429)</p></a>
                    <a href="mailto: cs@jagain.com"><img src="/icon/mail.png" alt=""><p style="color: #4f4f4f;">cs@jagain.com</p></a>
                    <a href="https://www.google.com/maps/place/PT+KBRU+Insurance+Brokers/@-6.1646358,106.8708843,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f50f7a7454a1:0x31f6a3a11eef21d3!8m2!3d-6.1646411!4d106.873073" target="_blank"><img src="/icon/clock.png" alt=""><p  style="color: #4f4f4f;">Senin - Jumat</p></a>
                    <a href="https://www.google.com/maps/place/PT+KBRU+Insurance+Brokers/@-6.1646358,106.8708843,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f50f7a7454a1:0x31f6a3a11eef21d3!8m2!3d-6.1646411!4d106.873073" target="_blank"><v-icon style="color: transparent">mdi-clock</v-icon><p  style="color: #4f4f4f;">08.00 WIB - 17.00 WIB</p></a>
                </div>
                <div class="logo-wrapper">
                    <div class="logo-footer">
                        <div class="logo-company">
                            <p>Powered By</p>
                            <img style="height: 28px" class="mr-2" src="/icon/kbru 2.png" alt="kbru">
                        </div>
                        <div class="logo-company">
                            <p>Registered & Overseen By</p>
                            <img style="height: 28px" src="/icon/ojk 2.png" alt="ojk">
                        </div>
                    </div>
                    <div class="logo-footer1">
                        <div class="logo-company1">
                            <p>KBRU Is Member Of</p>
                            <div class="img-wrapper">
                                <img style="height: 28px" class="mr-4" src="/icon/apparindo 1.png" alt="apparindo">
                                <img style="height: 28px" src="/icon/wbn 1.png" alt="wbn">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row-mobile">
                <div class="center-footer">
                    <div class="center-left">
                        <ul>
                            <li class="mb-3" style="font-size: 16px;"><b>About</b></li>
                            <li class="mb-2" style="font-size: 14px;" v-for="item in listAbout" :key="item"><nuxt-link :to="item.link" style=" color: #4F4F4F; text-decoration: none;" >{{item.text}}</nuxt-link></li>
                        </ul>
                    </div>
                    <div class="center-right">
                        <ul>
                            <li class="mb-3" style="font-size: 16px;"><b>Protection</b></li>
                            <li class="mb-2" style="font-size: 14px;" v-for="item in listProtection" :key="item"><nuxt-link :to="item.link" style=" color: #4F4F4F; text-decoration: none;" >{{item.text}}</nuxt-link></li>
                        </ul>
                    </div>
                </div>
                <div class="right-footer">
                    <div class="social-section">
                        <h3 class="title-social">
                            Follow & Subscribe
                        </h3>
                        <div class="social-icons">
                            <a href="https://www.instagram.com/jagaindotcom/?hl=en" target="_blank"><img src="/icon/instagram.png" alt="instagram"></a>
                            <a href="https://www.linkedin.com/company/jagaincom/?originalSubdomain=id" target="_blank"><img src="/icon/linkedin.png" alt="linkedin"></a>
                            <a href="https://www.facebook.com/Jagaindotcom/" target="_blank"><img src="/icon/facebook.png" alt="facebook"></a>
                            <a href="https://twitter.com/Jagaindotcom/" target="_blank"><img src="/icon/twitter.png" alt="twitter"></a>
                            <a href="https://www.youtube.com/channel/UC2MQvIBT_BHaPif_yErNXaA" target="_blank"><img src="/icon/youtube.png" alt="youtube"></a>                        </div>
                        </div>
                        <div class="support-footer">
                            <h3 class="title-office mt-2">
                                Supported By
                            </h3>
                            <div class="support-container">
                                <img src="https://res.cloudinary.com/kbru/image/upload/v1628814273/jagain/v2/assets/icons/payments/visamaster_160_72_bqxkkp.png" alt="">
                                <img src="https://res.cloudinary.com/kbru/image/upload/v1628814273/jagain/v2/assets/icons/payments/sinarmas_160_72_dbbel8.png" alt="">
                                <img src="https://res.cloudinary.com/kbru/image/upload/v1628814273/jagain/v2/assets/icons/payments/shopeepay_160_72_dote3l.png" alt="">
                                <img src="https://res.cloudinary.com/kbru/image/upload/v1628814273/jagain/v2/assets/icons/payments/mandiriclickpay_160_72_cu9gl5.png" alt="">
                                <img src="https://res.cloudinary.com/kbru/image/upload/v1628814272/jagain/v2/assets/icons/payments/linkaja_160_72_vroqnj.png" alt="">
                                <img src="https://res.cloudinary.com/kbru/image/upload/v1628814271/jagain/v2/assets/icons/payments/bni_160_72_wszgku.png" alt="">
                                <img src="https://res.cloudinary.com/kbru/image/upload/v1628814271/jagain/v2/assets/icons/payments/ovo_160_72_t1cjdn.png" alt="">
                                <img src="https://res.cloudinary.com/kbru/image/upload/v1628814271/jagain/v2/assets/icons/payments/permata_160_72_ixdy67.png" alt="">
                                <img src="https://res.cloudinary.com/kbru/image/upload/v1628814271/jagain/v2/assets/icons/payments/maybank_160_72_qwuphi.png" alt="">
                                <img src="https://res.cloudinary.com/kbru/image/upload/v1628814270/jagain/v2/assets/icons/payments/kredivo_160_72_my2jbh.png" alt="">
                                <img src="https://res.cloudinary.com/kbru/image/upload/v1628814270/jagain/v2/assets/icons/payments/danamon_160_72_ydssnd.png" alt="">
                                <img src="https://res.cloudinary.com/kbru/image/upload/v1628814270/jagain/v2/assets/icons/payments/dana_160_72_cknxao.png" alt="">
                                <img src="https://res.cloudinary.com/kbru/image/upload/v1628814270/jagain/v2/assets/icons/payments/bca_160_72_lyeodk.png" alt="">
                                <img src="https://res.cloudinary.com/kbru/image/upload/v1628814270/jagain/v2/assets/icons/payments/gopay_160_72_jlg0tq.png" alt="">
                            </div>
                            <div class="apps-footer">
                                <div class="apps-container">
                                    <a href="https://play.google.com/store/apps/details?id=com.jagain" target="_blank"><img src="/icon/playstore.png" alt=""></a>
                                    <a href="https://apps.apple.com/id/app/jagain/id1449945123?l=id" target="_blank"><img src="/icon/appstore.png" alt=""></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div class="bottom-footer">
            <p><b>Jagain</b> © Copyright {{new Date().getFullYear()}}. All Right Reserved</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './FooterStyle.scss';
</style>

<script>
export default {
  data: () => ({
    listAbout: [
      {
        text: 'About Us',
        link: '#'
      },
      {
        text: 'FAQ',
        link: '#'
      },
      {
        text: 'Contact Us',
        link: '#'
      },
      {
        text: 'Articles',
        link: '#'
      },
      {
        text: 'Careers',
        link: '#'
      },
      {
        text: 'Terms & Condition',
        link: '#'
      },
      {
        text: 'Privacy Policy',
        link: '#'
      }
    ],
    listProtection: [
      {
        text: 'Car',
        link: '#'
      },
      {
        text: 'Accident',
        link: '#'
      },
      {
        text: 'Flight Delay',
        link: '#'
      },
      {
        text: 'Bicycle',
        link: '#'
      },
      {
        text: 'Home',
        link: '#'
      },
      {
        text: 'Apartment',
        link: '#'
      },
      {
        text: 'Life',
        link: '#'
      },
      {
        text: 'Health',
        link: '#'
      },
      {
        text: 'Villa',
        link: '#'
      },
      {
        text: 'Pet',
        link: '#'
      },
      {
        text: 'Shophouse',
        link: '#'
      },
      {
        text: 'Office',
        link: '#'
      }
    ]
  })
}
</script>

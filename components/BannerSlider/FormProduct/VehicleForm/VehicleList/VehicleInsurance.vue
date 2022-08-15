<template>
    <v-container>
        <v-col
          v-for="item in items"
          :key="item"
          cols="12"
        >
            <v-card
                class="mx-auto my-1"
                max-width="550"
                elevation="4"
            >
                <v-img
                    contain
                    height="50"
                    :src="item.src"
                    class="my-2"
                ></v-img>
                <v-divider class="mx-4"></v-divider>
                <v-card-title>{{item.title}}</v-card-title>
                <v-card-text>
                    <v-row
                        align="center"
                        class="mx-0"
                    >
                        <span style="text-decoration: line-through">{{item.price}}</span>
                    </v-row>
                    <div class="my-3 text-subtitle-1">
                        {{item.total}} <v-chip style="margin-top: -5px" class="ml-1" small color="green" text-color="white">{{item.discount}}</v-chip>
                    </div>
                    <ul
                    v-for="(i, index) in item.desc"
                        :key="index">
                        <li>{{i}}</li>
                    </ul>
                </v-card-text>
                <v-card-actions>
                    <v-btn
                        color="deep-purple lighten-2"
                        text
                        @click="reserve"
                    >
                        Info
                    </v-btn>
                    <v-btn
                        color="deep-purple lighten-2"
                        text
                        @click="reserve"
                    >
                        Choose
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-container>
</template>

<style lang="scss" scoped>
@import '../VehicleStyle.scss';
</style>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
    items: [
      {
        src: '/images/partner/partner4.png',
        title: 'Comprehensive',
        price: 'Rp500.000',
        total: 'Rp350.000',
        discount: '30%',
        desc: [
          'Diskon hingga Rp50.000',
          'Proteksi maksimal, kerusakan yang diakibatkan kecelakaan dan pencurian',
          'Santunan meninggal karna apapun'
        ]
      },
      {
        src: '/images/partner/partner3.png',
        title: 'Siji Guard 1 Plan 6',
        price: 'Rp400.000',
        total: 'Rp320.000',
        discount: '20%',
        desc: ['Diskon Hingga 50 ribu', 'Santunan meninggal karna apapun']
      }
    ]
  }),

  methods: {
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    }
  }
}
</script>

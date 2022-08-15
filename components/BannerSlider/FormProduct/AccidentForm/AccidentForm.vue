<template>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col cols="12" md="12" sm="12">
                    <v-dialog
                        ref="dialog"
                        v-model="modal"
                        :close-on-content-click="false"
                        persistent
                        width="290px"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="date"
                            :value="date"
                            clearable 
                            @click:clear="date = null"
                            label="Birth Date"
                            prepend-icon="mdi-calendar"
                            v-bind="attrs"
                            :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                            min="1950-01-01"
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="date"
                            scrollable
                        >
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            color="primary"
                            @click="modal = false"
                        >
                        Cancel
                        </v-btn>
                        <v-btn
                            text
                            color="primary"
                            @click="modal = false"
                        >
                        OK
                        </v-btn>
                    </v-date-picker>
                </v-dialog>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6" sm="12">
                    <v-select
                        :items="option"
                        label="Job"
                        prepend-icon="mdi-book"
                    ></v-select>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <v-select
                        :items="option1"
                        label="Policy For"
                        prepend-icon="mdi-account-check"
                    ></v-select>
                </v-col>
            </v-row>
                <v-row>
                    <v-col col="12" md="8" sm="12">
                        <v-dialog
                        ref="dialog"
                        v-model="dateRangeText"
                        :return-value.sync="dates"
                        :close-on-content-click="false"
                        persistent
                        width="290px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="dateRangeText"
                                clearable
                                @click:clear="date = null"
                                label="Policy Start Period"
                                prepend-icon="mdi-calendar"
                                v-bind="attrs"
                                v-on="on"
                                readonly
                            ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="dates"
                                range
                            >
                            <v-spacer></v-spacer>
                            <v-btn
                                text
                                color="primary"
                                @click="$refs.dialog.save(dates)"
                            >
                            OK
                            </v-btn>
                            </v-date-picker>
                        </v-dialog>
                    </v-col>
                    <v-col cols="12" md="4" sm="12">
                        <v-radio-group
                            v-model="row"
                            row
                            >
                            <v-radio
                                label="Male"
                                value="Laki-Laki"
                            ></v-radio>
                            <v-radio
                                label="Female"
                                value="Perempuan"
                            ></v-radio>
                            </v-radio-group>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="6" sm="12">
                        <v-select
                            v-model="length"
                            item-value='name'
                            item-text='option2'
                            :items="option2"
                            label="Coverage Period"
                            prepend-icon="mdi-calendar-range"
                        ></v-select>
                    </v-col>
                    <v-col cols="12" md="6" sm="12">
                        <v-select
                            v-if="length === 'Tahunan'"
                            :items="option3"
                            label="Length of Coverage"
                            prepend-icon="mdi-calendar-range"
                        ></v-select>
                        <v-select
                            v-else-if="length === 'Bulanan'"
                            :items="option4"
                            label="Length of Coverage"
                            prepend-icon="mdi-calendar-range"
                        ></v-select>
                        <v-select
                            v-else-if="length === 'Mingguan'"
                            :items="option5"
                            label="Length of Coverage"
                            prepend-icon="mdi-calendar-range"
                        ></v-select>
                        <v-select
                            v-else-if="length === 'Harian'"
                            :items="option6"
                            label="Length of Coverage"
                            prepend-icon="mdi-calendar-range"
                        ></v-select>
                        <v-select
                            v-else
                            disabled
                            label="Length of Coverage"
                            prepend-icon="mdi-calendar-range"
                        ></v-select>
                    </v-col>
                </v-row>
        </v-container>
    </v-form>
</template>

<script>
import moment from 'moment'

export default {
  data: () => ({
    valid: false,
    toggle_exclusive: undefined,
    firstname: '',
    lastname: '',
    name: '',
    length: '',
    modal: false,
    date: null,
    dates: [],
    option: [
      'Ahli Bedah',
      'Aktor',
      'Akuntan',
      'Arsitek',
      'Artis',
      'Bankir',
      'Buruh Pabrik',
      'Collector',
      'Dokter',
      'Dokter Gigi',
      'Dosen',
      'Driver',
      'Guru',
      'Ibu Rumah Tangga',
      'Insinyur Bukan Lapangan',
      'Insinyur Pelaksana Lapangan',
      'Juru Tulis',
      'Pekerja Kantoran',
      'Pekerja Kantoran Dengan Perjalanan Dinas'
    ],
    option1: [
      'Diri Sendiri',
      'Orang Tua',
      'Saudara Kandung',
      'Suami',
      'Istri',
      'Anak'
    ],
    option2: ['Tahunan', 'Bulanan', 'Mingguan', 'Harian'],
    option3: ['1 Tahun'],
    option4: [
      '1 Bulan',
      '2 Bulan',
      '3 Bulan',
      '4 Bulan',
      '5 Bulan',
      '6 Bulan',
      '7 Bulan',
      '8 Bulan',
      '9 Bulan',
      '10 Bulan',
      '11 Bulan'
    ],
    option5: ['1 Minggu', '2 Minggu', '3 Minggu'],
    option6: ['1 Hari', '2 Hari', '3 Hari', '4 Hari', '5 Hari', '6 Hari'],
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  computed: {
    computedDateFormattedMomentjs() {
      return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
    },
    dateRangeText() {
      return this.dates.join('~')
    }
  }
}
</script>

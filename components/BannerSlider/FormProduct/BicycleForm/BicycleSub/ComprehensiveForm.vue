<template>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col cols="12" md="6" sm="12">
                    <v-select
                        :items="option"
                        label="Merk / Brand"
                        prepend-icon="mdi-bicycle"
                    ></v-select>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <v-select
                        :items="year"
                        label="Year of Purchase"
                        prepend-icon="mdi-calendar"
                    ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6" sm="12">
                    <v-text-field
                        type="number"
                        prepend-icon="mdi-tag"
                        label="Bycicle Price"
                    />
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <v-select
                        v-model="additional"
                        :items="sparepart"
                        :menu-props="{ maxHeight: '400' }"
                        label="Select"
                        multiple
                        prepend-icon="mdi-tire"
                        hint="Pick Your Additional"
                        persistent-hint
                    ></v-select>
                </v-col>
            </v-row>
                <v-row>
                    <v-col cols="12" md="12" sm="12">
                        <v-dialog
                        ref="dialog"
                        v-model="modalBirth"
                        :close-on-content-click="false"
                        persistent
                        width="290px"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="dateBirth"
                            :value="dateBirth"
                            clearable 
                            @click:clear="date = null"
                            label="Protection Start Date"
                            prepend-icon="mdi-calendar"
                            v-bind="attrs"
                            :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                            min="1950-01-01"
                            persistent-hint
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="dateBirth"
                            scrollable
                        >
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            color="primary"
                            @click="modalBirth = false"
                        >
                        Cancel
                        </v-btn>
                        <v-btn
                            text
                            color="primary"
                            @click="modalBirth = false"
                        >
                        OK
                        </v-btn>
                    </v-date-picker>
                </v-dialog>
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
    modalStart: false,
    modalEnd: false,
    modalBirth: false,
    dateBirth: null,
    dateStart: null,
    dateEnd: null,
    dates: [],
    year: [
      '2000',
      '2001',
      '2002',
      '2003',
      '2004',
      '2005',
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
      '2020',
      '2021',
      '2022'
    ],
    sparepart: ['Velg & Ban', 'Frame', 'Handlebar', 'Other'],
    option: [
      'Atlantis',
      'Avand',
      'Aviator',
      'Genio',
      'Odessy',
      'Pacific',
      'Polygon',
      'Senator',
      'Thrill',
      'Turanza',
      'United',
      'Wimcycle'
    ],
    area: ['Domestik', 'International'],
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

<template>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col cols="12" md="6" sm="12">
                    <v-select
                        :items="province"
                        item-text='name'
                        item-value='id'
                        label="Province"
                        prepend-icon="mdi-home-search"
                        v-model="province"
                    ></v-select>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <v-select
                        :items="district"
                        item-text='name'
                        item-value='id'
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
import provinces from '~/static/api/province'
import districts from '~/static/api/districts'
import subdistricts from '~/static/api/subdistrict'

export default {
  data: () => ({
    valid: false,
    toggle_exclusive: undefined,
    firstname: '',
    lastname: '',
    province: provinces,
    district: districts,
    subdistrict: subdistricts,
    name: '',
    length: '',
    modalStart: false,
    modalEnd: false,
    modalBirth: false,
    dateBirth: null,
    dateStart: null,
    dateEnd: null,
    dates: [],
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

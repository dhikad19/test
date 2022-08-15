<template>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col cols="12" md="6" sm="12">
                    <v-select
                        :items="option"
                        label="Type Travel"
                        prepend-icon="mdi-airplane"
                    ></v-select>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <v-select
                        :items="area"
                        label="Travel Area"
                        prepend-icon="mdi-earth"
                        v-model="country"
                    ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6" sm="12">
                    <v-select
                        :items="items"
                        item-text='name'
                        v-model="negara1"
                        item-value='name'
                        label="Country of Origin"
                        prepend-icon="mdi-map-marker-left"
                    ></v-select>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <v-select
                        v-if="country === 'Domestik'"
                        :items="domestik"
                        label="Destination"
                        item-text='name'
                        v-model="negara1"
                        item-value='name'
                        prepend-icon="mdi-map-marker-right"
                    ></v-select>
                    <v-select
                        v-else-if="country === 'International'"
                        :items="items"
                        item-text='name'
                        v-model="negara1"
                        item-value='name'
                        label="Destination"
                        prepend-icon="mdi-map-marker-right"
                    ></v-select>
                    <v-select
                        v-else
                        disabled
                        label="Destination"
                        prepend-icon="mdi-map-marker-right"
                    ></v-select>
                </v-col>
            </v-row>
                <v-row>
                    <v-col col="12" md="6" sm="12">
                        <v-select
                            :items="member"
                            label="Family Member"
                            prepend-icon="mdi-home"
                            multiple
                            v-model="country"
                        ></v-select>
                    </v-col>
                    <v-col cols="12" md="6" sm="6">
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
                            label="Date of Birth"
                            prepend-icon="mdi-calendar"
                            v-bind="attrs"
                            hint="Pemegang Polis adalah dewasa usia 19 tahun maksimal 70 tahun, dan turut serta dalam perjalanan"
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
                <v-row>
                    <v-col cols="12" md="6" sm="12">
                        <v-dialog
                            ref="dialog"
                            v-model="modalStart"
                            :close-on-content-click="false"
                            persistent
                            width="290px"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="dateEnd"
                                :value="dateEnd"
                                clearable 
                                @click:clear="date = null"
                                label="Travel Start Date"
                                prepend-icon="mdi-calendar-range"
                                v-bind="attrs"
                                :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                                min="1950-01-01"
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="dateEnd"
                                scrollable
                            >
                            <v-spacer></v-spacer>
                            <v-btn
                                text
                                color="primary"
                                @click="modalStart = false"
                            >
                            Cancel
                            </v-btn>
                            <v-btn
                                text
                                color="primary"
                                @click="modalStart = false"
                            >
                            OK
                            </v-btn>
                        </v-date-picker>
                    </v-dialog>
                    </v-col>
                    <v-col cols="12" md="6" sm="12">
                        <v-dialog
                        ref="dialog"
                        v-model="modalEnd"
                        :close-on-content-click="false"
                        persistent
                        width="290px"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="dateStart"
                            :value="dateStart"
                            clearable 
                            @click:clear="date = null"
                            label="Travel End Date"
                            prepend-icon="mdi-calendar-range"
                            v-bind="attrs"
                            :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                            min="1950-01-01"
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="dateStart"
                            scrollable
                        >
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            color="primary"
                            @click="modalEnd = false"
                        >
                        Cancel
                        </v-btn>
                        <v-btn
                            text
                            color="primary"
                            @click="modalEnd = false"
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
import international from '~/static/api/international'
import domestic from '~/static/api/domestic'

export default {
  data: () => ({
    valid: false,
    toggle_exclusive: undefined,
    firstname: '',
    lastname: '',
    name: '',
    country: '',
    items: international,
    domestik: domestic,
    length: '',
    modalStart: false,
    modalEnd: false,
    modalBirth: false,
    dateBirth: null,
    dateStart: null,
    dateEnd: null,
    dates: [],
    member: [
      'Diri Sendiri',
      'Orang Tua',
      'Saudara Kandung',
      'Suami',
      'Istri',
      'Anak'
    ],
    option: ['Singkat', 'Tahunan'],
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

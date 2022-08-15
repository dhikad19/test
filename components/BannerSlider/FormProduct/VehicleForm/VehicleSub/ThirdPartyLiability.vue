<template>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col cols="12" md="6" sm="12">
                    <v-select
                        :items="option"
                        label="Transportation Type"
                        prepend-icon="mdi-steering"
                    ></v-select>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <v-text-field
                        label="Merk / Brand"
                        prepend-icon="mdi-car"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6" sm="12">
                    <v-text-field
                        label="Type / Model"
                        prepend-icon="mdi-car-multiple"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <v-text-field
                        label="License Plate"
                        prepend-icon="mdi-map-marker-radius"
                    ></v-text-field>
                </v-col>
            </v-row>
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
                            label="Production Date"
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
                        <v-text-field
                            label="Vehicle Price"
                            prepend-icon="mdi-tag"
                            type="number"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" sm="12">
                        <v-text-field
                            label="Sum Insured"
                            prepend-icon="mdi-tag"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col col="12" md="12" sm="12">
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
                                label="Protection Period"
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
    modal: false,
    date: null,
    dates: [],
    option: ['Car', 'Motorcyle', 'Truck & Pickup'],
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

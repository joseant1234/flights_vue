<template>
  <div>
    <md-autocomplete v-model="selectedAirport" :md-options="airports" @md-changed="getAirports" @md-opened="getAirports">
      <label>Airport</label>
      <template slot="md-autocomplete-item" slot-scope="{ item }">{{ item.country }} | {{ item.city }} | {{ item.name }}</template>
    </md-autocomplete>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
  import axios from 'axios';
  import environment from '../environment/environment';

  export default {
    name: "AirportAutocomplete",
    data: () => ({
      airports: [],
      selectedAirport: ""
    }),
    methods: {
      getAirports (term) {
        this.airports = new Promise(resolve => {
          window.setTimeout(() => {
            if (!term) {
              resolve([])
            } else {
              axios.get(environment.HOST + '/airports', {
                params: {
                  term
                }
              }).then(res => {
                resolve(res.data)
              })
              .catch(err => {
                console.log(err)
              })
            }
          }, 500)
        })
      }
    }
  }
</script>

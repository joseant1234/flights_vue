<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">
          Flight searcher
        </div>
      </md-card-header>
      <md-card-content>
        <airport-autocomplete>

        </airport-autocomplete>
      </md-card-content>
    </md-card>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import AirportAutocomplete from '../components/AirportAutocomplete.vue';

export default {
  name: 'Search',
  components: {
    AirportAutocomplete
  }
}

</script>

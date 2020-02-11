<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Flight App</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Menu</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>search</md-icon>
            <span class="md-list-item-text">Search</span>
          </md-list-item>

          <md-list-item>
            <md-icon>flight_land</md-icon>
            <span class="md-list-item-text">Flights</span>
          </md-list-item>

          <md-list-item>
            <md-icon>flight</md-icon>
            <span class="md-list-item-text">Airports</span>
          </md-list-item>


        </md-list>
      </md-app-drawer>

      <md-app-content>
        <slot />
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
  .md-app {
    height: 100vh;
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

<script>
  export default {
    name: 'DefaultLayout',
    data: () => ({
      menuVisible: false
    })
  }
</script>

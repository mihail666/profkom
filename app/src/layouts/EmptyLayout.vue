<template>
  <div class="">
    <AppHeader />
    <section class="section container">
      <h1>page not font</h1>
      <router-view />
    </section>
  </div>
</template>

<script>

import AppHeader from '@/components/AppHeader.vue'
export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">

</style>

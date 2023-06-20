<template>
  <div class="container">
    <AppHeader />
    <section class="section">
      <router-view />
    </section>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
export default {

  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">

</style>

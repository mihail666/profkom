<template>
  <div class="container">
    <app-featured />
    <h1 class="title">Важная информация</h1>
    <app-information-board />
    <app-contacts />
    <app-materials />
    <app-about />
  </div>
</template>

<script>
import AppFeatured from '@/components/AppFeatured.vue'
import AppInformationBoard from '../components/AppInformationBoard.vue'
import AppMaterials from '../components/AppMaterials.vue'
import AppAbout from '../components/AppAbout.vue'
import AppContacts from '../components/AppContacts.vue'
export default { components: { AppFeatured, AppInformationBoard, AppMaterials, AppAbout, AppContacts } }
</script>

<style lang="scss" scoped>

</style>

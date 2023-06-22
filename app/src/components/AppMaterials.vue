<template>
  <section class="materials">
    <h1 class="title">Новые материалы</h1>
    <div class="materials__container border-top">
      <div class="card" v-for="n in 8" :key="n">
        <div class="materials-card__content card__content">
            <h1 class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Omnis temporibus quidem ex exercitationem neque reiciendis
            </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
.materials {
  position: relative;
  padding-bottom: 2rem;
  &__container {
    width: 100%;
    padding: 1rem;
    border-radius: .5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: $white-color;
    gap: 1rem;
  }
  &-card__content {
    padding: 1rem;
  }
}
</style>

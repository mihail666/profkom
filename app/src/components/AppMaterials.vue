<template>
  <section class="materials">
    <h1 class="title">Новые материалы</h1>
    <div class="materials__container border-top card">
      <div class="card__content materials__content" v-for="n in 8" :key="n">
        <div class="">
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
    border-radius: .5rem;
    background-color: $white-color;
  }

  &__content {
    padding: 1rem;
  }
}</style>

<template>
  <section class="infoBoard">
    <div class="infoBoard__container border-left card">
      <div class="" v-for="n in 6" :key="n">
        <div class="card__content">
          <h2 class="date subtitle">11.11.2023</h2>
          <img class="card-img" src="../assets/images/test2.jpg" alt="">
          <div class="card-bottom">
            <h2 class="subtitle">Новости</h2>
            <h1 class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Omnis temporibus quidem ex exercitationem neque reiciendis
              id natus? Esse maxime delectus fuga assumenda rerum quisquam
              praesentium dolor magnam illum, consectetur corrupti.
            </h1>
          </div>
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

.infoBoard {
  position: relative;
  padding-bottom: 2rem;

  &__container {
    border-radius: .5rem;
    background-color: $white-color;
  }
}</style>

<template>
  <section class="infoBoard">
    <div class="infoBoard__container border-left">
      <div class="card" v-for="n in 6" :key="n">
        <div class="card__content">
          <h2 class="date subtitle">11.11.2023</h2>
          <img class="card-img" src="../assets/images/test.jpg" alt="">
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
}
</style>

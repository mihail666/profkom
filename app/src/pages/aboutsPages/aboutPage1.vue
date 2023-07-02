<template>
  <section class="about-page container">
    <h1 class="title">Достижения</h1>
    <div
      v-for="n in 5" :key="n"
      class="page-container about-page__container border-left grid"
      >
      <div class="about-page__group">
        <img src="@/assets/images/test2.jpg" alt="" class="about-page__img">

        <div class="about-page__card">
          <h3 class="about-page__card-title">2.500+</h3>
          <p class="about-page__card-description">
            Supercharges placed along popular routes
          </p>
        </div>
      </div>

      <div class="about-page__data">
        <h2 class="section__title about-page__title">
          Machines With <br> Future Technology
        </h2>

        <p class="about-page__description">
          See the future with high-performance electric cars produced by
          renowned brands. They feature futuristic builds and designs with
          new and innovative platforms that last a long time.
        </p>

        <a href="#" class="button">Подробнее</a>
      </div>
    </div>
    <app-contacts />
    <div class="page-container border-left grid">
      <div class="about-page__data">
        <h2 class="section__title about-page__title">
          Machines With <br> Future Technology
        </h2>

        <p class="about-page__description">
          See the future with high-performance electric cars produced by
          renowned brands. They feature futuristic builds and designs with
          new and innovative platforms that last a long time.
          See the future with high-performance electric cars produced by
          renowned brands. They feature futuristic builds and designs with
          new and innovative platforms that last a long time.
        </p>
        <p class="about-page__description">
          See the future with high-performance electric cars produced by
          renowned brands. They feature futuristic builds and designs with
          new and innovative platforms that last a long time.
          See the future with high-performance electric cars produced by
          renowned brands. They feature futuristic builds and designs with
          new and innovative platforms that last a long time.
        </p>
        <p class="about-page__description">
          See the future with high-performance electric cars produced by
          renowned brands. They feature futuristic builds and designs with
          new and innovative platforms that last a long time.
          See the future with high-performance electric cars produced by
          renowned brands. They feature futuristic builds and designs with
          new and innovative platforms that last a long time.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import AppContacts from '../../components/AppContacts.vue'
export default {
  components: {
    AppContacts
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.about-page {

  &__container {
    margin-bottom: 2rem;
    transform: rotateY(2);
    &:nth-child(2n+1){
      transform: scale(-1, 1);
      .about-page__data, .about-page__group, .about-page__img {
        transform: scale(-1, 1);
      }
      .about-page__group {
        padding-right: .5rem;
      }
      .about-page__title,
      .about-page__description {
        text-align: right;
      }
      .about-page__card {
        right: 2rem;
      }
      .button {
        left: auto;
        right: 0;
      }
    }
  }

  &__group {
    position: relative;
  }
  &__data {
    position: relative;
  }

  &__img {
    width: 100%;
    border-radius: .5rem;
    &:nth-child(2n+1){
      transform: scale(-1, 1);
    }
  }

  &__card {
    width: 180px;
    position: absolute;
    right: 1.5rem;
    bottom: -2.5rem;
    padding: 1rem .75rem;
    border-radius: 1.25rem;
    background: $first-color-opacity;
    backdrop-filter: blur(30px);
    text-align: center;
    color: $white-color;
  }
  &__card-description {
    text-align: center;
    margin-bottom: .5rem;
    font-size: $normal-font-size;
  }
  &__card-title {
    font-size: $h3-font-size;
    margin-bottom: .5rem;
  }
  &__title {
    margin: 1rem 0;
    text-align: left;
  }

  &__description {
    margin-bottom: 2rem;
  }
}
</style>

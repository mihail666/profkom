<template>
  <div class="news-page container">
    <h1 class="title">Новости</h1>
    <div class="news-page__container page-container spacer" v-for="n in 5" :key="n">
      <div class="news-page__data">
        <img src="@/assets/images/test2.jpg" alt="">
        <div class="news-page__description">
          <h1 class="text">Новость {{ n }}</h1>
          <p>
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
          </p>
          <p>
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
          </p>
          <router-link :to="`/detailNew/`+ n" class="button">Подробнее</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
.news-page {
  position: relative;
  &__container {
    position: relative;
    transition: .3s;
    img {
      min-width: 100px;
      border-radius: .5rem;
    }
    &:hover {
      box-shadow: 0 10px 10px $grey-color;
      border-radius: .5rem;
    }
  }
  &__data {
    display:flex;
    flex-wrap: wrap;
  }
  &__description {
    margin-top: 2rem;
    position: relative;
    p {
      padding: 1rem 0rem;
    }
    .button {
      position: relative;
    }
  }
}
</style>

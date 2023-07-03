<template>
  <div class="decisions-page container">
    <h1 class="title">Решения профсоюза</h1>
    <div class="page-container decisions-page__container border-left grid">
      <div class="decisions-page__content">
        <h1 class="title">Решение 1</h1>
          <p class="decisions-page__description">
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
          </p>
          <p class="decisions-page__description spacer">
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
          </p>
          <p class="decisions-page__description">
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
          </p>
          <router-link :to="`/detailNew/`+ n" class="button">Подробнее</router-link>
      </div>
      <div class="decisions-page__content">
        <h1 class="title">Решение 2</h1>
          <p class="decisions-page__description">
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
          </p>
          <p class="decisions-page__description spacer">
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
          </p>
          <p class="decisions-page__description">
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
          </p>
          <router-link :to="`/detailNew/`+ n" class="button">Подробнее</router-link>
      </div>
      <div class="decisions-page__content">
        <h1 class="title">Решение 3</h1>
          <p class="decisions-page__description">
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
          </p>
          <p class="decisions-page__description spacer">
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
          </p>
          <p class="decisions-page__description">
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
          </p>
          <router-link :to="`/detailNew/`+ n" class="button">Подробнее</router-link>
      </div>
      <div class="decisions-page__content">
        <h1 class="title">Решение 3</h1>
          <p class="decisions-page__description">
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
          </p>
          <p class="decisions-page__description spacer">
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
          </p>
          <p class="decisions-page__description">
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
          </p>
          <router-link :to="`/detailNew/`+ n" class="button">Подробнее</router-link>
      </div>
      <div class="decisions-page__content">
        <h1 class="title">Решение 3</h1>
          <p class="decisions-page__description">
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
          </p>
          <p class="decisions-page__description spacer">
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
          </p>
          <p class="decisions-page__description">
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
          </p>
          <router-link :to="`/detailNew/`+ n" class="button">Подробнее</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.decisions-page {
  &__container {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 50%;
    justify-content: center;
    gap: 2rem;
  }
  &__content{
    width: 100%;
    padding: 1rem 0;
    .button {
      margin-top: 2rem;
      position: relative;

    }
  }
}
</style>

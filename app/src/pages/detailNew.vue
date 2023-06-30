<template>
  <div class="new-page container">
    <div class="new-page__container page-container spacer border-left">
      <div class="new-page__data">
        <h1 class="title">Новость {{ state.id }}</h1>
        <img src="@/assets/images/test.jpg" alt="">
        <div class="new-page__description">
          <h1 class="text">Заголовок</h1>
          <p>
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
          </p>
          <h1 class="text">Заголовок</h1>
          <p>
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
          </p>
          <h1 class="text">Заголовок</h1>
          <p>
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
          </p>
          <router-link to="/news" class="button">все новости</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
export default {
  setup () {
    const route = useRoute()
    const state = reactive({
      loading: true,
      id: ''
    })
    onMounted(() => {
      state.id = route.params.id
    })
    return { state }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
.new-page {
  position: relative;
  &__container {
    position: relative;
    transition: .3s;
    img {
      min-width: 100px;
      border-radius: .5rem;
    }
  }
  &__data {
    position: relative;
    max-width: 900px;
    display:flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }
  &__description {
    margin-top: 2rem;
    position: relative;
    p {
      padding: .5rem 0rem 2rem 0;
    }
    .button {
      position: relative;
      bottom: .5rem;
    }
  }
}
</style>

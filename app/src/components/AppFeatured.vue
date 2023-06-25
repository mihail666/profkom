<template>
  <section class="featured" id="featured">

    <div class="featured__container">
      <ul class="featured__buttons featured__content">
        <li>
          <a href="https://lk.eseur.ru" class="buttons featured__item">
            <i class="material-icons" style="color: white">school</i><p>Год педагога и наставника</p>
          </a>
        </li>
        <li>
          <a href="https://lk.eseur.ru" class="buttons featured__item">
            <i class="material-icons" style="color: white">login</i><p>Вступить в Профсоюз!</p>
          </a>
        </li>
        <li>
          <a href="https://lk.eseur.ru" class="buttons featured__item">
            <i class="material-icons" style="color: white">feed</i><p>Задачи и действия</p>
          </a>
        </li>
        <li>
          <a href="https://lk.eseur.ru" class="buttons featured__item">
            <i class="material-icons" style="color: white">send</i><p>Наши контакты</p>
          </a>
        </li>

      </ul>
    </div>

  </section>
</template>

<script>
export default {
  data: () => ({})
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.featured {
  &__container {
    padding-top: .5rem;
    padding-left: 1rem;
  }

  &__buttons {
    margin-bottom: 1rem;
  }

  &__item {
    display: flex;
    height: 4.5rem;
    border: none;
    outline: none;
    padding: 1rem;
    justify-content: left;
    align-items: center;
    border-radius: .5rem;
    background-color: $first-color-alt;
    color: $white-color;
    font-size: $h3-font-size;
    cursor: pointer;
    transition: .3s;

    i {
      font-size: 1.5rem;
      padding-right: .5rem;
    }

    span,
    i,
    p {
      opacity: .5;
      transition: .3s;
      font-weight: $font-medium;
    }
    &:hover {
      background-color: $first-color;
      span, i, p {
        opacity: 1;
      }
      i {
        transform: scale(1.4);
      }
      p {
        transform: translateX(.5rem);
      }
    }
  }

  &__content {
    grid-template-columns: 228px;
    justify-content: center;
    gap: .5rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  &__card {
    position: relative;
    background-color: $white-color;
    padding: 2rem 1.5rem 1.5rem;
    border-radius: 1rem;
    cursor: pointer;
  }

  &__title,
  &__subtitle,
  &__img {
    position: relative;
  }

  &__title {
    font-size: $h2-font-size;
    margin-bottom: .25rem;
  }

  &__subtitle {
    font-size: $normal-font-size;
    color: $text-color;
    font-weight: 400;
  }

  &__img {
    margin: 1.5rem 0;
    transition: .3s;
  }
}

@media (min-width: 576px) {
  .featured__content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1040px) {
  .featured__content {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>

<template>
  <section class="featured" id="featured">

    <div class="featured__container">
      <ul class="featured__buttons">
        <li>
          <a href="https://lk.eseur.ru" class="buttons featured__item">
            <i class="material-icons" style="color: white">school</i>Год педагога и наставника
          </a>
        </li>
        <li>
          <a href="https://lk.eseur.ru" class="buttons featured__item">
            <i class="material-icons" style="color: white">login</i>Вступить в Профсоюз!
          </a>
        </li>
        <li>
          <a href="https://lk.eseur.ru" class="buttons featured__item">
            <i class="material-icons" style="color: white">feed</i>Текущая ситуация. Задачи и действия Профсоюза
          </a>
        </li>
        <li>
          <a href="https://lk.eseur.ru" class="buttons featured__item">
            <i class="material-icons" style="color: white">send</i>Наши контакты
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
  }

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 1rem;
    margin-bottom: 1.5rem;
  }

  &__item {
    display: flex;
    height: 3rem;
    border: none;
    outline: none;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    border-radius: .5rem;
    background-color: $first-color-alt;
    color: $white-color;
    font-size: $h3-font-size;
    cursor: pointer;
    transition: .3s;

    i {
      font-size: 2rem;
      padding-right: .5rem;
    }

    span,
    img {
      opacity: .5;
      transition: .3s;
    }
  }

  &__item:hover {
    background-color: $first-color;
  }

  &__item:hover span,
  &__item:hover img {
    opacity: 1;
  }

  &__content {
    grid-template-columns: 228px;
    justify-content: center;
    gap: 2.5rem;
    display: grid;
    grid-template-columns: repeat(1, max-content);
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
</style>

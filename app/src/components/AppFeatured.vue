<template>
  <section class="featured" id="featured">

    <div class="featured__container container">
      <ul class="featured__filters">
        <li>
          <a href="https://lk.eseur.ru" class="buttons featured__item">
            <img src="../assets/icons/logo.png" alt="">Год педагога и наставника
          </a>
        </li>
        <li>
          <a href="https://lk.eseur.ru" class="buttons featured__item">
            <img src="../assets/icons/logo.png" alt="">Вступить в Профсоюз!
          </a>
        </li>
        <li>
          <a href="https://lk.eseur.ru" class="buttons featured__item">
            <img src="../assets/icons/logo.png" alt="">Текущая ситуация. Задачи и действия Профсоюза
          </a>
        </li>
        <li>
          <a href="https://lk.eseur.ru" class="buttons featured__item">
            <img src="../assets/icons/logo.png" alt="">Наши контакты
          </a>
        </li>

      </ul>
    </div>

    <!-- <TransitionGroup name="fade" tag="div" class="featured__content">
      <article class="featured__card" v-for="c in arrCars" :key="c.id">
        <div class="shape shape__smaller"></div>

        <h1 class="featured__title">{{ c.mark }}</h1>

        <h3 class="featured__subtitle">{{ c.carName }}</h3>

        <h3 class="featured__price">{{ c.price }}</h3>

        <button class="button featured__button">
          <i class="ri-shopping-bag-2-line"></i>
        </button>
      </article>
    </TransitionGroup> -->

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

  &__filters {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 1rem;
    margin-bottom: 3.5rem;
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

    img {
      width: 2.4rem;
      height: 2rem;
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

  &__card .shape__smaller {
    position: absolute;
    inset: 0;
    margin: auto;
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
    width: 180px;
    margin: 1.5rem 0;
    transition: .3s;
  }

  &__button {
    border: none;
    outline: none;
    padding: .75rem 1rem !important;
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 1rem 0 1rem 0 !important;
    cursor: pointer;

    i {
      font-size: 1.25rem;
    }
  }
}
.featured__card:hover .featured__img {
  transform: scale(1.1);
}
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all .3s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(20px, 0);
}

.fade-leave-active {
  position: relative;
  top: 100%;
}
</style>

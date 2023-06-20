<template>
  <div class="grid">

    <section class="header">
      <header class="header__container container grid">
        <div class="header__content">
          <router-link to="/">
            <img class="logo" src="@/assets/icons/logo.png" alt="">
          </router-link>
        </div>
        <div class="header__content">
          <router-link to="/">
            <p class="header-subtitle">Общероссийский Профсоюз образования</p>
            <h1 class="Header-title">Оренбургская областная организация</h1>
          </router-link>
        </div>
      </header>
    </section>

    <section>
      <nav class="nav nav__container">
        <!-- toggle button -->
        <div class="nav__content">
          <div class="nav__toggle">
            <i class="material-icons">menu</i>
          </div>
          <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
              <li class="nav__item">
                <router-link to="/" class="nav__link">Главная</router-link>
              </li>
              <li class="nav__item">
                <router-link to="/about" class="nav__link">О нас</router-link>
              </li>
              <li class="nav__item">
                <router-link to="/decisions" class="nav__link">Решения</router-link>
              </li>
              <li class="nav__item">
                <router-link to="/news" class="nav__link">Новости</router-link>
              </li>
              <li class="nav__item">
                <router-link to="/work" class="nav__link">Деятельность</router-link>
              </li>
              <li class="nav__item">
                <router-link to="/chill" class="nav__link">Отдых</router-link>
              </li>
              <li class="nav__item">
                <router-link to="/documents" class="nav__link">Документы</router-link>
              </li>
              <li class="nav__item">
                <router-link to="/npf" class="nav__link">НПФ</router-link>
              </li>
            </ul>
            <div class="nav__close" id="nav-close">
              <i class="material-icons">close</i>
            </div>
          </div>
        </div>

        <div class="nav__content">
          <i class="material-icons" style="color: white">travel_explore</i>
        </div>

      </nav>
    </section>

  </div>
</template>

<script setup>

</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
.header {
  max-height: 3.375rem;
  padding: 1rem 0;
  position: relative;
  &__container {
    position: relative;
    grid-template-columns: repeat(2, max-content);
    align-items: center;
    justify-content: left;
  }
  &-title {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 24px;
    line-height: 1;
    font-weight: bold;
    color: #01a7fa;
    text-transform: uppercase;
    width: 100%;
    max-height: 48px;
    overflow: hidden;
  }
}
// .header__content {}
.nav {
  background: $first-color;
  height: 3rem;
  display: flex;
  align-items: center;
  padding: .75rem;
  justify-content: space-between;
  border-radius: .5rem;

  &__content {
    display: flex;
    align-items: center;
  }

  &__toggle {
    color: $white-color;
    display: inline-flex;
    i {
      font-size: 2.25rem;
      padding-right: 1.5rem;
      &:hover {
        color: $first-color-hover;
    }

      &:active{
        color: $first-color-alt;
      }
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    text-align: center;
    row-gap: 2rem;
    padding-top: 9rem;
  }

  &__link {
    text-transform: uppercase;
    font-size: $h1-font-size;
    font-weight: $font-medium;
    transition: .3s;
    color: $white-color;
    &:hover {
      color: $first-color-hover;
    }

    &:active{
      color: $first-color-alt;
    }
  }

  &__close {
    font-size: 2rem;
    color: $black-color;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
}

@media screen and (max-width: 780px) {
  .nav__menu {
    position: fixed;
    background: hsl(0, 0%, 100%, .1);
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(96px);
    transition: .3s;
  }
}

.show-menu {
  right: 0%;
}

.scroll-header {
  border-radius: 0 0 1rem 1rem;
  background-color: $body-color;
  box-shadow: 0 2px 4px hsla(0, 0, 1%, 1);
}
</style>

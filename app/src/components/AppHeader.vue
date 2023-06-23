<template>
  <header class="header" id="header">
    <div class="header__group container">
        <div class="header__el">
          <router-link to="/">
            <img class="logo" src="@/assets/icons/logo.png" alt="">
          </router-link>
        </div>
        <div class="header__el">
          <router-link to="/">
            <h2 class="header-subtitle subtitle">Общероссийский Профсоюз образования</h2>
            <h1 class="title">Оренбургская областная организация</h1>
          </router-link>
        </div>
      </div>
    <nav class="nav container">
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
      <!-- toggle button -->
      <div class="nav__toggle" id="nav-toggle">
        <i class="material-icons">menu</i>
      </div>
      <div class="nav__item nav__search">
          <i class="material-icons" style="color: white">travel_explore</i>
        </div>
    </nav>
  </header>
</template>

<script setup>
import { showMenu } from '@/assets/js/animate.js'
import { onMounted } from 'vue'

onMounted(() => {
  showMenu()
})
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
.header {
  width: 100%;
  background-color: transparent;
  position: relative;
  z-index: $z-fixed;
  &__group {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 2rem;
    padding-top: 1rem;
    margin-bottom: 1rem;
  }
}
.nav {
  height: $header-height;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  background: $first-color;
  border-radius: .5rem;

  &__logo,
  &__toggle {
    color: $white-color;
    display: inline-flex;
  }

  &__logo {
    align-items: center;
    column-gap: .25rem;
    font-weight: &font-medium;
    transition: .3s;

    i {
      font-size: 1.25rem;
    }

    &:hover {
      color: $first-color;
    }
  }
}
// .header {
//   max-height: 3.375rem;
//   padding: 1rem 0;
//   position: relative;
//   &__container {
//     position: relative;
//     grid-template-columns: repeat(2, max-content);
//     align-items: center;
//     justify-content: left;
//     display: grid;
//     column-gap: 1rem;
//   }
//   &-title {
//     font-family: 'Roboto Condensed', sans-serif;
//     font-size: 2px;
//     line-height: 1;
//     font-weight: bold;
//     color: #01a7fa;
//   }
// }
// // .header__content {}
// .nav-header {
//   width: 100%;
//   max-width: 1200px;
//   background-color: transparent;
//   position: relative;
//   top: 0;
//   z-index: $z-fixed;
//   box-sizing: border-box;
// }
// .nav {
//   background: $first-color;
//   height: 3rem;
//   display: flex;
//   align-items: center;
//   padding: .75rem;
//   justify-content: space-between;
//   border-radius: .5rem;

//   &__content {
//     display: flex;
//     align-items: center;
//   }

//   &__toggle {
//     color: $white-color;
//     display: inline-flex;
//     i {
//       font-size: 2.25rem;
//       padding-right: 1rem;
//       &:hover {
//         color: $first-color-hover;
//     }

//       &:active{
//         color: $first-color-alt;
//       }
//     }
//   }

//   &__link {
//     text-transform: uppercase;
//     font-size: $h1-font-size;
//     font-weight: $font-medium;
//     transition: .3s;
//     color: $white-color;
//     white-space: pre;
//     white-space: nowrap;

//     &:active{
//       color: $first-color-alt;
//       background: $first-color-alt;
//     }
//   }
//   &__item {
//     padding: .9rem;
//     transition: .3s;
//     &:hover {
//       background: $first-color-hover;
//     }
//   }
// }

@media screen and (max-width: 899px) {
  .nav__menu {
    position: fixed;
    background: $first-color-opacity;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(96px);
    transition: .1s;
    color: $white-color;
    padding: 5rem;
  }
}
.nav__list {
    display: flex;
    flex-direction: column;
    text-align: left;
    row-gap: .3rem;
}

.nav__link {
  text-transform: uppercase;
    font-size: $h3-font-size;
    font-weight: $font-medium;
    transition: .3s;
    color: $white-color;
    padding: 0 1rem;

    &:active{
      color: $first-color-alt;
    }
}
.nav__item {
    padding: 1.4rem .2rem;
    border-radius: .5rem;
    transition: .3s;
    &:hover {
      background: $first-color-hover;
    }
}
.nav__close {
    font-size: 2rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
.show-menu {
  right: 0%;
}

// .scroll-header {
//   border-radius: 0 0 1rem 1rem;
//   background-color: $body-color;
//   box-shadow: 0 2px 4px hsla(0, 0, 1%, 1);
// }
</style>

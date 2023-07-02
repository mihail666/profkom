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
          <h2 class="header__subtitle subtitle">Общероссийский Профсоюз образования</h2>
          <h1 class="header__title">Оренбургская областная организация</h1>
        </router-link>
      </div>
    </div>
    <nav class="nav container">
      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item " v-for="l of menuList" :key="l.id">
            <div v-if="l.pages.length === 0">
              <router-link class="" :to="l.path">
                <div class="nav__link">{{ l.title }}</div>
              </router-link>
            </div>
            <div v-else class="dropdown">
              <div class="nav__item">
                <div class="nav__link-title">{{ l.title }}</div>
              </div>
              <div class="dropdown-content">
                <router-link class="" :to="pagesLink.path" v-for="pagesLink in l.pages" :key="pagesLink.id">
                  <div class="nav__link nav__link-drop">{{ pagesLink.pageTitle }}</div>
                </router-link>
              </div>
            </div>
          </li>
        </ul>
        <div class="nav__close" id="nav-close">
          <i class="material-icons">close</i>
        </div>
      </div>
      <!-- toggle button -->
      <div class="nav__toggle" id="nav-toggle">
        <i class="material-icons">menu</i>
        <p class="">Разделы сайта</p>
      </div>
      <div class="nav__search">
        <i class="material-icons" style="color: white">travel_explore</i>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { showMenu } from '@/assets/js/animate.js'
import { onMounted } from 'vue'
import { menuList } from '@/const/menuLinks'

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
    gap: 1rem;
    padding-top: 1rem;
    margin-bottom: 1rem;
  }

  &__title {
    font-size: $h3-font-size;
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
  box-sizing: border-box;

  &__search {
    cursor: pointer;
    transition: .3s;

    &:hover {
      transform: scale(1.3);
    }
  }

  &__logo,
  &__toggle {
    color: $white-color;
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    p {
      font-size: $h3-font-size;
      text-transform: uppercase;
      font-weight: $font-medium;
      font-size: $h3-font-size;
      padding-left: .5rem;
      transition: .3s;
      z-index: 1;
    }

    i {
      font-size: 2rem;
      font-weight: $font-medium;
    }

    &:hover {
      i {
        color: $first-color-hover;
      }

      p {
        transform: translateX(.5rem);
      }
    }

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

@media screen and (max-width: 930px) {
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
    padding: 5rem 2rem;
  }

  .header__subtitle {
    display: none;
  }
}

.nav__list {
  display: flex;
  flex-direction: column;
  text-align: left;
  row-gap: .5rem;
  list-style: inside;

  .router-link-active {
    background: $first-color-hover;
    border-radius: .5rem;
  }
}

.nav__link-title {
  height: 2rem;
  text-transform: uppercase;
  font-size: $h3-font-size;
  font-weight: $font-medium;
  transition: .3s;
  color: $white-color;
  padding: 0 1rem;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    width: 7px;
    height: 7px;
    border: 2px solid $white-color;
    border-radius: 50%;
    left: -11px;
    transition: .3s;
  }
}

.nav__link {
  height: 2rem;
  text-transform: uppercase;
  font-size: $h3-font-size;
  font-weight: $font-medium;
  transition: .3s;
  color: $white-color;
  padding: 0 1rem;
  display: flex;
  align-items: center;

  &:hover {
    color: $black-color;
    transform: translateX(0.5rem);
  }

  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: #fffefe;
    border-radius: 50%;
    left: -10px;
    transition: .3s;
  }
}

.nav__item {
  position: relative;
  // height: 2rem;
  border-radius: .5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: .3s;
}

.nav__close {
  font-size: 2rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
}

.show-menu {
  z-index: 2;
  right: 0%;
}

.nav__link-drop {
  transition: .3s;

  &::before {
    content: "";
    background: none;
  }
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  padding: .5rem 0 0 1rem;
  position: relative;
  background-color: none;
  border-radius: .5rem;
  transition: .3s;
  z-index: 1;
}

.dropdown-content a {
  display: block;
  white-space: nowrap;
  transition: .3s;
}

.dropdown:hover .dropdown-content {
  display: block;
}</style>

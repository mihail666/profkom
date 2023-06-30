<template>
  <section class="footer">
    <div class="footer__content-group container">
        <router-link to="/">
          <img class="logo footer__logo" src="@/assets/icons/logo.png" alt="">
        </router-link>
        <div>
          <router-link to="/">
            <p class="subtitle">Общероссийский Профсоюз образования</p>
            <h2 class="footer__logo-text">Оренбургская областная организация</h2>
          </router-link>
        </div>
      </div>
    <div class="footer__container container">
      <div class="footer__content">
        <h3 class="footer__title">
          Разделы сайта
        </h3>

        <ul class="footer__links" v-for="l of menuList" :key="l.id">
          <li>
            <router-link :to="l.path" class="footer__link">{{ l.title }}</router-link>
          </li>
        </ul>
      </div>

      <div class="footer__content">
        <h3 class="footer__title">
          Выжные темы
        </h3>

        <ul class="footer__links" v-for="l of menuClients" :key="l.id">
          <li>
            <router-link :to="l.path" class="footer__link">{{ l.title }}</router-link>
          </li>
        </ul>
      </div>

      <div class="footer__content">
        <h3 class="footer__title">
          Наши контакты
        </h3>

        <ul class="footer__social">
          <li>
            <a
              href="https://t.me/MadoneFR"
              target="_blank" rel="noopener"
              class="footer__social-link"
            >
              <img src="../assets/icons/telegram.png" alt="">
            </a>
          </li>
          <li>
            <a
              href="mailto:f1l1ppovmr@gmail.com"
              target="_blank"
              rel="noopener"
              class="footer__social-link"
            >
            <img src="../assets/icons/email.png" alt="">
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=79877933061"
              target="_blank"
              rel="noopener"
              class="footer__social-link"
            >
            <img src="../assets/icons/whatsapp.png" alt="">
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=79877933061"
              target="_blank"
              rel="noopener"
              class="footer__social-link"
            >
            <img src="../assets/icons/odnoklassniki.png" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <span class="footer__copy">
      Все права на опубликованные на сайте Общероссийского Профсоюза образования материалы охраняются в соответствии с законодательством Российской Федерации.
      Любое использование материалов допускается только по согласованию с их авторами с
      обязательной активной ссылкой на источник.
    </span>
  </section>
</template>

<script setup>
import { menuList, menuClients } from '@/const/menuLinks'

</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
.footer{
  position: relative;
  overflow: hidden;
  max-width: 1200px;
  padding: 1rem;
  margin: 0 auto;
  &__container {
    row-gap: 2.5rem;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  &__content {
    width: 300px;
  }
  &__content-group {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin-bottom: 1rem;
  }
  &__logo {
    transition: .3s;
    max-width: 100px;
    padding-right: 1rem;
    img {}
  }
  &__logo-text {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  &__title {
    font-size: $h3-font-size;
    margin-bottom: 1.25rem;
  }

  &__links {
    // display: flex;
    // flex-direction: column;
    // row-gap: .5rem;
    margin: .5rem 0;
  }
  &__link{
    color: $text-color;
    transition: .3s;
    padding-bottom: .2rem;
    border-bottom: 2px solid $body-color;

    &:hover{
      color: $first-color-hover;
      margin-left: .3rem;
      border-bottom: 2px solid $first-color-hover;
    }
  }
  &__social {
    display: flex;
    flex-wrap: wrap;
    column-gap: 2rem;
    row-gap: 1rem;
    img {
      max-width: 30px;
      transition: .3s;
      &:hover {
        transform: scale(1.3);
      }
    }
  }
  &____social-link {}
  &__copy {
    padding: 0 1rem;
    margin: 0 auto;
    max-width: 700px;
    display: block;
    margin-top: 4.5rem;
    text-align: center;
  }
}
</style>

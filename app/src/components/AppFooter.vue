<template>
  <section class="footer">
    <div class="footer__container container grid">
      <div class="footer__content">
        <router-link to="/">
            <img class="logo footer__logo" src="@/assets/icons/logo.png" alt="">
        </router-link>
      </div>
      <div class="header__content">
          <router-link to="/">
            <p class="header-subtitle">Общероссийский Профсоюз образования</p>
            <h1 class="Header-title">Оренбургская областная организация</h1>
          </router-link>
          <p class="footer__description">
          Lorem ipsum dolor sit amet. <br>
          Lorem ipsum dolor sit. <br>
          Lorem, ipsum dolor.
        </p>
      </div>

      <div class="footer__content">
        <h3 class="footer__title">
          Company
        </h3>

        <ul class="footer__links" v-for="(n, idx) of 7" :key="n">
          <li>
            <a href="#" class="footer__link">item {{ idx+1 }}</a>
          </li>
        </ul>
      </div>

      <div class="footer__content">
        <h3 class="footer__title">
          Information
        </h3>

        <ul class="footer__links" v-for="(n, idx) of 5" :key="n">
          <li>
            <a href="#" class="footer__link">item {{ idx+1 }}</a>
          </li>
        </ul>
      </div>

      <div class="footer__content">
        <h3 class="footer__title">
          Follow us
        </h3>

        <ul class="footer__social">
          <li>
            <a
              href="https://t.me/MadoneFR"
              target="_blank" rel="noopener"
              class="footer__social-link"
            >
            <i class="material-icons">close</i>
            </a>
          </li>
          <li>
            <a
              href="mailto:f1l1ppovmr@gmail.com"
              target="_blank"
              rel="noopener"
              class="footer__social-link"
            >
            <i class="material-icons">close</i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mihail666"
              target="_blank"
              rel="noopener"
              class="footer__social-link"
            >
            <i class="material-icons">close</i>
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=79877933061"
              target="_blank"
              rel="noopener"
              class="footer__social-link"
            >
            <i class="material-icons">close</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <span class="footer__copy">
      Все права на опубликованные на сайте Общероссийского Профсоюза образования материалы охраняются в соответствии с законодательством Российской Федерации.
      Любое использование материалов допускается только по согласованию с их авторами с
      обязательной активной ссылкой на источник.
      Политика Общероссийского Профсоюза образования в отношении обработки персональных данных.
      Администрация сайта не несёт ответственности за содержание веб-сайтов, на которые даны ссылки.
    </span>
  </section>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';
.footer{
  position: relative;
  overflow: hidden;
  &__container {
    row-gap: 2.5rem;
    position: relative;
  }
  &__logo {
    transition: .3s;
    img {
      font-size: 1.5rem;
      padding: 0 1rem;
      align-items: center;
      column-gap: .25rem;
      margin-bottom: 1.25rem;
    }

    &:hover {
      color: $first-color;
    }
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
  &__link,
  &__social-link {
    color: $text-color;
    transition: .3s;
  }
  &__link:hover,
  &__social-link:hover {
    color: $black-color;
  }
  &__social {
    display: flex;
    column-gap: 1.5rem;
  }
  &__social-link {
    font-size: 1.25rem;
  }
  &__copy {
    display: block;
    margin-top: 4.5rem;
    text-align: center;
  }
}
</style>

<template>
  <section class="contacts spacer">
    <div class="contacts__container">
      <div class="contacts__content">
        <h1 class="title text-center">Наши контакты</h1>
        <h1 class="text text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus architecto aliquid</h1>
        <div class="contacts__items">
          <a href="#" class="contacts__item">
            <span><img src="../assets/icons/email.png" alt=""></span>
            <p>Отправить письмо на почту</p>
          </a>
          <a href="#" class="contacts__item">
            <span><img src="../assets/icons/vk.png" alt=""></span>
            <p>Подписаться на вконтакте</p>
          </a>
          <a href="#" class="contacts__item">
            <span><img src="../assets/icons/telegram.png" alt=""></span>
            <p>Подписаться на Телеграмм</p>
          </a>
          <a href="#" class="contacts__item">
            <span><img src="../assets/icons/whatsapp.png" alt=""></span>
            <p>Связаться через whatsapp</p>
          </a>
          <a href="#" class="contacts__item">
            <span><img src="../assets/icons/odnoklassniki.png" alt=""></span>
            <p>Подписаться на одноклассники</p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.contacts {
  position: relative;

  &__container {
    border-radius: .5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    background: content-box linear-gradient(5deg, $first-color-hover, $first-color);
    gap: 1rem;
    color: $white-color;
  }

  &__content {
    width: 100%;
    padding: 4rem;
  }

  &__items {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    gap: 1.5rem;
  }

  &__item {
    max-width: 180px;
    color: $white-color;
    display: flex;
    align-items: center;
    justify-content: center;
    row-gap: .5rem;
    column-gap: .6rem;
    transition: .3s;

    p {
      text-align: left;
      margin-top: .3rem;
      transition: .3s;
    }
    &:hover {
      span img {
        transform: scale(1.4);
      }
      p {
        transform: translateX(.5rem);
      }
    }
  }

  span {
    img {
      max-width: 30px;
      filter: invert(1);
      transition: .3s;
    }
  }
}
</style>

<template>
  <section class="contacts">
    <div class="contacts__container">
      <div class="contacts__content">
        <h1 class="title">Наши контакты</h1>
        <h1 class="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus architecto aliquid</h1>
        <div class="contacts__items">
          <a href="#" class="contacts__item">
            <span><img src="../assets/icons/email.png" alt=""></span>
            <p>
              Отправить письмо на почту
            </p>
          </a>
          <a href="#" class="contacts__item">
            <span><img src="../assets/icons/vk.png" alt=""></span>
            Подписаться на гуппу в вконтакте
          </a>
          <a href="#" class="contacts__item">
            <span><img src="../assets/icons/telegram.png" alt=""></span>
            Подписаться на канал в Телеграмме
          </a>
          <a href="#" class="contacts__item">
            <span><img src="../assets/icons/whatsapp.png" alt=""></span>
            Связаться через whatsapp
          </a>
          <a href="#" class="contacts__item">
            <span><img src="../assets/icons/odnoklassniki.png" alt=""></span>
            Подписаться на гуппу в одноклассниках
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
  padding-bottom: 2rem;

  &__container {
    width: 100%;
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
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    row-gap: 1rem;
  }

  &__item {
    max-width: 180px;
    color: $white-color;
    display: flex;
    align-items: center;
    justify-content: center;
    row-gap: .5rem;
    column-gap: .6rem;
    p {
      text-align: justify;
      margin-top: .3rem;
    }

    span {
      img {
        width: 60px;
        filter: invert(1);
        transition: .3s;
        &:hover {
          transform: scale(1.3);
        }
      }
    }
  }
}</style>

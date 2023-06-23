<template>
  <section class="about">
    <div class="about__container">
      <div class="about__content">
        <h1 class="title group-text">О нас</h1>
        <h1 class="text group-text">Общероссийский Профсоюз образования</h1>
        <div class="about__buttons-group">
          <button class="text">Вступить в Профсоюз</button>
          <button class="text">Подробнее</button>
        </div>
        <div class="about__items">
          <div class="about__item">
            <span>73 508</span>
            <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Omnis temporibus quidem ex exercitationem neque reiciendis
            </p>
          </div>
          <div class="about__item">
            <span>4 млн</span>
              <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Omnis temporibus quidem ex exercitationem neque reiciendis
              </p>
          </div>
          <div class="about__item">
            <span>73</span>
              <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Omnis temporibus quidem ex exercitationem neque reiciendis
              </p>
          </div>
          <div class="about__item">
            <span>2 272</span>
              <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Omnis temporibus quidem ex exercitationem neque reiciendis
              </p>
          </div>
          <div class="about__item">
            <span>85.96%</span>
              <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Omnis temporibus quidem ex exercitationem neque reiciendis
              </p>
          </div>
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
.about {
  position: relative;
  padding-bottom: 2rem;
  &__container {
    width: 100%;
    border-radius: .5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    background: content-box linear-gradient(5deg, $first-color-hover, $first-color);;
    gap: 1rem;
    color: $white-color;
  }
  &__content {
    width: 100%;
    padding: 4rem;
    margin: 0 auto;
  }
  &__items {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
  }
  &__item {
    width: 100%;
    max-width: 200px;
    text-align: center;
    padding: .5rem;
    p {
      text-align: center;
      margin-top: .3rem;
    }
    span {
      text-align: center;
      font-size: $h2-font-size;
      font-weight: $font-medium;
    }
  }
  &__buttons-group {
    display: flex;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-bottom: 1rem;
    align-items: center;
    justify-content: center;
    button {
      padding: .5rem 1rem;
      margin:.5rem;
      background: none;
      border: 2px solid $white-color;
      color: $white-color;
      border-radius: .5rem;
      transition: .3s;
      &:hover{
        background: $first-color-hover;
        border: 2px solid $first-color-hover;
      }
    }
  }
}
.group-text {
  text-align: center;
}

</style>

<template>
  <div id="app">

      <a class="skip" href="#main">Skip to main content</a>
        <header class="header">
          <div class="header__left">
            <Logo v-if="showLogo"/>
          </div>
          <Nav/>
        </header>

    <transition name="fade" appear>
      <main class="main">
        <slot/>
      </main>
    </transition> 


    <footer class="footer">
      <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}. 
        
      </span>
      Made with 💚 by 
        <a href="//twitter.com/samuelumoren16"> @samuelumoren16 </a>
     
    </footer>

  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ToggleTheme from '~/components/ToggleTheme.vue'
import Nav from "~/components/Nav.vue";

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    Nav,
    ToggleTheme
  },

  mounted() {
    let twitterScript = document.createElement('script')
    twitterScript.async = true;
    twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    document.head.appendChild(twitterScript)

    let codepenScript = document.createElement('script')
    codepenScript.async = true;
    codepenScript.setAttribute('src', 'https://static.codepen.io/assets/embed/ei.js')
    document.head.appendChild(codepenScript)
  }

}
</script>

<style lang="scss">
#app{
  border: 4px solid #ed54df;
  
}

@media screen and (max-width: 600px) {
  #app{
    width: 100%;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top: 0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    // position: sticky;
    width: 100%;
  }
}

.skip {
  position: absolute;
  left: -999em;
}

.skip:active,
.skip:focus {
  left: -0em;
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;

  > span {
    margin: 0 0.35em;
  }

  a {
    color: currentColor;
  }
}
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>

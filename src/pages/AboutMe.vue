<template>
  <div class="about">
    <nav>
      <ul class="nav">
       
        <li>
          <g-link class="header__link" to="/">Home</g-link>
        </li>
      </ul>
    </nav>
    <br>
    <div class="about__data">
      <div class="bio">
        <h1 class="intro">Hey there</h1>
        <p>
             I'm a Frontend Developer ,
              I am passionate about building awesome user interfaces for web apps  that are accessible to everyone and highly perfomant. 
              I also enjoy working with web technologies to solve problems. 

        </p>


        
      <p class="links">
        <a href="//twitter.com/samuelumoren16">
          <img alt="twitter" src="https://image.flaticon.com/icons/png/512/124/124021.png" width="32" data-src="https://image.flaticon.com/icons/png/512/124/124021.png" data-srcset="https://image.flaticon.com/icons/png/512/124/124021.png 32w" data-sizes="(max-width: 32px) 100vw, 32px" class="g-image g-image--lazy g-image--loaded" sizes="(max-width: 32px) 100vw, 32px" srcset="https://image.flaticon.com/icons/png/512/124/124021.png 32w">
        </a>
        <a href="//github.com/Umoren">
          <img alt="Github" src="https://image.flaticon.com/icons/png/512/25/25231.png" style="filter: invert(100%)" width="32" data-src="https://image.flaticon.com/icons/png/512/25/25231.png" data-srcset="https://image.flaticon.com/icons/png/512/25/25231.png 32w" data-sizes="(max-width: 32px) 100vw, 32px" class="g-image g-image--lazy g-image--loaded" sizes="(max-width: 32px) 100vw, 32px" srcset="https://image.flaticon.com/icons/png/512/25/25231.png 32w">
        </a>
      </p>
      <FormContact />
    </div>
    
    </div>
 
  </div>
</template>

<script>
  import FormContact from '~/components/Contact';

  export default {
    components : {
      FormContact
    }
  }
</script>

<style lang="scss">


.about {
  min-height: 100vh;
  background: #000;

  &__data {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.nav {
  display: flex;
  flex-direction: row-reverse;
  list-style: none;
  li {
    padding: 20px;
    margin-top: 30px;
  }
}
.links {
  margin-top: 0.9em;
  a {
    margin: 0 0.5em;
  }
}
.bio {
  width: 32em;
  margin-right: 20px;
  text-align: left;
}

.intro {
  font-size: 3em;
}

.pic {
  border-radius: 3px;
  height: 70vh;
  width: 100% auto;
}

@media only screen and (max-width: 650px) {
  .about {
    &__data {
      display: flex;
      flex-direction: column;

      .bio {
        width: 22em;
        text-align: center;
      }

      .headshot {
        display: none;
      }
    }
  }
}
</style>

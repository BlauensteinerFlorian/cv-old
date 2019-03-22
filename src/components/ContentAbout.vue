<template>
    <div class="hero-body main_container" style="padding: 0; position: relative">
        <div class="" style="position: absolute; width: 100%;">
          <img class="animated fadeInDown delay-2s navbar-img" src="../assets/img/profile.jpg" alt="Profilbild">
          <h1 class="animated fadeInLeft delay-1s title is-1 has-text-white-bis" style="padding: 10px; padding-bottom: 0px;">Florian Blauensteiner</h1>
          <h1 class="animated fadeInRight subtitle is-4 has-text-white-bis" style="">3910 Zwettl, Niederösterreich 
            <a href="https://www.linkedin.com/in/florian-blauensteiner-1b6169156/">
              <i class="fab fa-linkedin subtitle is-3 has-text-white-bis"></i></a>
              <a href="mailto:florian.blauen@gmail.com">
                <i class="fas fa-envelope subtitle is-3 has-text-white-bis" style="margin-left:10px" />
              </a>
              <a href="https://github.com/BlauensteinerFlorian">
                <i class="fab fa-github subtitle is-3 has-text-white-bis" style="margin-left:10px" />
              </a> 
          </h1>
        </div>

        <vue-particles
        color="#fff"
        :particleOpacity="0.9"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="3"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.5"
        :linesDistance="150"
        :moveSpeed="4"
        :hoverEffect="false"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      ></vue-particles>

    </div>
</template>

<script>


export default {
  name: 'ContentAbout',
}
</script>



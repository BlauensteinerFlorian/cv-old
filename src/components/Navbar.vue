<template>
  <div class="hero-body">
    <div class="container">
      <a class="navbar-text is-size-4" href="">
        <h2 href="#" @click="triggerAbout" v-scroll-to="'#about'" id="aboutLink" class="navbar-text" 
        v-bind:class="{ active: this.aboutIsActive }" >Über mich</h2>
      </a>
      <a class="is-size-4" href="">
        <h2 href="#" @click="triggerExperience" v-scroll-to="'#experience'" id="experienceLink" class="navbar-text" 
        v-bind:class="{active: experienceIsActive }">Erfahrung</h2>
      </a>
      <a class="is-size-4" href="">
        <h2 href="#" @click="triggerEducation" v-scroll-to="'#education'" id="educationLink" class="navbar-text" 
        v-bind:class="{active: educationIsActive }">Ausbildung</h2>
      </a>
      <a class="is-size-4" href="">
        <h2 href="#" @click="triggerSkills" v-scroll-to="'#skills'" id="skillsLink" class="navbar-text" 
        v-bind:class="{active: skillsIsActive }">Skills</h2>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: function() {
    return {
      aboutIsActive: true,
      experienceIsActive: false,
      educationIsActive: false,
      skillsIsActive: false
    };
  },
  methods: {
    clearActive()
    {
      this.aboutIsActive = false;
      this.experienceIsActive = false;
      this.educationIsActive = false;
      this.skillsIsActive = false;
    },
    triggerAbout()
    {
      this.clearActive();
      this.aboutIsActive = true;
      this.$emit('clickedAbout');
    },
    triggerExperience()
    {
      this.clearActive();
      this.experienceIsActive = true;
      this.$emit('clickedExperience');
    },
    triggerEducation()
    {
      this.clearActive();
      this.educationIsActive = true;
      this.$emit('clickedEducation');
    },
    triggerSkills()
    {
      this.clearActive();
      this.skillsIsActive = true;
      this.$emit('clickedSkills');
    }
  }
}
</script>



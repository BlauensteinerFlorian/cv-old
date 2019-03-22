<template>
  <div class="hero-body">
    <div class="container">
      <a class="navbar-text is-size-4" href="">
        <h2 href="#" @click="triggerAbout" v-scroll-to="'#about'" id="aboutLink" class="navbar-text" style="color:#42b9f4; backgroundColor: #181818">Über mich</h2>
      </a>
      <a class="is-size-4" href="">
        <h2 href="#" @click="triggerExperience" v-scroll-to="'#experience'" id="experienceLink" class="navbar-text">Erfahrung</h2>
      </a>
      <a class="is-size-4" href="">
        <h2 href="#" @click="triggerEducation" v-scroll-to="'#education'" id="educationLink" class="navbar-text">Ausbildung</h2>
      </a>
      <a class="is-size-4" href="">
        <h2 href="#" @click="triggerSkills" v-scroll-to="'#skills'" id="skillsLink" class="navbar-text">Skills</h2>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    clearActive()
    {
      document.getElementById("aboutLink").style.color = "#e9e9e9";
      document.getElementById("aboutLink").style.backgroundColor = "";

      document.getElementById("experienceLink").style.color = "#e9e9e9";
      document.getElementById("experienceLink").style.backgroundColor = "";

      document.getElementById("educationLink").style.color = "#e9e9e9";
      document.getElementById("educationLink").style.backgroundColor ="";

      document.getElementById("skillsLink").style.color = "#e9e9e9";
      document.getElementById("skillsLink").style.backgroundColor = ""
    },
    triggerAbout()
    {
      this.clearActive();
      document.getElementById("aboutLink").style.color = "#42b9f4";
      document.getElementById("aboutLink").style.backgroundColor = "#181818"
      this.$emit('clickedAbout');
    },
    triggerExperience()
    {
      this.clearActive();
      document.getElementById("experienceLink").style.color = "#42b9f4";
      document.getElementById("experienceLink").style.backgroundColor = "#181818"

      this.$emit('clickedExperience');
    },
    triggerEducation()
    {
      this.clearActive();
      document.getElementById("educationLink").style.color = "#42b9f4";
      document.getElementById("educationLink").style.backgroundColor = "#181818"

      this.$emit('clickedEducation');
    },
    triggerSkills()
    {
      this.clearActive();
      document.getElementById("skillsLink").style.color = "#42b9f4";
      document.getElementById("skillsLink").style.backgroundColor = "#181818"

      this.$emit('clickedSkills');
    }
  }
}
</script>



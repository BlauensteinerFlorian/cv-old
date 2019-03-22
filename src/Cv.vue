<template>
  <div id="cv">
      <div class="navbar-column hero is-fullheight">
        <Navbar @clickedAbout="doAbout" @clickedExperience="doExperience" @clickedEducation="doEducation" @clickedSkills="doSkills"></Navbar>
      </div>
      <div class="column hero is-fullheight every_content content_one" id="about">
        <ContentAbout/>
      </div>
      <div class="column hero is-fullheight every_content content_two" id="experience">
        <ContentExperience/>
      </div>
      <div class="column hero is-fullheight every_content content_two" id="education">
        <ContentEducation/>
      </div>
      <div class="column hero is-fullheight every_content content_three" id="skills">
        <ContentSkills ref="skills"></ContentSkills>
      </div>
      
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import ContentAbout from './components/ContentAbout.vue'
import ContentExperience from './components/ContentExperience.vue'
import ContentEducation from './components/ContentEducation.vue'
import ContentSkills from './components/ContentSkills.vue'

export default {
  name: 'cv',
  components: {
    Navbar,
    ContentAbout,
    ContentExperience,
    ContentEducation,
    ContentSkills
  },
  methods:{
    doAbout()
    {
      let skillsComponent = this.$refs.skills;
      skillsComponent.resetSkills();
    },
    doExperience()
    {
      let skillsComponent = this.$refs.skills;
      skillsComponent.resetSkills();
    },
    doEducation()
    {
      let skillsComponent = this.$refs.skills;
      skillsComponent.resetSkills();
    },
    doSkills()
    {
      let skillsComponent = this.$refs.skills;
      skillsComponent.loadSkills();
    }
  }
}
</script>



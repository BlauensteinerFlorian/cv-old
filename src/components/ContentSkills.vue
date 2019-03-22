<template>
  <div>
    <h1 class="title is-1 skills-title" style="margin-bottom: 2rem">Skills</h1>

    <div class="skills-type1 animated slideInRight" id="type1">
      <div class="skills_content columns">
        <i class="devicon-html5-plain devicon"></i>
        <div class="devicon devicon-text">- HTML</div>
        <div class="column">
          <div class="line-animation" :style="{ width: linewidth + '%' }"></div>
        </div>
      </div>

      <div class="skills_content columns">
        <i class="devicon-css3-plain devicon"></i>
        <div class="devicon devicon-text">- CSS</div>
        <div class="column">
          <div class="line-animation" :style="{ width: linewidth + '%' }"></div>
        </div>
      </div>

      <div class="skills_content columns">
        <i class="devicon-javascript-plain devicon"></i>
        <div class="devicon devicon-text">- Javascript</div>
        <div class="column">
          <div class="line-animation" :style="{ width: linewidth + '%' }"></div>
        </div>
      </div>

      <div class="skills_content columns">
        <i class="devicon-php-plain devicon"></i>
        <div class="devicon devicon-text">- PHP</div>
        <div class="column">
          <div class="line-animation" :style="{ width: linewidth + '%' }"></div>
        </div>
      </div>

      <h1 class="title is-3 skills-subtitle">
        Weitere Kenntnisse:
        <button
          @click="ShowSkillsTypeTwo"
          class="button is-info is-rounded more-button">
          <!--<i class="fas fa-plus-circle"></i>-->
          <p>Andere Skills</p>
        </button>
      </h1>

      <div class="other-skills">
        <i class="devicon-react-original">
          <div class="hoverdescription">ReactJS</div>
        </i>
        <i class="devicon-vuejs-plain">
          <div class="hoverdescription">VueJS</div>
        </i>
        <i class="devicon-bootstrap-plain">
          <div class="hoverdescription">Bootstrap</div>
        </i>
        <i class="devicon-mysql-plain">
          <div class="hoverdescription">MySQL</div>
        </i>
        <i class="devicon-github-plain">
          <div class="hoverdescription">Github</div>
        </i>
        <i class="devicon-visualstudio-plain">
          <div class="hoverdescription">Visual Studio Code</div>
        </i>
        <i class="devicon-wordpress-plain">
          <div class="hoverdescription">Wordpress</div>
        </i>
        <i class="devicon-photoshop-plain">
          <div class="hoverdescription">Photoshop</div>
        </i>
        <i class="devicon-illustrator-plain">
          <div class="hoverdescription">Illustrator</div>
        </i>
        <i class="devicon-linux-plain">
          <div class="hoverdescription">Linux</div>
        </i>
        <i class="devicon-windows8-original">
          <div class="hoverdescription">Windows</div>
        </i>
        <i class="devicon-apple-original">
          <div class="hoverdescription">Apple</div>
        </i>
        <i class="devicon-sass-original">
          <div class="hoverdescription">Sass</div>
        </i>
        <i class="devicon-csharp-plain">
          <div class="hoverdescription">C#</div>
        </i>
      </div>
    </div>

    <div class="skills-type-2 animated slideInRight" id="type2">
      <h1 class="title is-3 languages-subtitle">
        Soft Skills:
        <a @click="ShowSkillsTypeOne" class="button is-info is-rounded back-button">
          <i class="fas fa-chevron-left"></i>
          <p>Zurück</p>
        </a>
      </h1>

      <div class="soft-skills">
        Motivation. Teamfähigkeit. Kritikfähigkeit. Zuverlässigkeit. Flexibilität. Stressresistenz.</div>
      <h1 class="title is-3 languages-subtitle">Sprachen:</h1>

      <div class="columns skills-languages">
        <div class="column is-half">
          <img class="language-img" src="../assets/img/deutsch.jpg" alt>
          <p>100%</p>
          <progress class="progress is-info language-progress" value="100" max="100"></progress>
        </div>

        <div class="column is-half">
          <img class="language-img" src="../assets/img/englisch.jpg" alt>
          <p>80%</p>
          <progress class="progress is-info language-progress" value="80" max="100">80%</progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentSkills",
  data: function() {
    return {
      linewidth: 0
    };
  },
  methods: {
    resetSkills() {
      this.linewidth = 0;
    },
    loadSkills() {
      this.linewidth = 90;
    },
    ShowSkillsTypeOne() {
      document.getElementById("type2").style.display = "none";
      document.getElementById("type1").style.display = "";
    },
    ShowSkillsTypeTwo() {
      document.getElementById("type1").style.display = "none";
      document.getElementById("type2").style.display = "";
    }
  },
  mounted() {
    this.ShowSkillsTypeOne();
  }
};
</script>


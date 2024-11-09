<template>
  <div id="app">
    <viewport>
      <Heading
        :full_name="full_name"
        :tagline="tagline"
        :job_searching="job_searching"
        :contacts="contacts"
      ></Heading>
      <Profile :profile="profile"></Profile>
      <Education :education="education"></Education>
      <Experience :experience="experience"></Experience>
    </viewport>
    <foot-foot></foot-foot>
  </div>
</template>

<script>
import Viewport from "./components/Viewport";
import Heading from "./components/Heading";
import FootFoot from "./components/FootFoot";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Experience from "./components/Experience";

import employment_history from "@/assets/data/employment_history.js";

const App = {
  name: "app",
  components: {
    Viewport,
    Heading,
    Profile,
    Education,
    Experience,
    FootFoot,
  },
  data() {
    return employment_history;
  },
};
export default App;
</script>

<style>
/* Global variables for color palette scheme */
:root {
  --main-bg-color: #222;
  --main-txt-color: #aaa;
  --main-a-color: #9ebcff;
  --main-a-hover-bg: #3f48cc;
  --main-highlight-color: #c8ad55;
  --main-btn-highlight: rgba(200, 173, 85, 0.1);
  --footer-txt-color: aliceblue;

  --splash-bg-color: #444;
  --splash-header-color: #ccc;
  --splash-a-color: #228dff;
  --splash-subtitle-color: #26547c;
}

/* Put up a dark curtain */
@media screen {
  html,
  body {
    background: var(--main-bg-color);
  }
}

/* Make selection only highlight as red */
::selection {
  color: red;
}

/* Defines Letter size: 8.5 x 11 inches */
@page {
  size: 8.5in 11in;
}

h2 {
  margin: 0px;
  padding: 0px 10px;
  background: #228dff;
  color: #fff;
}
</style>

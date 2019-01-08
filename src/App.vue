<template>
  <div id="app">
    <viewport>
      <h1>Jake Brinkmann</h1>
      <sub-heading></sub-heading>
      <vertical-accordion></vertical-accordion>
    </viewport>
    <foot-foot></foot-foot>
  </div>
</template>

<script>
import Viewport from './components/Viewport'
import SubHeading from './components/SubHeading'
import VerticalAccordion from './components/VerticalAccordion'
import FootFoot from './components/FootFoot'

const App = {
  name: 'app',
  components: {
    Viewport,
    SubHeading,
    VerticalAccordion,
    FootFoot,
  },
  data () {
    return {
    }
  },
}
export default App
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
  --splash-a-color: #228DFF;
}

/* Put up a dark curtain */
html, body {
  background: var(--main-bg-color);
}

/* Allow header to not block other elements */
h1 {
    display: inline-block;
}

/* Make selection only highlight as red */
::selection {
  color: red;
}
</style>

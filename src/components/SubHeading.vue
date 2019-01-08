<template>
  <span class="sub">
    Research and Applied Data Scientist.<br>
    <a href="//twitter.com/jakebrinkmann/">
      <fa-icon name="brands/twitter" id="twitter-badge"></fa-icon>
    </a>
    <a href="//github.com/jakebrinkmann/">
      <fa-icon name="brands/github" id="github-badge"></fa-icon>
    </a>
    <a href="//scholar.google.com/citations?user=hZNcv7UAAAAJ&hl=en">
      <fa-icon name="graduation-cap" id="scholar-badge"></fa-icon>
    </a>
  </span>
</template>

<script>
// TODO: only import the icons used to reduce bundle size
import * as FaIcon from "vue-awesome";

const SubHeading = {
  name: "SubHeading",
  components: {
    FaIcon
  }
};
export default SubHeading;
</script>

<style scoped>
span.sub {
  display: inline-block;
  margin-top: 10px;
  line-height: 1.5;
  padding: 8px 25px;
}

#twitter-badge, #github-badge, #scholar-badge {
  /* font-size: 36px; */
  width: 36px;
  height: 36px;
  vertical-align: top;
  color: var(--splash-a-color);
  margin: 0 5px 0 5px;
}
</style>

<template>
  <div class="footer">
    <p>‹/› with <span class="heart">♥</span>
      from South Dakota © Jake Brinkmann IP, LLC
      <br>
      Except where otherwise noted, content on this site is released under
      <a href='https://creativecommons.org/licenses/by/4.0/'>CC-BY-4.0</a>
    </p>
  </div>
</template>

<script>
const FootFoot = { name: "FootFoot" };
export default FootFoot;
</script>

<style scoped>
/* This is the class used for the footer */
.footer {
  font-size: 8px;
  text-align: center;
  color: var(--footer-txt-color);
  background-color: var(--main-bg-color);
  position: sticky;
  min-height: 40px;
  bottom: 0;
  margin: 0 0;
  padding: 0 1em 0 0;
}

.footer p {
  margin-block-start: 0em;
  margin-block-end: 0em;
}

.footer a {
  color: #9ebcff;
}

.heart {
  color: red;
}

.appendix,
.footer.appendix a {
  color: #0f0f0f !important;
  text-decoration: none;
  float: left;
  margin: 0 0.5em;
}
</style>

<template>
  <span class="sub">
    <span class="title">{{$data.$title}}</span><br>
    <span class="subtitle">{{$data.$subtitle}}</span>
    <br>
    <a v-for="(contact, index) in $data.$contact"
       :key="index"
       :href="contact.link"
       class="icons">
      <fa-icon :name="contact.icon"></fa-icon>
    </a>
  </span>
</template>

<script>
// TODO: only import the icons used to reduce bundle size
import * as FaIcon from "vue-awesome";
// Load all contact and title information
import experience from "@/assets/data/experience"

const SubHeading = {
  name: "SubHeading",
  components: {
    FaIcon
  },
  data () { return experience}
};
export default SubHeading;
</script>

<style scoped>
* {
  margin: 0 0;
  padding: 0 0;
}

span.sub {
  display: inline-block;
  margin-top: 10px;
  line-height: 1.5;
  padding: 8px 25px;
}

.icons svg {
  /* font-size: 36px; */
  width: 18px;
  height: 18px;
  vertical-align: bottom;
  color: var(--splash-a-color);
  margin: 0 5px 0 5px;
}

.subtitle {
  color: var(--splash-bg-color);
  font-size: 10px;
  font-family: Georgia, serif;
  font-style: oblique;
  overflow-x: auto;
}
</style>

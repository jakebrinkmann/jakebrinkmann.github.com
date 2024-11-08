<template>
  <span class="sub">
    <span class="tagline">{{ tagline }}</span>
    <br />
    <a
      v-for="(contact, index) in contacts"
      :key="index"
      :href="contact.link"
      class="icons"
    >
      <fa-icon :name="contact.icon"></fa-icon>
    </a>
  </span>
</template>

<script>
// TODO: only import the icons used to reduce bundle size
import * as FaIcon from "vue-awesome";

const SubHeading = {
  name: "SubHeading",
  props: {
    contacts: Array,
    tagline: String,
  },
  components: {
    FaIcon,
  },
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
  margin-top: 0px;
  line-height: 1.5;
  padding: 8px 8px;
}

.icons svg {
  /* font-size: 36px; */
  width: 18px;
  height: 18px;
  vertical-align: bottom;
  color: var(--splash-a-color);
  margin: 0 5px 0 5px;
}

@media print {
  span.sub {
    position: fixed;
    top: 0;
    right: 0;

    display: inline-block;
  }
  span.sub .icons {
    line-height: 0;
    padding: 10px;
  }
}
</style>

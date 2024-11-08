<template>
  <div class="banner">
    <div class="banner_left">
      <img :src="pictureSrc" alt="Profile Picture" class="profile_pic" />
      <!-- <span v-if="job_searching" class="badge">Open to Work</span> -->
    </div>
    <div class="banner_right">
      <h1 class="heading">{{ full_name }}</h1>
      <SubHeading :contacts="contacts" :tagline="tagline"></SubHeading>
    </div>
  </div>
</template>

<script>
import SubHeading from "./SubHeading";

export default {
  name: "Heading",
  components: { SubHeading },
  props: {
    contacts: Array,
    full_name: String,
    job_searching: Boolean,
    profile: Array,
    tagline: String,
  },
  data() {
    return {
      pictureSrc: require("../assets/img/unnamed.jpg"),
    };
  },
};
</script>

<style scoped>
.heading {
  text-align: center;
  vertical-align: top;
  font-family: Arial, sans-serif;
  margin: 0em 0em;
}
@media print {
  .banner_left {
    display: none;
  }

  .heading {
    margin-bottom: 10px;
  }
}
.profile_pic {
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 95px;
  max-height: 95px;
  border-radius: 25%;
  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.3);
  display: block;
}
.banner {
  width: 800px;
  height: auto;
  display: flex;
  margin: 0px auto;
  padding: 5px;
}
.banner_left {
  width: 100px;
}
.badge {
  font-size: 0.65rem;
  width: fit-content;
  display: block;
  color: var(--splash-a-color);
  background-color: var(--splash-bg-color);
  border-radius: 12px;
  padding: 2px;
  text-transform: uppercase;
  text-align: center;
  box-shadow: 0 0 8px rgba(40, 167, 69, 0.5); /* Green glow effect */
  transition: box-shadow 0.3s ease-in-out;
  padding: 5px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
}

/* Hover effect for a stronger glow */
.badge:hover {
  box-shadow: 0 0 15px rgba(40, 167, 69, 0.7); /* Stronger green glow */
}
</style>

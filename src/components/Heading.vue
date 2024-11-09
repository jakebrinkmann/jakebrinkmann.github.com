<template>
  <div class="banner">
    <div class="banner_left">
      <img :src="pictureSrc" alt="Profile Picture" class="profile_pic" />
    </div>
    <div class="banner_right">
      <h1 class="heading">{{ full_name }}</h1>
      <SubHeading :contacts="contacts" :tagline="tagline"></SubHeading>
    </div>
    <span v-if="job_searching" class="badge">Job Hunting!</span>
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
  font-size: 1.65rem;
  width: fit-content;
  height: fit-content;
  display: block;
  color: var(--splash-a-color);
  border-radius: 12px;
  text-transform: uppercase;
  text-align: center;
  /* Blue glow effect */
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
  transition: box-shadow 0.3s ease-in-out;
  padding: 5px 15px;
  margin: 10px auto 0;
}

.badge:hover {
  /* Stronger blue glow */
  box-shadow: 0 0 15px rgba(0, 123, 255, 0.7);
  background-color: var(--splash-bg-color);
}

@media print {
  .badge {
    display: none;
  }
}
</style>

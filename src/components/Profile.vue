<template>
  <div class="profile">
    <h2>Profile</h2>
    <span v-for="(subtitle, index) in profile" :key="index" class="subtitle">
      {{ subtitle }}
      <br />
    </span>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    profile: Array,
  },
};
</script>

<style scoped>
.subtitle {
  color: var(--splash-bg-color);
  font-size: 12px;
  font-family: Georgia, sans-serif;
  display: block;
  padding: 5px;
}
</style>

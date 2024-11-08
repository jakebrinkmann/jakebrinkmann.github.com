<template>
  <div class="education">
    <h2>Education</h2>
    <div class="education-container">
      <div
        v-for="(item, index) in education"
        :key="index"
        class="education-item"
      >
        <div class="education-detail">
          <span>{{ item.degree }}, {{ item.GPA }}</span>
          <span>
            <a :href="'https://' + item.url" target="_blank">{{
              item.institution
            }}</a></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Education",
  props: {
    education: Array,
  },
};
</script>

<style scoped>
.education-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* two equal columns */
}

.education-item {
  padding: 10px;
  border-radius: 8px;
}

.education-detail {
  display: flex;
  flex-direction: column;
  color: var(--main-txt-color);
  font-weight: 800;
}

a {
  color: var(--main-a-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>

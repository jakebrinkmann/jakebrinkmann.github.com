<template>
  <section class="education" aria-labelledby="education-heading">
    <h2 id="education-heading">Education</h2>
    <div role="list" class="education-container">
      <div
        v-for="(item, index) in education"
        :key="index"
        class="education-item"
        role="listitem"
      >
        <div class="education-detail" :aria-labelledby="item.degree">
          <span :id="item.degree">{{ item.degree }}, {{ item.GPA }}</span>
          <span>
            <a :href="'https://' + item.url" target="_blank">{{
              item.institution
            }}</a></span
          >
        </div>
      </div>
    </div>
  </section>
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

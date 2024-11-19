<template>
  <section aria-labelledby="work-experience-heading">
    <h2 id="work-experience-heading">Work Experience</h2>
    <div class="work-experience" role="list">
      <div
        class="job"
        v-for="(job, ix) in experience"
        :key="ix"
        role="listitem"
        :aria-labelledby="job.company + ', ' + job.title + '-heading'"
      >
        <div
          class="job-position"
          :aria-label="job.company + ', ' + job.title + '-heading'"
        >
          {{ job.title }}
        </div>
        <div class="company-team">
          <a :href="'https://' + job.url" target="_blank">{{ job.company }}</a>
          • {{ job.location }}
        </div>
        <div class="date-location">
          {{ calculateDuration(job.duration) }}
        </div>
        <ul class="job-description">
          <li v-for="(resp, iy) in job.responsibilities.slice(0, 3)" :key="iy">
            {{ resp }}
          </li>
        </ul>
      </div>
    </div>
    <h2>Technical Skills</h2>
    <div class="skills">
      <div
        class="skill-item"
        v-for="skill in uniqueSkills.slice(0, 35)"
        :key="skill"
      >
        {{ skill }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Experience",
  props: {
    experience: Array,
  },
  methods: {
    calculateDuration: (duration) => {
      const parseDate = (dateStr) => {
        const [year, month, day] = dateStr.split("-").map(Number);
        return new Date(Date.UTC(year, month - 1, day));
      };

      const start = parseDate(duration.start);
      const end = parseDate(duration.end);

      let years = end.getUTCFullYear() - start.getUTCFullYear();
      let months = end.getUTCMonth() - start.getUTCMonth();
      if (months < 0) {
        years--;
        months += 12;
      }

      const formatYear = (date) => `${date.getUTCFullYear()}`;
      const formatMonth = (date) =>
        String(date.getUTCMonth() + 1).padStart(2, "0");

      let dur = "";
      if (years === 0) {
        dur = `${months} mo`;
      } else if (months > 0) {
        dur = `${years} yrs, ${months} mo`;
      } else {
        dur = `${years} yrs`;
      }

      return [
        `${formatMonth(start)}/${formatYear(start)}`,
        `${formatMonth(end)}/${formatYear(end)} (${dur})`,
      ].join(" — ");
    },
  },
  computed: {
    uniqueSkills() {
      // Split the raw text by common delimiters (commas, parentheses)
      let rawSkills = this.experience
        .map((job) => job.software)
        .join("\n")
        .replace(/\(.*?\)/g, "") // Remove anything inside parentheses
        .split(/[\s,;]+/) // Split by spaces, commas, or semicolons
        .map((skill) => skill.trim()) // Trim any leading or trailing spaces
        .filter((skill) => skill.length > 0); // Remove empty items

      // Remove duplicates using Set and return the result
      return [...new Set(rawSkills)];
    },
  },
};
</script>

<style scoped>
.work-experience {
  font-family: Arial, sans-serif;
  margin: 10px;

  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 equal columns */
  gap: 5px;
  grid-auto-rows: minmax(50px, auto);
  grid-auto-flow: dense;
}

.work-experience h2 {
  font-weight: bold;
  color: #0077c0; /* Adjust color to match the section header */
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.job {
  border-top: 1px solid var(--splash-a-color);
  display: flex;
  flex-direction: column;
}

.job > *:first-child {
  margin-top: 5px;
}

.job-position {
  font-weight: bold;
  font-size: 1.1em;
}

.company-team {
  font-style: italic;
  color: var(--splash-subtitle-color);
  font-size: 0.9em;
}

.date-location {
  font-size: 0.9em;
  color: var(--splash-subtitle-color);
}

.job-details {
  margin-top: 10px;
}

.job-description {
  list-style-type: disc;
  margin-left: 5px;
  padding-left: 0px;
  font-size: 0.7em;
}

.job-description li {
  margin-bottom: 5px;
}

/* TODO: Skills could maybe be it's own component */
.skills {
  display: grid;
  gap: 3px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  padding-top: 5px;
}

.skill-item {
  border-radius: 5px;
  text-align: center;
  font-size: 9px;
  font-weight: bold;
  color: #333;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
}
</style>

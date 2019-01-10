<template>
  <div class="accordion vertical">
    <ul>
      <li v-for="(project, ix) in projects"
          :key="ix">
        <input type="radio"
               :id="'radio-' + ix"
               name="radio-accordion"
               :checked="ix === 0 ? 'checked' : ''"/>
        <label :for="'radio-' + ix">
          {{project.$title}}
        </label>
        <div class="content">
          <dl>
            <span v-for="(item, iy) in project.$items"
                  :key="iy">
            <dt>
              <a :href="item.link" v-if="item.link">{{item.label}}</a>
              <span v-else>{{item.label}}</span>
            </dt>
            <dd>{{item.text}}</dd>
            </span>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import experience from '@/assets/data/experience'

const VerticalAccordion = {
  name: "VerticalAccordion",
  data () { return {projects: experience.$projects} }
};

export default VerticalAccordion;
</script>

<style scoped>
/* Shared for all accordion types */
.accordion ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.accordion li {
  margin: 0;
  padding: 0;
}
.accordion [type="radio"],
.accordion [type="checkbox"] {
  display: none;
}
.accordion label {
  display: block;
  font-size: 24px;
  line-height: 24px;
  background: #ccc;
  border: 1px solid #616161;
  color: #000;
  font-weight: bolder;
  cursor: pointer;
  transition: all 0.2s ease-out;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
}
.accordion ul li label:hover,
.accordion [type="radio"]:checked ~ label,
.accordion [type="checkbox"]:checked ~ label {
  background: #228dff;
  color: #fff;
}
.accordion .content {
  padding: 0 10px;
  overflow: hidden;
  border: 1px solid #fff; /* Make the border match the background so it fades in nicely */
  transition: all 0.5s ease-out;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
}
.accordion a {
  color: #616161;
  padding: 0;
  margin: 10px 0;
}

/* Vertical */
.vertical ul li {
  overflow: hidden;
  margin: 0 0 1px;
}
.vertical ul li label {
  padding: 10px;
}
.vertical [type="radio"]:checked ~ label,
.vertical [type="checkbox"]:checked ~ label {
  border-bottom: 0;
}
.vertical ul li label:hover {
  border: 1px solid #616161; /* We don't want the border to disappear on hover */
}
.vertical ul li .content {
  height: 0px;
  border-top: 0;
}
.vertical [type="radio"]:checked ~ label ~ .content,
.vertical [type="checkbox"]:checked ~ label ~ .content {
  height: auto;
  border: 1px solid #616161;
}

/* Internal Accordian Description Lists */
dt {
  padding-top: 3px;
}

</style>

<template>
  <!-- TODO: registering components into our websiteCopy  -->
  <fa-icon v-if="this['<>'] === 'fa-icon'"
           :name="this['name']"
           />
  <!-- Use the built-in component element -->
  <component v-else
             :is="this['<>']"
             :class="this['$class'] ? this['$class'] : null"
             :type="this['type'] ? this['type'] : null"
             :href="this['href'] ? this['href'] : null"
             :data="this['data'] ? this['data'] : null"
             :onload="this['onload'] ? this['onload'] : null"
             :id="this['id'] ? this['id'] : null"
             :alt="this['alt'] ? this['alt'] : null"
             :name="this['name'] ? this['name'] : null"
             :onclick="this['onclick'] ? this['onclick'] : null"
             >
    {{ value }}
    <elf-caster v-for="(component, index) in components"
                :key="index"
                v-bind="component"/>
  </component>
</template>

<script>

// We register this here, so that it is globally available
// to reference inside webCopy as `{'<>': 'fa-icon'}`
import FaIcon from 'vue-awesome'

// Use Props (passed down from parent) to determine how to render ourself
// ref: https://vuejs.org/v2/guide/components-props.html
const ElfCaster = {
  name: 'ElfCaster',
  props: {
    // Strongly coupled to "../websiteCopy.js", might be generatable
    '<>': {
      type: String,
      default: 'unknown-html-tag'
    },
    // Class is a reserved keyword in VueJS
    '$class': {
      type: String,
      default: ''
    },
    'components': {
      type: Array,
      // Object/Array defaults must use a factory function
      default: () => []
    },
    'type': {
      type: String,
      default: ''
    },
    'data': {
      type: String,
      default: ''
    },
    'id': {
      type: String,
      default: ''
    },
    'onload': {
      type: String,
      default: ''
    },
    'value': {
      type: String,
      default: ''
    },
    'href': {
      type: String,
      default: ''
    },
    'name': {
      type: String,
      default: ''
    },
    'alt': {
      type: String,
      default: ''
    },
    'onclick': {
      type: String,
      default: ''
    },
  },
  components: {
    FaIcon,
  }
}
export default ElfCaster
</script>

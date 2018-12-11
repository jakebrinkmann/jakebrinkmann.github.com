<template>
  <!-- Use the built-in component element -->
  <component :is="this['<>']"
             :class="this['$class']"
             :type="this['type']"
             :href="this['href']"
             :data="this['data']"
             :onload="this['onload']"
             :id="this['id']"
             >
    {{ value }}
    <elf-caster v-for="(component, index) in components"
                :key="index"
                v-bind="component"/>
  </component>
</template>

<script>

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
  }
}
export default ElfCaster
</script>

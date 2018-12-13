<template>
  <div id="app">
    <!-- ElfCaster will recurse down through nested components -->
    <elf-caster v-for="(component, index) in websiteCopy['components']"
                :key="index"
                v-bind="component" />
  </div>
</template>

<script>
// Our helpful template-json-to-html library
import ElfCaster from './components/ElfCaster'
// The input JSON of our website copywrite
import websiteCopy from './websiteCopy'
// TODO: there must be a better
import styleLogo from './scripts/styleLogo'

const App = {
  name: 'app',
  components: {
    ElfCaster
  },
  data () {
    return {
      websiteCopy
    }
  },
  // TODO: this is an ugly way to do this...
  mounted () {
    setTimeout(() => {
      styleLogo('logo')
      styleLogo('icon-noun-datacenter', '#2F2F2F')
    }, 500)
  }
}
export default App
</script>

<style>
@import 'assets/css/style.css';
</style>

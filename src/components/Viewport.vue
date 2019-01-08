<template>
  <div class="bin">
    <slot></slot>
  </div>
</template>

<script>
const Viewport = {
  name: "Viewport"
}
export default Viewport
</script>

<style scoped>
div.bin {
    background: white;
    border: 2px solid #ccc;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 800px;
    padding: 5px;
}
</style>

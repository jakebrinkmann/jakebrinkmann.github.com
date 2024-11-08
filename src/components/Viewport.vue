<template>
  <div class="bin">
    <slot></slot>
  </div>
</template>

<script>
const Viewport = {
  name: "Viewport",
};
export default Viewport;
</script>

<style scoped>
div.bin {
  background: white;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 5px;

  min-width: 800px;
  max-width: 8.5in; /* Ensures the content fits the letter size */

  height: auto;
  max-height: 11in; /* Matches the height of Letter size */
}
@media screen {
  div.bin {
    margin: 50px auto;
  }
}

@media print {
  div.bin {
    margin: 0px auto;
  }
}
</style>

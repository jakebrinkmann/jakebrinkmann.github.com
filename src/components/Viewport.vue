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
  margin: 0 auto;
  box-sizing: border-box; /* Include padding and border in dimensions */

  width: 8.5in; /* US Letter width */
  height: 11in; /* US Letter height */

  overflow-y: hidden;
  overflow-x: hidden;
}
@media screen {
  div.bin {
    margin: 50px auto;
  }
}

@media print {
  div.bin {
    margin: 0px 0px;
    border: 0px 0px;
  }
}
</style>

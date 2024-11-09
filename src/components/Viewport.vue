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

  width: 8.3in;
  height: 10.8in;

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

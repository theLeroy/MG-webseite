<template>
  <div class="Bild">
    <img :src="Bildlink" alt="Bild der Location">
  </div>
</template>

<script>
export default {
  name: 'Bild',
  props: {
    Bildlink: String
  }
}
</script>

<style scoped lang="scss">
img {
  width: 100%;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

</style>

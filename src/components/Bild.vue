<template>
  <div class="Bild">
    <img v-if="Bildlink === '1'" src="@/assets/bg1.jpg" alt="Bild der Location">
    <img v-else-if="Bildlink === '2'" src="@/assets/bg2.jpg" alt="Bild der Location">
    <img v-else src="@/assets/bg3.jpg" alt="Bild der Location">

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
  height: 100%;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

</style>

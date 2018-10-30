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
}

</style>

<template>
  <section :style="{'background-color': background, 'height': height}">
  </section>
</template>

<script>

export default {
  name: 'section',
  props: {
    background: String,
    height: String
  }
}

</script>

<style scoped lang="scss">
section {
  width: 100%;
}
</style>

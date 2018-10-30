<template>
  <div>
    <BildSection :Bildlink="'https://i.pinimg.com/originals/8e/68/fa/8e68fa1859407d59544bf86d5449685b.jpg'" :Color="'Cyan'" :title="Bildsection1Title" :text="Bildsection1Text"/>
  </div>
</template>

<script>

import BildSection from '@/components/BildSection.vue'


export default {
  name: 'Frontpage',
  components: {
    BildSection
  },
  data () {
    return {
      Bildsection1Title: 'Hay Eins Title',
      Bildsection1Text: 'Hay i bi ein text Lorem ipsum spasst'
    }
  }
}

</script>

<style scoped lang="scss">

</style>

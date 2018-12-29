<template>
  <div>
    <section class="section" id="section1">
      <logo/>
      <div class="Upload">
        <form class="" method="post">
          <input type="text" name="Titel" placeholder="Titel des Fotos">
          <input type="text" name="Username" placeholder="Dein Nutzername">
          <input type="checkbox" name="yourbrand">
          <label for="yourbrand">Das Bild/Video darf auf yourbrand.ch verwendet werden.</label>
          <input type="file" name="Imgae" value="Upload">
          <input type="submit" name="" value="Absenden">
        </form>
      </div>
    </section>
    <section class="section" id="section2">
      <SlideShow/>
    </section>
    <section class="section" id="section3">
    </section>
  </div>
</template>

<script>

import Logo from '@/components/Logo.vue'
import SlideShow from '@/components/SlideShow.vue'

export default {
  name: 'SocialWall',
  components: {
    Logo,
    SlideShow
  },
  mounted: function () {
  },
  data () {
    return {
    }
  }
}

</script>

<style scoped lang="scss">
#section1 {
  height: 100vh;
  background-color: none;
}
#section2 {
  height: 100vh;
  background-color: none;
}
#section3 {
  height: 100vh;
  background-color: #ffffff;
}
#section4 {
  height: 100vh;
}
</style>

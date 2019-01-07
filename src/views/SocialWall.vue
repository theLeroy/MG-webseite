<template>
  <div>
    <section class="section" id="section1">
      <logo/>
      <div class="Titel">Teile jetzt deine Besten Indiekator Momente!</div>
      <div class="Upload">
        <form class="" method="post">
          <input id="Title" type="text" name="Titel" placeholder="Titel des Fotos">
          <input id="User" type="text" name="Username" placeholder="Dein Nutzername">
          <span class="BrandC">
            <input id="BrandBox" type="checkbox" name="yourbrand">
            <label id="Brand" for="yourbrand">Das Bild/Video darf auf yourbrand.ch verwendet werden.</label>
          </span>
          <div class="btnC">
            <button class="btn">Foto Hochladen</button>
            <input ref="Upload" id="Upload" type="file" name="Imgae" value="Upload" v-on:change="show = true">
            <span ref="ok" v-bind:class="{ show: show}" class="Okey">asdasda</span>
          </div>
          <input id="Submit" class="btn" type="submit" name="" value="Absenden">
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
  // mounted: function () {
  //   this.$refs['Upload'].onchange = (() => {
  //     // this.$refs['ok'].toggleClass('show')
  //     // show = true
  //
  //     this.$set(this.someObject, 'show', 1)
  //     alert("saiud")
  //   })
  // },
  data () {
    return {
      show: false
    }
  }
}

</script>

<style scoped lang="scss">
.Titel {
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 40px;
  color: #FF9A56;
  text-align: center;
}
.Upload {
  width: 50vw;
  margin-left: 25vw;
  background-color: #fff;
  border-radius: 5px;
  text-align: center;
  color: #FF9A56;
  transition: 1s;
  padding: 10px;
  box-sizing: border-box;
  * {
   display: block;
  }
}
#Title, #User {
  outline: 0px;
  border: 2px solid #FF9A56;
  border-radius: 5px;
  width: 50%;
  height: 25px;
  margin-top: 20px;
  padding-left: 4px;
  margin-left: 25%;
}
.BrandC {
  width: 50%;
  margin-left: 25%;
  margin-top: 5px;
  text-align: left;
  margin-bottom: 20px;
}
#BrandBox, #Brand {
  display: inline;
  font-size: 14px;
}
#BrandBox {
  margin-right: 8px;
}

.btnC {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btn {
  border: 2px solid #FF9A56;
  color: gray;
  background-color: white;
  padding: 6px 15px;
  border-radius: 8px;
  font-size: 16px;
  transition: 1s;
  &:hover {
    color: #fff;
    background: #FF9A56;
    transition: 1s;
  }
}

.btnC input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
.Okey {
  width: 20px;
  height: 20px;
  opacity: 0;
  background: green;
}
.show {
  opacity: 1;
}
//Sections
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

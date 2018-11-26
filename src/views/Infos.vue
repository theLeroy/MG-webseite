<template>
  <div>
    <div class="section" id="section1">
      <logo/>
    </div>
    <div class="section" id="section2">
      <h1>Infos:</h1>
      <p class="Text">Wir empfehlen dir mit dem Öv zu kommen. Du kannst die RBS s7 von Bern aus nehmen. Extra Züge stehen nicht bereit.</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d783.559771839669!2d7.469244374637186!3d46.97722483962816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e3a06eb072523%3A0x879a454eda17058e!2sStufenbau+Eventlocation!5e1!3m2!1sde!2sch!4v1543223445677" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>

      <a ref="btnHover2" class="btnLinkL btnLink" href="https://www.ticketcorner.ch/tickets.html?affiliate=TCS&doc=artistPages%2Ftickets&fun=artist&action=tickets&erid=2331356&kuid=447001&includeOnlybookable=false&sort_by_ytix=evid">
        <div class="btnText">
          Kaufen
        </div>
        <Btn/>
      </a>
    </div>
  </div>
</template>

<script>

import Logo from '@/components/Logo.vue'
import Dots from '@/components/Dots.vue'
import Btn from '@/components/Btn.vue'

export default {
  name: 'Frontpage',
  components: {
    Logo,
    Dots,
    Btn
  },
  mounted: function () {
    this.$refs.btnHover2.addEventListener('mouseover', () => {
      this.$refs.btnHover2.classList.add('btnHover')
    })
    this.$refs.btnHover2.addEventListener('mouseout', () => {
      this.$refs.btnHover2.classList.remove('btnHover')
    })
  }
}

</script>

<style scoped lang="scss">
iframe {
  width: 50vw;
  margin-left: 25vw;
  margin-top: 20px;
}
$o: #FF9A56;
h1 {
  font-size: 35px;
  font-weight: 900;
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  margin-top: 20px;

}
.Text {
  font-size: 16px;
  text-align: center;
  padding: 0px 25vw;
  color: #fff;
  margin-top: 100px;

}
svg {
  width: 50vw;
  margin-left: 25vw;
  margin-top: 100px;
}
.btnHover {
  transition: 0.5s;
}
.btnText {
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  position: absolute;
  vertical-align: middle;
  margin-top: 32px;
  text-align: center;
  width: 93%;
}
.btnLink {
  position: absolute;
  margin-left: calc(50% - 100px);
  margin-top: 90px;
  margin-bottom: 100px;
}

@media only screen and (max-width: 850px) {
}
@media only screen and (max-width: 600px) {
}

</style>

<template>
  <div>
    <div class="section" id="section1">
      <logo/>
    </div>
    <div class="section" id="section2">
      <h1>Infos:</h1>
      <p class="Text">Wir empfehlen dir mit dem Öv zu kommen. Du kannst die RBS s7 von Bern aus nehmen. Extra Züge stehen nicht bereit.</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d783.559771839669!2d7.469244374637186!3d46.97722483962816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e3a06eb072523%3A0x879a454eda17058e!2sStufenbau+Eventlocation!5e1!3m2!1sde!2sch!4v1543223445677" width="600" height="600" frameborder="0" class="Google" allowfullscreen></iframe>

      <section class="moreInfos">
        <div class="InfoBox">
          <h2>GETRÄNKE</h2>
          <p class="infotext">
            Natürlich ist es erlaubt seine eigenen Getränke mitzunehmen - sofern mindestens ein 2-Tages Pass gekauft wurde. Das Limit beträgt pro Person 5 Liter (ausschliesslich PET, Aludosen oder Tetra-Paks).
          </p>
        </div>
        <div class="InfoBox">
          <h2>INFRASTRUKTUR</h2>
          <p class="infotext">
            Über dem gesamten Gelände sind reichlich Toiletten verteilt. Sie werden regelmässig gereinigt. In der "Fressmeile" gibt es mehrere Essensstände, die von Fast-Food bis hin zu Asia-Food reichen.
          </p>
        </div>
        <div class="InfoBox">
          <h2>SICHERHEIT UND REGELN</h2>
          <p class="infotext">
            Der Konsum von illegalen Drogen jeglicher Art ist strikt untersagt. Trotz Einhalten der gesetzlichen Vorgaben von maximal 100db kann durch die laute Musik kann dein Gehör beschädigt werden. Wir empfehlen daher geeigneten Gehörschutz mitzunehmen. Am Einlass werden Gehörschutzpfropfen verteilt.
          </p>
        </div>
        <div class="InfoBox">
          <h2>CAMPINGPLATZ</h2>
          <p class="infotext">
            Der Campingplatz ist nach Möglichkeit sauber zu halten. Campieren ist entweder mit einem Zelt oder Wohnwagen gestattet.
          </p>
        </div>
        <div class="InfoBox">
          <h2>MEDIEN</h2>
          <p class="infotext">
            Während dem ganzen Festival werden Film-, sowie Fotoaufnahmen vom Bronxe Media Team erstellt. Mit Kauf eines Festivaltickets gibst du dein Einverständnis, dass Fotos oder Videoclips von dir auf jeglichen Plattformen publiziert werden dürfen.
          </p>
        </div>
        <div class="InfoBox">
          <h2>EINLASS (FESTIVALBÄNDEL)</h2>
          <p class="infotext">
            Beim Eingang bekommst du ein Festivalbändel. Dieses ist nicht übertragbar und während dem ganzen Festival zu tragen. Ohne den Bändel wirst du nicht ins Festivalgelände gelassen.
          </p>
        </div>
      </section>




      <a ref="btnHover2" class="btnLinkL btnLink" href="/#/Tickets">
        <div class="btnText">
          Tickets Kaufen
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
$o: #FF9A56;
.Google {
  border-image: -moz-linear-gradient(135deg, #3cfcfe 0%,#ff9a56 100%);
  border-image: -webkit-linear-gradient(135deg, #3cfcfe 0%,#ff9a56 100%);
  border-image: linear-gradient(135deg, #3cfcfe 0%,#ff9a56 100%);
  border-image-slice: 1;
  border-width: 5px;
  border-style: solid;
  box-sizing: border-box;
  margin-bottom: 100px;
}
section {
  margin-top: 50px;
}
.InfoBox {
  color: #fff;
  width: 33%;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: text-top;
  font-size: 16px;
  line-height: 1.2;
  padding: 30px;
  h2 {
    font-size: 22px;
    margin-bottom: 10px;
    color: $o;
    font-weight: 500;
  }
}

iframe {
  width: 50vw;
  margin-left: 25vw;
  margin-top: 20px;
}
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

@media only screen and (max-width: 1050px) {
  iframe {
    width: 75vw;
    margin-left: 12.5vw;
    margin-top: 20px;
  }
}
@media only screen and (max-width: 850px) {
  .InfoBox {
    width: 50%;
    padding: 15px;
  }
  iframe {
    width: 85vw;
    margin-left: 7.5vw;
  }
}
@media only screen and (max-width: 600px) {
  iframe {
    width: 90vw;
    margin-left: 5vw;
  }
}

</style>

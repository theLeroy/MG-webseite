<template>
  <div id="AllC">
    <logo/>
    <div class="Acts">
      <div class="lC" v-for="act in Acts" v-if="act.Day === day">
        <div class="Time">
          {{act.Time}}
        </div>
        <div class="Line"></div>
        <section class="TextC">
          <div class="Name">
            {{act.Name}}
          </div>
          <div class="Description">
            {{act.Description}}
          </div>
        </section>
      </div>
    </div>
    <div class="Cardcontainer">
      <Card :Day="'30'" :Month="'October'" :Acts="'Her, Alt-j, Bilderbuch'" :Link="'/#/timeline?day=1'"/>
      <Card :Day="'31'" :Month="'October'" :Acts="'Her, Alt-j, Bilderbuch'" :Link="'/#/timeline?day=2'"/>
      <Card :Day="'01'" :Month="'November'" :Acts="'Her, Alt-j, Bilderbuch'" :Link="'/#/timeline?day=3'"/>
    </div>
    <Dots class="Dots"/>
  </div>
</template>

<script>

import Logo from '@/components/Logo.vue'
import Dots from '@/components/Dots.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'Timeline',
  components: {
    Logo,
    Dots,
    Card
  },
  mounted: function () {

  },
  watch: {
    $route (to, from){
      location.reload()
      window.scrollTo(0, 0)
    }
  },
  data () {
    return {
      day: this.$route.query.day,
      Acts: [
        {
          Time: '16:10',
          Name: 'Alt-j',
          Genre: 'Alternative Rock',
          Day: '1',
          Description: 'Die Innovative Alt-Rock Band aus den Staaten bringt alternative Vibes!'
        },
        {
          Time: '16:10',
          Name: 'Bilderbuch',
          Genre: 'Indie Pop',
          Day: '1',
          Description: 'Popiger Crazy Shit aus Österreich'
        },
        {
          Time: '16:10',
          Name: 'Von Wegen Lisbeth',
          Genre: 'Indie',
          Day: '1',
          Description: 'Deepe Texte und erfrische Melodien'
        },
        {
          Time: '16:10',
          Name: 'Moop Mama',
          Genre: 'Mixed Styles',
          Day: '1',
          Description: 'Ein komplett anderer Mix aus diversen Musikformen ergibt eine Gefühlsachterbahn!'
        },
        {
          Time: '16:10',
          Name: 'Mine',
          Genre: 'Indie Folk',
          Day: '2',
          Description: 'Eine elegante Stimme revolutioniert den deutschen Pop'
        },
        {
          Time: '16:10',
          Name: 'Fatony',
          Genre: 'Rap',
          Day: '2',
          Description: 'Genialer Rapper mit stil'
        },
        {
          Time: '16:10',
          Name: 'AnnenMayKantereit',
          Genre: 'Indie Rock',
          Day: '2',
          Description: 'Die tiefste stimme in Europa'
        },
        {
          Time: '16:10',
          Name: 'Faber',
          Genre: 'Indie Rock',
          Day: '2',
          Description: 'Faber erweckt die Toten zum Leben und die Lebenden tötet er mit seiner Stimme und den atemberaubenden Texten'
        },
        {
          Time: '16:10',
          Name: 'Odezenne',
          Genre: 'Techno, Rap',
          Day: '2',
          Description: 'Ein neuer wind im Technogenre'
        },
        {
          Time: '16:10',
          Name: 'Jeans For Jesus',
          Genre: 'Indie Pop',
          Day: '2',
          Description: 'Jesus wäre stolz!'
        },

        {
          Time: '16:10',
          Name: 'Leyya',
          Genre: 'Indie Pop',
          Day: '2',
          Description: 'Junge leute mit Stil und guter Musik'
        },
        {
          Time: '16:10',
          Name: 'Bonaparte',
          Genre: 'Visual Trash Punk',
          Day: '2',
          Description: 'Bonaparte ist nur schwer mit schwarzer Tinte festhaltbar'
        },
        {
          Time: '16:10',
          Name: 'Audio 88 & Yassin',
          Genre: 'HipHop',
          Day: '3',
          Description: 'Sozialkritische Texte vor das Volk!'
        },
        {
          Time: '16:10',
          Name: 'Kalabrese',
          Genre: 'Techno',
          Day: '3',
          Description: 'Techno im Züridialekt'
        },
        {
          Time: '16:10',
          Name: 'Glass Animals',
          Genre: 'Indie Rock',
          Day: '3',
          Description: 'Diese Musik macht mich Glücklich, dich auch?'
        },
        {
          Time: '16:10',
          Name: 'Gurr',
          Genre: 'Slacker Pop',
          Day: '3',
          Description: 'Wo Pop mit Rock verschwimmt'
        },
        {
          Time: '16:10',
          Name: 'Giant Rocks',
          Genre: 'Indie Rock',
          Day: '3',
          Description: 'Nicht nur der dame "Rockt"'
        },
        {
          Time: '16:10',
          Name: 'Her',
          Genre: 'Indie',
          Day: '3',
          Description: 'Die Indie-Superstars unserer Zeit'
        },
        {
          Time: '16:10',
          Name: 'The xx',
          Genre: 'Indie Rock',
          Day: '3',
          Description: 'Rocken das Indie Genre wie niemand sonst'
        },
        {
          Time: '16:10',
          Name: 'Irié Révoltés',
          Genre: 'Rap',
          Day: '3',
          Description: 'Bilingualer Rap, sozialkritisch mit Reggea gewürzt'
        }
      ]
    }
  }
}

</script>

<style scoped lang="scss">
#AllC {
  overflow: hidden;
  margin-bottom: 210px;
}
.Dots /deep/ .c {
  margin-top: -600px;
}
$cyan: #00FCFE;
$o: #FF9A56;
.lC {
  position: relative;
  height: 200px;
}
.lC:first-of-type {
  margin-top: 100px;
}
.Time {
  color: $cyan;
  font-size: 30px;
  font-weight: 900;
  margin-left: 300px;
  margin-top: 12px;
  position: absolute;
}
.Description {
  color: #fff;
}
.Name {
  margin-bottom: 7px;
}
.TextC {
  position: absolute;
  color: $o;
  margin: 100px;
  font-size: 20px;
  margin-left: 500px;
  margin-top: 15px;
}
.Line {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border-color: $cyan;
  border-style: solid;
  border-width: 8px;
  position: absolute;
  margin-left: 400px;
}
.Line::after {
  width: 8px;
  height: 150px;
  content: "";
  background-color: $cyan;
  /* border-style: solid; */
  /* border-width: 3px; */
  margin-left: 15px;
  margin-top: 45px;
  /* padding-top: 28px; */
  display: inline-block;
}
.Line > :after {
  content: ".";
  display: none;

}

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
@media only screen and (max-width: 950px) {
  .Time {
    margin-left: 200px
  }
  .Line {
    margin-left: 300px;
  }
  .TextC {
    margin-left: 400px;
  }
}
@media only screen and (max-width: 750px) {
  .Time {
    margin-left: 100px
  }
  .Line {
    margin-left: 200px;
  }
  .TextC {
    margin-left: 300px;
  }
}
@media only screen and (max-width: 600px) {
  .Time {
    margin-left: 100px
  }
  .Line {
    margin-left: 20px;
  }
  .TextC {
    margin-left: 100px;
    margin-top: 50px;
    margin-right: 10px;
    margin-bottom: 0px;
  }
}
</style>

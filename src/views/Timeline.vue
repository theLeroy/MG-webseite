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
      <Card :Day="'20'" :Month="'September'" :Acts="'Her, Alt-j, Bilderbuch'" :Link="'/#/timeline?day=1'"/>
      <Card :Day="'21'" :Month="'September'" :Acts="'Her, Alt-j, Bilderbuch'" :Link="'/#/timeline?day=2'"/>
      <Card :Day="'22'" :Month="'September'" :Acts="'Her, Alt-j, Bilderbuch'" :Link="'/#/timeline?day=3'"/>
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
    window.scrollTo(0, 0)
  },
  watch: {
    $route (to, from) {
      location.reload()
      window.scrollTo(0, 0)
    }
  },
  data () {
    return {
      day: this.$route.query.day,
      Acts: [
        {
          Time: '16:30',
          Name: 'Alt-j',
          Genre: 'Alternative Rock',
          Day: '1',
          Description: 'Die Innovative Alt-Rock Band aus den Staaten bringt alternative Vibes!'
        },
        {
          Time: '17:30',
          Name: 'Bilderbuch',
          Genre: 'Indie Pop',
          Day: '1',
          Description: 'Popiger Crazy Shit aus Österreich'
        },
        {
          Time: '18:30',
          Name: 'Von Wegen Lisbeth',
          Genre: 'Indie',
          Day: '1',
          Description: 'Deepe Texte und erfrische Melodien'
        },
        {
          Time: '19:30',
          Name: 'Moop Mama',
          Genre: 'Mixed Styles',
          Day: '1',
          Description: 'Ein komplett anderer Mix aus diversen Musikformen ergibt eine Gefühlsachterbahn!'
        },
        {
          Time: '20:30',
          Name: 'Mine',
          Genre: 'Indie Folk',
          Day: '1',
          Description: 'Eine elegante Stimme revolutioniert den deutschen Pop'
        },
        {
          Time: '21:30',
          Name: 'Fatony',
          Genre: 'Rap',
          Day: '1',
          Description: 'Genialer Rapper mit stil'
        },
        {
          Time: '22:30',
          Name: 'AnnenMayKantereit',
          Genre: 'Indie Rock',
          Day: '1',
          Description: 'Die tiefste stimme in Europa'
        },
        {
          Time: '23:30',
          Name: 'Faber',
          Genre: 'Indie Rock',
          Day: '1',
          Description: 'Faber erweckt die Toten zum Leben und die Lebenden tötet er mit seiner Stimme und den atemberaubenden Texten'
        },
        {
          Time: '00:30',
          Name: 'Odezenne',
          Genre: 'Techno, Rap',
          Day: '1',
          Description: 'Ein neuer wind im Technogenre'
        },
        {
          Time: '01:30',
          Name: 'Jeans For Jesus',
          Genre: 'Indie Pop',
          Day: '1',
          Description: 'Jesus wäre stolz!'
        },

        {
          Time: '16:30',
          Name: 'Leyya',
          Genre: 'Indie Pop',
          Day: '2',
          Description: 'Junge leute mit Stil und guter Musik'
        },
        {
          Time: '17:30',
          Name: 'Bonaparte',
          Genre: 'Visual Trash Punk',
          Day: '2',
          Description: 'Bonaparte ist nur schwer mit schwarzer Tinte festhaltbar'
        },
        {
          Time: '18:30',
          Name: 'Audio 88 & Yassin',
          Genre: 'HipHop',
          Day: '2',
          Description: 'Sozialkritische Texte vor das Volk!'
        },
        {
          Time: '19:30',
          Name: 'Kalabrese',
          Genre: 'Techno',
          Day: '2',
          Description: 'Techno im Züridialekt'
        },
        {
          Time: '20:30',
          Name: 'Glass Animals',
          Genre: 'Indie Rock',
          Day: '2',
          Description: 'Diese Musik macht mich Glücklich, dich auch?'
        },
        {
          Time: '21:30',
          Name: 'Gurr',
          Genre: 'Slacker Pop',
          Day: '2',
          Description: 'Wo Pop mit Rock verschwimmt'
        },
        {
          Time: '22:30',
          Name: 'Giant Rocks',
          Genre: 'Indie Rock',
          Day: '2',
          Description: 'Nicht nur der dame "Rockt"'
        },
        {
          Time: '23:30',
          Name: 'Her',
          Genre: 'Indie',
          Day: '2',
          Description: 'Die Indie-Superstars unserer Zeit'
        },
        {
          Time: '00:30',
          Name: 'The xx',
          Genre: 'Indie Rock',
          Day: '2',
          Description: 'Rocken das Indie Genre wie niemand sonst'
        },
        {
          Time: '01:30',
          Name: 'Irié Révoltés',
          Genre: 'Rap',
          Day: '2',
          Description: 'Bilingualer Rap, sozialkritisch mit Reggea gewürzt'
        },
        {
          Time: '16:30',
          Name: 'Sophie Hunger',
          Genre: 'Rap',
          Day: '3',
          Description: 'Schweizer Musik vom feinsten'
        },
        {
          Time: '17:30',
          Name: 'Herr von Grau',
          Genre: 'Rap',
          Day: '3',
          Description: 'Deutscher "Troll" rab der es in sich hat.'
        },
        {
          Time: '18:30',
          Name: 'Die Höchste Eisenbahn',
          Genre: 'Rap',
          Day: '3',
          Description: 'Die besten depressiven gute Laune Musiker der Welt'
        },
        {
          Time: '19:30',
          Name: 'OK KID',
          Genre: 'Rap',
          Day: '3',
          Description: 'Unverfangener Deutsch Rapp'
        },
        {
          Time: '20:30',
          Name: 'Rakede',
          Genre: 'Rap',
          Day: '3',
          Description: 'Reggae so wie man ihn kennt und liebt.'
        },
        {
          Time: '21:30',
          Name: 'Tristan Busch',
          Genre: 'Rap',
          Day: '3',
          Description: 'Der Text kommt mehrheitlich vom Julian. Bitte haben Sie Nachsicht.'
        },
        {
          Time: '22:30',
          Name: 'Kraftklub',
          Genre: 'Rap',
          Day: '3',
          Description: 'Rock kann auch anders. Das beweist Kraftklub sehr gut.'
        },
        {
          Time: '23:30',
          Name: 'Beginner',
          Genre: 'Rap',
          Day: '3',
          Description: 'Hiphop lebt. Das beweist Beginner bei jedem Auftrit neu.'
        },
        {
          Time: '00:30',
          Name: 'Mura Masa',
          Genre: 'Rap',
          Day: '3',
          Description: 'Ein Internationaler Superstar ist auch vertreten.'
        },
        {
          Time: '01:30',
          Name: 'Childish Cambino',
          Genre: 'Rap',
          Day: '3',
          Description: 'Der Abschluss ist ein unglaubliches Highlite und kommt mit Childish Cambino nicht zu kurz.'
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
  margin-bottom: 10px;
  font-weight: bold;
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

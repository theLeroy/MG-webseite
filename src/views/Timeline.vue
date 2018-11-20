<template>
  <div>
    <logo/>
    <div class="lC" v-for="act in Acts">
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
</template>

<script>

import Logo from '@/components/Logo.vue'

export default {
  name: 'Timeline',
  components: {
    Logo
  },
  data () {
    return {
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
          Day: '1',
          Description: 'Eine elegante Stimme revolutioniert den deutschen Pop'
        },
        {
          Time: '16:10',
          Name: 'Fatony',
          Genre: 'Rap',
          Day: '1',
          Description: 'Genialer Rapper mit stil'
        },
        {
          Time: '16:10',
          Name: 'AnnenMayKantereit',
          Genre: 'Indie Rock',
          Day: '1',
          Description: ''
        },
        {
          Time: '16:10',
          Name: 'Faber',
          Genre: 'Indie Rock',
          Day: '1',
          Description: ''
        },
        {
          Time: '16:10',
          Name: 'Odezenne',
          Genre: 'Techno, Rap',
          Day: '1',
          Description: ''
        },
        {
          Time: '16:10',
          Name: 'Jeans For Jesus',
          Genre: 'Indie Pop',
          Day: '1',
          Description: ''
        },
      ]
    }
  }
}

</script>

<style scoped lang="scss">
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

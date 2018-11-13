<template>
  <div class="Card">
    <h2>{{Month}}</h2>
    <h1>{{Day}}</h1>
    <h3>{{Acts}}</h3>
    <div class="l">
      <a :href="Link">And more</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    Day: String,
    Month: String,
    Acts: String,
    Link: String
  }
}
</script>

<style scoped lang="scss">
$cardwith: 240px;
.Card {
  background-color: #fff;
  width: $cardwith;
  height: $cardwith;
  display: inline-block;
  margin-left: calc(((100vw - (#{$cardwith}*3)) / 6) * 1);
  margin-top: 20%;
  border-radius: 5px;
  text-align: center;
  color: #FF9A56;
}
.Card:first-of-type {
  margin-left: calc(((100vw - (#{$cardwith}*3)) / 6) * 2);
}
h2 {
  font-size: 18px;
  padding-top: 22px;
  text-transform: uppercase;
}
h1 {
  margin-top: 10px;
  font-size: 90px;
  font-weight: 900;
}
h3 {
  margin-top: 15px;
  font-size: 16px;
  color: #000;
}
a {
  color: #FF9A56;
}
.l {
  margin-top: 30px;
}
@media only screen and (max-width: 770px) {
  $cardwith: 240px;
  .Card {
    width: $cardwith;
    height: $cardwith;
    display: block;
    margin-left: calc(50vw - (#{$cardwith} / 2));
  }
  .Card:first-of-type {
    margin-left: calc(50vw - (#{$cardwith} / 2));
  }
}
</style>

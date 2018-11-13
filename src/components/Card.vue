<template>
  <div class="Card">
    <h2>{{Month}}</h2>
    <h1>{{Day}}</h1>
    <h3>{{Acts}}</h3>
    <a :href="Link">And more</a>
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
  font-size: 20px;
}
h1 {
  font-size: 30px;
  font-weight: 900;
}
h3 {
  color: #000;
}
</style>

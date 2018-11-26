<template>
  <a id="TTT" href="/.">
    <span>Home</span>
    <img src="@/assets/Logo.svg" alt="indiekator Logo">
  </a>
</template>

<script>

export default {
  name: 'logo'
}

</script>

<style scoped lang="scss">
span {
  color: #fb9a57;
  font-size: 35px;
  font-weight: bold;
  text-decoration: none;
  position: absolute;
  padding: 70px;
  opacity: 0;
  transition: 0.4s;
  filter: blur(0.000001px);
  -webkit-filter: blur(0.000001px);
  -webkit-font-smoothing: antialiased;
  transform: translateZ(0);
  z-index: 100;
  text-shadow: 0px 2px 25px rgba(#fb9a57, 0.7);
}
a:hover {
  span {
    transition: 0.4s;
    opacity: 1;
  }
  img {
    transition: 0.4s;
    filter: blur(5px);
  }
}

img {
  transition: 0.4s;
  width: 12vw;
  height: auto;
  margin: 25px;
}
</style>

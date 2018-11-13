<template>
  <div>
    asd
    <div v-for="act in Acts">
      <div class="Time">
        {{act.Time}}
      </div>
      <div class="Name">
        {{act.Name}}
      </div>
      <div class="Description">
        {{act.Description}}
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Timeline',
  data () {
    return {
      Acts: [
        {
          Time: '16:10',
          Name: 'Bilderbuch',
          Description: 'aösdkasdökj asökdjasdlkjbsa'
        },
        {
          Time: '16:10',
          Name: 'Bilderbuch',
          Description: 'aösdkasdökj asökdjasdlkjbsa'
        }
      ]
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

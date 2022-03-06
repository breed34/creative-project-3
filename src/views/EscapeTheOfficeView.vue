<template>
<div class="escape-the-office-view">
  <div class="game-wrapper">
    <div class="title"><h1>Escape the Office</h1></div>
    <EscapeTheOfficeGame />
  </div>
</div>
</template>

<script>
import EscapeTheOfficeGame from "../components/EscapeTheOfficeGame.vue"
export default {
  name: 'EscapeTheOfficeView',
  components: {
    EscapeTheOfficeGame
  }
}
</script>

<style scoped>
.title {
  margin: auto;
  text-align: center;
  margin-bottom: 20px;
  font-size: 25px;
}
.escape-the-office-view {
  background-color: #5C7070;
}
.game-wrapper {
  margin: auto;
  width: 70%;
  padding-top: 40px;
  padding-bottom: 60px;
  background-color: white;
}


</style>

<template>
<div class="punch-time-view">
  <div class="game-wrapper">
    <div class="title"><h1>Punch Time</h1></div>
    <PunchTimeGame />
  </div>
</div>
</template>

<script>
import PunchTimeGame from "../components/PunchTimeGame.vue"
export default {
  name: 'PunchTimeView',
  components: {
    PunchTimeGame
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
.punch-time-view {
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

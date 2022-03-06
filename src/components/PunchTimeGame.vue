<template>
  <div class="game-container">
    <input id="scene" type="button" @click="startGame" v-on:keyup="setScene">
    <div id="time-and-score">
      <p>Time: <span id="time">{{ getTime }}</span></p>
      <p>Score: <span id="score">{{ getScore }}</span></p>
    </div>
    <div id="end-game" v-bind:style="this.$root.punchData.endGame ? 'display: block' : 'display: none' ">
      <p>You destroyed {{ getScore }} bags!</p>
      <button @click="newGame">Play Again</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PunchTimeGame',
  methods: {
    startGame() {
      if (this.$root.punchData.time != 60 || this.$root.punchData.currentScene != "new-game") {
        return;
      }
      this.$root.punchData.currentScene = "new-bag";
      let image = require('../assets/punch-time-images/new-bag.png');
      document.getElementById('scene').style.background="url(" + image + ") center no-repeat";
      document.getElementById('scene').style.backgroundSize="600px";
      this.timer();
    },
    newGame() {
      let image = require('../assets/punch-time-images/new-game.png');
      document.getElementById('scene').style.background="url(" + image + ") center no-repeat";
      document.getElementById('scene').style.backgroundSize="600px";
      this.$root.punchData.currentScene = "new-game";
      this.$root.punchData.time = 60;
      this.$root.punchData.score = 0;
      this.$root.punchData.currBagHealth = 20;
      this.$root.punchData.endGame = false;
    },
    timer: function() {
      let time = setInterval(() => {
        this.$root.punchData.time--;
        if (this.$root.punchData.time == 0) {
          this.$root.punchData.endGame = true;
          clearInterval(time);
        }
      }, 1000)
    },
    setScene: function(event) {
      if (this.$root.punchData.endGame) {
        return;
      }
      let scene = "none";
      console.log(this.$root.punchData.currentScene);
      if (event.keyCode == 37 && this.$root.punchData.currentScene != "bag-hit-left" && this.$root.punchData.currBagHealth > 0) {
        scene = "bag-hit-left";
      }
      else if (event.keyCode == 39 && this.$root.punchData.currentScene != "bag-hit-right" && this.$root.punchData.currBagHealth > 0) {
        scene = "bag-hit-right";
      }
      else if (event.keyCode == 32 && this.$root.punchData.currentScene == "dead-bag") {
        scene = "new-bag";
        this.$root.punchData.currBagHealth = 20;
      }
      else {
        return;
      }
      this.$root.punchData.currBagHealth--;
      let bagHealth = this.$root.punchData.currBagHealth;
      if (bagHealth == 0) {
        scene = "dead-bag";
        this.$root.punchData.score++;
      }
      console.log(bagHealth);
      for (let item of this.$root.punchData.scenes) {
        if (item.scene == scene) {
          this.$root.punchData.currentScene = item.scene;
          let image = require('../assets/punch-time-images/' + item.image);
          document.getElementById('scene').style.background="url(" + image + ") center no-repeat";
          document.getElementById('scene').style.backgroundSize="600px";
          return;
        }
      }
    }
  },
  computed: {
    getScore() {
      return this.$root.punchData.score;
    },
    getTime() {
      return this.$root.punchData.time;
    }
  }
}
</script>

<style scoped>
.game-container {
  text-align: center;
  position: relative;
}
#scene {
  border: none;
  outline: none;
  height: 550px;
  width: 600px;
  background: url(../assets/punch-time-images/new-game.png) center no-repeat;
  background-size: 600px;
}
#scene:foces {
  border: none;
  outline: none;
}
#time-and-score {
  position: absolute;
  top: 70px;
  left: 426px;
  transform: translate(-50%, -50%);
  font-size: 25px;
  background-color: rgba(71, 71, 71, 0.25);
  padding: 10px;
}
#end-game {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 35px;
  color: white;
  width: 457px;
  height: 340px;
  border: 5px solid black;
  padding: 80px;
  background-color: rgba(31, 31, 31, 0.75);
  line-height: 1.5;
}
#end-game button {
  font-size: 18px;
  padding: 5px 20px;
}
</style>

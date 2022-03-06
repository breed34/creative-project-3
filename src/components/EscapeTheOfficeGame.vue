<template>
  <div id="scene">
    <div class="drawer-boxes">
      <div id="file-cabinet-top-drawer"
        v-bind:style="$root.officeData.hasFileKey ? 'pointer-events: auto' : 'pointer-events: none'"
        @click="!$root.officeData.hasDoorKey ? setScene('file-cabinet-open-top') : setScene('file-cabinet-open-top-no-key')">
      </div>
      <div id="file-cabinet-middle-drawer" @click="setScene('file-cabinet-open-middle')"></div>
      <div id="file-cabinet-bottom-drawer" @click="setScene('file-cabinet-open-bottom')"></div>
      <div id="desk-top-drawer"
        @click="!$root.officeData.hasFileKey ? setScene('desk-open-top') : setScene('desk-open-top-no-key')"></div>
      <div id="desk-bottom-drawer" @click="setScene('desk-open-bottom')"></div>
      <div id="door" v-bind:style="$root.officeData.hasDoorKey ? 'pointer-events: auto' : 'pointer-events: none'" @click="setScene('door-open')"></div>
    </div>
    <div class="key-boxes">
      <div id="file-key"
        @click="hasKey('fileKey')"
        v-bind:style="$root.officeData.currentScene == 'desk-open-top' && !this.$root.officeData.hasFileKey ? 'display: block' : 'display: none'">
      </div>
      <div id="door-key"
        @click="hasKey('doorKey')"
        v-bind:style="$root.officeData.currentScene == 'file-cabinet-open-top' && !this.$root.officeData.hasDoorKey ? 'display: block' : 'display: none'">
      </div>
    </div>
    <div class="keys-inventory">
      <div id="file-key-inv"
        v-bind:style="this.$root.officeData.hasFileKey ? 'display: block' : 'display: none'">
        <img src="../assets/escape-the-office-images/key-inv-file-cabinet.png">
      </div>
      <div id="door-key-inv"
        v-bind:style="this.$root.officeData.hasDoorKey ? 'display: block' : 'display: none'">
        <img src="../assets/escape-the-office-images/key-inv-door.png">
      </div>
    </div>
    <div id="you-win" v-bind:style="$root.officeData.currentScene == 'door-open' ? 'display: block' : 'display: none'">
      <h2>You win!</h2>
      <button id="play-again" @click="reset()">Play Again</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EscapeTheOfficeGame',
  methods: {
    setScene(scene) {
      for (let item of this.$root.officeData.scenes) {
        if (item.scene == scene) {
          this.$root.officeData.currentScene = item.scene;
          let image = require('../assets/escape-the-office-images/' + item.image);
          console.log(image);
          document.getElementById('scene').style.background="url(" + image + ") center no-repeat";
          document.getElementById('scene').style.backgroundSize="600px";
          console.log(this.$root.officeData.currentScene);
          console.log(this.$root.officeData.hasFileKey);
          return;
        }
      }
      return scene;
    },
    hasKey(key) {
      if (key == "fileKey") {
        this.$root.officeData.hasFileKey = true;
        this.setScene('desk-open-top-no-key');
      }
      else {
        this.$root.officeData.hasDoorKey = true;
        this.setScene('file-cabinet-open-top-no-key');
      }
    },
    reset() {
      this.setScene('start');
      this.$root.officeData.hasFileKey = false;
      this.$root.officeData.hasDoorKey = false;
    }
  }
}
</script>

<style scoped>
  #scene {
    margin: auto;
    height: 550px;
    width: 600px;
    position: relative;
    background: url(../assets/escape-the-office-images/start.png) center no-repeat;
    background-size: 600px;
  }
  #scene div {
    position: absolute;
  }
  #file-cabinet-top-drawer {
    left: 58px;
    top: 89px;
    transform: translate(-50%, -50%);
    width: 90px;
    height: 65px;
  }
  #file-cabinet-middle-drawer {
    left: 58px;
    top: 157px;
    transform: translate(-50%, -50%);
    width: 90px;
    height: 65px;
  }
  #file-cabinet-bottom-drawer {
    left: 58px;
    top: 225px;
    transform: translate(-50%, -50%);
    width: 90px;
    height: 65px;
  }
  #desk-top-drawer {
    left: 202px;
    top: 362px;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 28px;
  }
  #desk-bottom-drawer {
    left: 202px;
    top: 402px;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 48px;
  }
  #door {
    left: 427px;
    top: 142px;
    transform: translate(-50%, -50%);
    width: 135px;
    height: 233px;
  }
  #file-key {
    left: 202px;
    top: 362px;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 28px;
  }
  #door-key {
    left: 58px;
    top: 89px;
    transform: translate(-50%, -50%);
    width: 90px;
    height: 65px;
  }
  #file-key-inv {
    left: 85px;
    top: 495px;
    transform: translate(-50%, -50%);
    width: 85px;
    height: 73px;
    text-align: center;
  }
  #file-key-inv img {
    width: 60%;
    margin: 10px;
  }
  #door-key-inv {
    left: 170px;
    top: 495px;
    transform: translate(-50%, -50%);
    width: 85px;
    height: 73px;
    text-align: center;
  }
  #door-key-inv img {
    width: 65%;
    margin: 10px;
  }
  #you-win {
    color: #E6E6E6;
    text-align: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 70px;
    background-color: rgba(59, 59, 59, 0.8);
    line-height: 2;
    border: 5px solid #232426;
    border-radius: 5px;
  }
  #you-win h2 {
    font-size: 34px;
  }
  #you-win button {
    font-size: 18px;
    padding: 5px 20px;
  }
</style>

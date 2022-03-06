<template>
  <div class="home-view">
    <div class="game-menu">
      <div class="menu-item">
        <a id="escape-the-office" href="/escape-the-office">
          <img src="../assets/escape-the-office-images/start.png">
          <h2>Escape the Office</h2>
        </a>
      </div>
      <div class="menu-item">
        <a id="punch-time" href="/punch-time">
          <img src="../assets/punch-time-images/new-bag.png">
          <h2>Punch Time</h2>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .home-view {
    background-color: #5C7070;
  }
  .game-menu {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: auto;
    background-color: white;
    width: 85%;
    padding: 100px 0;
  }
  .game-menu a {
    text-decoration: none;
    color: inherit;
  }
  .menu-item {
    margin: auto;
    text-align: center;
    width: 100%;
  }
  img {
    width: 60%;
    height: 450px;
    border: 2px solid gray;
    margin-bottom: 20px;
  }
</style>

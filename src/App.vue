<template>
  <div id="app">
    <div class="navbar">
      <div id="logo"><router-link to="/">FunGames</router-link></div>
      <div id="menu">
        <div class="home"><router-link to="/">Home</router-link></div>
        <div class="games">
          <router-link to="/escape-the-office">Escape the Office</router-link>
          <router-link to="/punch-time">Punch Time</router-link>
        </div>
      </div>
    </div>
    <router-view />
    <div class="footer">
      <p>Created 24 February 2022</p>
      <a href="https://github.com/breed34/creative-project-3" target="_blank">Git Repository</a>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: sans-serif;
  text-align: left;
  color: #2C3E50;
}
#logo {
  font-size: 50px;
  background-color: #6B9AC4;
  padding: 20px;
}
#menu a {
  font-weight: bold;
  text-decoration: none;
  color: #2E3838;
}
#menu a.router-link-exact-active {
  color: #5C7070;
}
#logo a {
  font-weight: bold;
  text-decoration: none;
  color: #090B0B;
}
#menu {
  background-color: #EFF2F1;
  display: flex;

}
.home {
  padding: 10px;
  padding-left: 40px;
}
.games {
  padding: 10px;
  text-align: right;
  margin-left: auto;
}
.games a {
  padding-right: 40px;
}
.footer {
  text-align: center;
  padding-top: 40px;
  padding-bottom: 80px;
  background-color: #EFF2F1;
  line-height: 1.5;
}
.footer a,
.footer a:hover,
.footer a:active,
.footer a:visited {
  text-decoration: none;
}
.footer a,
.footer a:visited {
  color: inherit;
}
.footer a:hover {
  color: #969696;
}
.footer a:active {
  color: #2B2B2B;
}

</style>

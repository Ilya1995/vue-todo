<template>
  <div id="app" class="container">
    <h1>Vue Todo application</h1>
    <hr />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  opacity: 0.9;
}
body {
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(https://i.picsum.photos/id/93/1300/800.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: top;
}
</style>

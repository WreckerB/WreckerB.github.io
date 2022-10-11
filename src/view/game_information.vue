<template>
  <div>
    <button>
      <router-link to="/">返回主页</router-link>
    </button><br><br>
    <a href="https://playrack.net/" target="_blank" class="playrack">
      <span style="color: rgb(18, 130, 227);">p</span><span>lay</span><span style="color: rgb(255, 108, 43);">r</span><span>ack</span>
    </a><br><br>
    <a href="https://ero.plumz.me/" target="_blank" class="erogamescape">
      <h1>ErogameScape -エロゲー批評空間-</h1>
    </a><br>
    <a href="https://vndb.org/" target="_blank" class="vndb">
      the visual novel database
    </a><br><br>
    <a href="http://www.getchu.com/pc/" target="_blank">
      <img alt="Getchu" src="/img/gif/getchu_logo.gif" width="247" height="60">
    </a><br><br>
    <a href="http://egono.com/" target="_blank">
      <img alt="Eroge RSS Checker" src="/img/gif/egono_logo.gif" width="294" height="40.5">
    </a><br><br>
    <a href="https://web.archive.org/" target="_blank">
      <img alt="logo: Internet Archive's Wayback Machine" src="/img/svg/WayBackMachine_logo.svg" width="183" height="65">
    </a>
  </div>
</template>

<script>
export default {
  name: "game_information"
}
</script>

<style scoped>
.playrack {
  text-decoration: none;
  color: #000;
  font-size: 2.5rem;
}
.erogamescape {
  text-decoration: none;
  color: #000;
  width: 280px;
  height: 100px;
}
.erogamescape h1 {
  font-size: 118%;
}
.vndb {
  text-decoration: none;
  font-family: "Futura", "Century New Gothic", "Arial", serif;
  font-size: 24px;
  font-style: italic;
  color: #135;
}
</style>
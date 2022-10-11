<template>
  <div>
    <button>
      <router-link to="/">返回主页</router-link>
    </button><br><br>
    <a href="https://brantacanadensis.site/" target="_blank" class="brantacanadensis">
      加拿大鹅抱枕研发中心
    </a><br><br>
    <a href="http://omiai-dakimakura.com/" target="_blank">
      <img alt="おみあい！ 抱き枕カバー" src="/img/png/omiai-dakimakura_logo.png" width="240" height="60">
    </a><br>
    <form>
      <input type="text" value="" id="getOmiaiInputText" placeholder="按名称搜索" autocomplete="off" required>
      <input type="submit" value="搜索" @click="omiai_search"/>
    </form><br><br>
    <a href="http://fosblog.blog94.fc2.com/" target="_blank">
      <div class="fosblog">×Phos/抱き枕×</div>
    </a>
  </div>
</template>

<script>
export default {
  name: "pillow_information",
  methods: {
    omiai_search() {
      const inputText = document.getElementById("getOmiaiInputText").value;
      const urlText = "http://omiai-dakimakura.com/?s=" + inputText;
      if (inputText.replace(/(^\s*)|(\s*$)/g, "") !== "") {
        window.open(urlText)
      }
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.brantacanadensis {
  font-size: 1.75em;
  font-weight: 600;
  letter-spacing: -.5px;
  line-height: 1.4285em;
  background: #454e5c;
  color: #fff;
}
.fosblog {
  font-family: "Arial Black", "Impact", "ＭＳ Ｐゴシック", "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "Osaka", serif;
  font-size: 30px;
  color: #3a3128;
}
</style>
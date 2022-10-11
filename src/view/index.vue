<template>
  <div>
    <a href="https://www.yahoo.co.jp" target="_blank">
      <img alt="Yahoo! JAPAN" src="/img/svg/yahoo.co.jp_logo.svg" width="213" height="54">
    </a><br>
    <form>
      <input type="text" value="" id="getInputText" placeholder="快捷搜索" autocomplete="off" required>
      <input type="submit" value="搜索" @click="search"/>
    </form><br><br>
    <a href="https://www.youtube.com/" target="_blank">
      <img alt="YouTube" src="/img/svg/YouTube_logo.svg" width="256" height="57">
    </a><br><br>
    <a href="https://twitter.com/" target="_blank">
      <img alt="Twitter" src="/img/svg/Twitter_logo.svg" width="64" height="52.625">
    </a><br><br>
    <a href="https://www.dlsite.com/maniax/" target="_blank">
      <img alt="DLsite R18" src="/img/png/dlsite-r18_logo.png" width="132" height="25">
    </a><br><br>
    <button>
      <router-link to="/game_shop_original">本体原站</router-link>
    </button>
    <button>
      <router-link to="/game_shop_tool">本体工具站</router-link>
    </button>
    <button>
      <router-link to="/game_information">本体工具站</router-link>
    </button>
    <button>
      <router-link to="/pillow_information">抱枕资料站</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "index",
  methods: {
    search() {
      const inputText = document.getElementById("getInputText").value;
      const urlText = "https://search.yahoo.co.jp/search?p=" + inputText;
      if (inputText.replace(/(^\s*)|(\s*$)/g, "") !== "") {
        window.open(urlText)
      }
    }
  }
}
</script>

<style scoped>

</style>
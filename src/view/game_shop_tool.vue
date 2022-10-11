<template>
  <div>
    <button>
      <router-link to="/">返回主页</router-link>
    </button><br><br>
    <a href="https://buyee.jp/" target="_blank">
      <img alt="Buyee" src="/img/png/buyee_logo.png" width="125" height="36">
    </a><br>
    <form>
      <input type="text" value="" id="getBuyeeInputText" placeholder="按名称搜索" autocomplete="off" required>
      <input type="submit" value="搜索" @click="buyee_search"/>
    </form><br><br>
    <a href="https://erocate.com" target="_blank">
      <img alt="erocate.com" src="/img/png/erocate_logo.png" width="176" height="21">
    </a><br><br>
    <div class="keepa">
      <a href="https://keepa.com/#!" target="_blank">
        <img alt="keepa" src="/img/svg/keepa_logo.svg" width="195" height="56">
      </a>
    </div>
    <form>
      <input type="text" value="" id="getKeepaInputText" placeholder="按ASIN搜索" autocomplete="off" required>
      <input type="submit" value="搜索" @click="keepa_search"/>
    </form>
  </div>
</template>

<script>
export default {
  name: "game_shop_tool",
  methods: {
    buyee_search() {
      const inputText = document.getElementById("getBuyeeInputText").value;
      const urlText = "https://buyee.jp/item/search/query/" + inputText + "/category/2084006448?lang=ja";
      if (inputText.replace(/(^\s*)|(\s*$)/g, "") !== "") {
        window.open(urlText)
      }
    },
    keepa_search() {
      const inputText = document.getElementById("getKeepaInputText").value;
      const urlText = "https://keepa.com/#!product/5-" + inputText;
      if (inputText.replace(/(^\s*)|(\s*$)/g, "") !== "") {
        window.open(urlText)
      }
    }
  }
}
</script>

<style scoped>
.keepa {
  width: 195px;
  background: #454545;
}
</style>
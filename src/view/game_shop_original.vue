<template>
  <div>
    <button>
      <router-link to="/">返回主页</router-link>
    </button><br><br>
    <a href="https://www.suruga-ya.jp/" target="_blank">
      <img alt="駿河屋" src="/img/svg/surugaya_logo.svg" width="170" height="52">
    </a><br>
    <form>
      <input type="text" value="" id="getSurugayaInputText" placeholder="按名称搜索" autocomplete="off" required>
      <input type="submit" value="搜索" @click="surugaya_search"/>
    </form><br><br>
    <a href="https://order.mandarake.co.jp/order/" target="_blank">
      <img alt="MANDARAKE" src="/img/png/mandarake.co.jp_logo.png" width="256" height="56">
    </a><br><br>
    <a href="https://shop.lashinbang.com/" target="_blank">
      <img alt="らしんばん" src="/img/png/lashinbang_logo.png" width="240" height="70">
    </a><br>
    <form>
      <input type="text" value="" id="getLashinbangInputText" placeholder="按名称搜索" autocomplete="off" required>
      <input type="submit" value="搜索" @click="lashinbang_search"/>
    </form><br><br>
    <a href="http://www.chuko-tsuhan.com/" target="_blank">
      <img alt="秋葉原トレーダー" src="/img/gif/chuko-tsuhan_logo.gif" width="232" height="62">
    </a><br><br>
    <a href="https://jp.mercari.com/" target="_blank">
      <img alt="Mercari" src="/img/svg/Mercari_logo.svg" width="208" height="56">
    </a><br><br>
    <a href="https://www.amazon.co.jp/" target="_blank">
      <img alt="Amazon.co.jp" src="/img/svg/Amazon.co.jp_logo.svg" width="240" height="56">
    </a><br>
    <form>
      <input type="text" value="" id="getAmazonInputText" placeholder="按名称搜索" autocomplete="off" required>
      <input type="submit" value="搜索" @click="amazon_search"/>
    </form><br><br>
    <a href="https://auctions.yahoo.co.jp/" target="_blank">
      <img alt="ヤフオク!" src="/img/png/auctions.yahoo.co.jp_logo.png" width="201" height="45">
    </a><br>
    <form>
      <input type="text" value="" id="getAuctionsInputText" placeholder="按名称搜索" autocomplete="off" required>
      <input type="submit" value="搜索" @click="auctions_search"/>
    </form><br><br>
    <a href="https://www.arzon.jp/" target="_blank">
      <img alt="アダルトは安心のアルゾン！" src="/img/gif/arzon_logo.gif" width="200" height="50">
    </a><br>
    <form>
      <input type="text" value="" id="getArzonInputText" placeholder="按名称搜索" autocomplete="off" required>
      <input type="submit" value="搜索" @click="arzon_search"/>
    </form>
  </div>
</template>

<script>
export default {
  name: "game_shop_original",
  methods: {
    surugaya_search() {
      const inputText = document.getElementById("getSurugayaInputText").value;
      const urlText = "https://www.suruga-ya.jp/search?category=65204&search_word=" + inputText + "&inStock=On";
      if (inputText.replace(/(^\s*)|(\s*$)/g, "") !== "") {
        window.open(urlText)
      }
    },
    lashinbang_search() {
      const inputText = document.getElementById("getLashinbangInputText").value;
      const urlText = "https://shop.lashinbang.com/products/list?cat=%E3%82%B2%E3%83%BC%E3%83%A0&keyword=" + inputText + "&subcat=PCゲーム&stock=2";
      if (inputText.replace(/(^\s*)|(\s*$)/g, "") !== "") {
        window.open(urlText)
      }
    },
    amazon_search() {
      const inputText = document.getElementById("getAmazonInputText").value;
      const urlText = "https://www.amazon.co.jp/s?k=" + inputText + "&i=software";
      if (inputText.replace(/(^\s*)|(\s*$)/g, "") !== "") {
        window.open(urlText)
      }
    },
    auctions_search() {
      const inputText = document.getElementById("getAuctionsInputText").value;
      const urlText = "https://auctions.yahoo.co.jp/search/search?&p=" + inputText;
      if (inputText.replace(/(^\s*)|(\s*$)/g, "") !== "") {
        window.open(urlText)
      }
    },
    arzon_search() {
      const inputText = document.getElementById("getArzonInputText").value;
      const urlText = "https://www.arzon.jp/animelist.html?q=" + inputText;
      if (inputText.replace(/(^\s*)|(\s*$)/g, "") !== "") {
        window.open(urlText)
      }
    }
  }
}
</script>

<style scoped>

</style>
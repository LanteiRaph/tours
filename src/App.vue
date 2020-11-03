<template >
<span>
  <div id="wrapper" v-if="mode === 'User'">
    <Header />
    <NavBar />
    <Article />
    <Footer />
  </div>
  <div class="wrapper" v-else>

  </div>
</span>
</template>

<script>
// Import all the componets to load the applcation.
import Footer from './components/TheFooter.vue'
import Header from './components/TheHeader.vue'
import NavBar from './components/TheNavBar.vue'
import Article from './components/TheArticle.vue'
export default {
  name: 'App',
  components: { Footer, Header, NavBar, Article },
  data () {
    return {
      mode: 'User'
    }
  }
}
</script>
<style>
html{
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
* {
  -moz-transition-property: background-color, border-color, box-shadow, color,
    opacity, text-shadow, -moz-transform;
  -o-transition-property: background-color, border-color, box-shadow, color,
    opacity, text-shadow, -o-transform;
  -webkit-transition-property: background-color, border-color, box-shadow, color,
    opacity, text-shadow, -webkit-transform;
  transition-property: background-color, border-color, box-shadow, color,
    opacity, text-shadow, transform;
  -moz-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -moz-transition-timing-function: linear;
  -o-transition-timing-function: linear;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
}
#wrapper {
  display: grid;
  grid-template-areas:
    "header header"
    "ads ads"
    "article article"
    "footer footer";
  grid-template-rows: 10% 15% 70% 5%;
  grid-column-gap: 5px;
  height: 100vh;
  margin: 0;
  background-color: #DADADA;
  font-family: 'Oswald', sans-serif;
}

#pageHeader {
  grid-area: header;
  background-color: white;
  z-index: 2;
}
#pageFooter {
  grid-area: footer;
  align-content: center;
}
#mainArticle {
  grid-area: article;
}
#siteAds {
  grid-area: ads;
  background-color: whitesmoke;
}
.menu {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.btn {
  background-color: white; /* Green */
  border: 1px solid #fff9a5;
  border-radius: 2px;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px auto;
  z-index: 1;
}
.link {
  margin: 10px auto;
}
.header {
  display: flex;
  justify-content: space-between;
  height: 100%;
  flex-flow: wrap;
  align-items: center;
}
.logo {
  font-family: "Pacifico", cursive;
  margin: 10px auto;
  font-size: 24px;
}
.logo:hover {
  cursor: pointer;
}

</style>

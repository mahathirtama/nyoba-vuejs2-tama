<template>
  <div id="app">
    <router-view/>
    <footer-vue />
  </div>
</template>

<script>
import FooterVue from "./components/Footer.vue"
export default {
  components: {
    FooterVue
  }
}
</script>


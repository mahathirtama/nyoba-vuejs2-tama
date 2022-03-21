<template>
  <div class="home">
    <navbar-vue />
    <div class="container">
      <hero-vue />
      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong>Anime</strong></h2>
        </div>
        <div class="col">
          <router-link to="/items" class="btn btn-success float-right"
            ><b-icon-eye></b-icon-eye> Lihat Semua</router-link>
        </div>
      </div>
      <!-- card -->
      <div class="row md-3">
        <div class="col-md-4 mt-4" v-for="anim in anime" :key="anim.id">
          <card-anime-vue :anim="anim" />
        </div>
      </div>
      <!-- end card -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarVue from "@/components/Navbar.vue";
import HeroVue from "@/components/Hero.vue";
import CardAnimeVue from "@/components/CardAnime.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    NavbarVue,
    HeroVue,
    CardAnimeVue,
  },
  data() {
    return {
      anime: [],
    };
  },
  methods: {
    setAnime(data) {
      this.anime = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-anime")
      .then((response) =>
        // handle success
        this.setAnime(response.data)
      )

      .catch((error) =>
        // handle error
        console.log("gagal" + error)
      );
  },
};
</script>

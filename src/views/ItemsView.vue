<template>
  <div>
    <navbar-vue />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h1><strong>Anime</strong> List</h1>
        </div>
      </div>
      <!-- search -->
      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
            v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari Anime"
              aria-label="Cari Anime"
              aria-describedby="basic-addon1"
              @keyup="searchAnime"
            />
            <span class="input-group-text" id="basic-addon1"><b-icon-search></b-icon-search></span>
          </div>
        </div>
      </div>
      <!-- end search -->
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
import NavbarVue from "@/components/Navbar.vue";
import CardAnimeVue from "@/components/CardAnime.vue";
import axios from "axios";
export default {
  name: "ItemsViewVue",
  components: {
    NavbarVue,
    CardAnimeVue,
  },
  data() {
    return {
      anime: [],
      search: ''
    };
  },
  methods: {
    setAnime(data) {
      this.anime = data;
    },
    searchAnime() {
        axios
      .get("http://localhost:3000/anime?q=" + this.search)
      .then((response) =>
        // handle success
        this.setAnime(response.data)
      )

      .catch((error) =>
        // handle error
        console.log("gagal" + error)
      );
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/anime")
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

<style>
</style>
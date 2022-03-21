<template>
  <div class="anime-detail">
    <navbar-vue />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link class="text-dark" to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link class="text-dark" to="/items">Items</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Anime Add
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- end breadcrumb -->
      <!-- form add cart -->
      <div class="row">
        <div class="col md-6">
          <img
            :src="'assets/image/' + anime.gambar"
            alt=""
            class="img-fluid shadow"
          />
        </div>
        <div class="col md-6">
          <h2>{{ anime.nama }}</h2>
          <hr />
          <h4>
            Harga : <strong>{{ anime.harga }}</strong>
          </h4>
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_order">Order</label>
              <input
                type="number"
                class="form-control"
                v-model="pesan.jumlah_order"
                required
              />
            </div>
            <div class="form-group">
              <label for="alamat">Alamat</label>
              <textarea
                name="alamat"
                v-model="pesan.alamat"
                class="form-control"
                cols="30"
                rows="5"
                placeholder="Alamat"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-success" @click="pemesanan">
              <b-icon-cart></b-icon-cart> Pesan
            </button>
          </form>
        </div>
      </div>
      <!-- end form add cart -->
    </div>
  </div>
</template>

<script>
import NavbarVue from "@/components/Navbar.vue";
import axios from "axios";
export default {
  name: "ItemDetailVue",
  components: {
    NavbarVue,
  },
  data() {
    return {
      anime: [],
      pesan: {},
    };
  },
  methods: {
    setAnime(data) {
      this.anime = data;
    },
    // add cart
    pemesanan() {
      this.pesan.anime = this.anime;
      if (this.pesan.jumlah_order) {
          axios
        .post("http://localhost:3000/keranjangs", this.pesan)
        .then(() => {
          this.$router.push({path: "/cart"})
          alert('Success Add Items')
        })
        .catch((err) => {
          console.log("gagal" + err);
        });
      } else {
          alert('Please Input Form')
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/anime/" + this.$route.params.id)
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
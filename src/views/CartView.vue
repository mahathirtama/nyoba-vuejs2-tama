<template>
  <div class="keranjang">
    <navbar-vue :updateCart="Jumlah_carts" />
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
              <li class="breadcrumb-item active" aria-current="page">Cart</li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- breadcrumb -->
      <!-- tabel cart -->
      <div class="row">
        <div class="col">
          <h2>My <strong>Cart</strong></h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Anime Image</th>
                  <th scope="col">Nama Anime</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Alamat</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(cart, index) in Jumlah_carts" :key="cart.id">
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="'assets/image/' + cart.anime.gambar"
                      alt=""
                      class="img-fluid shadow"
                      width="100"
                    />
                  </td>
                  <td>
                    <strong>{{ cart.anime.nama }}</strong>
                  </td>
                  <td>{{ cart.jumlah_order }}</td>
                  <td>Rp. {{ cart.anime.harga }}</td>
                  <td>
                    Rp.
                    <strong>{{ cart.anime.harga * cart.jumlah_order }}</strong>
                  </td>
                  <td>{{ cart.alamat }}</td>
                  <td>
                    <button class="btn btn-danger" @click="deleteCart(cart.id)">
                      <b-icon-trash></b-icon-trash>
                    </button>
                  </td>
                </tr>

                <tr>
                  <td align="right" colspan="6">
                    <strong>Total Harga</strong>
                  </td>
                  <td>
                    Rp. <strong>{{ totalHarga }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- end tabel cart -->
      <!-- form checkout -->
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="nama"><strong>Nama Panggilan</strong></label>
              <input
                type="text"
                class="form-control"
                required
                v-model="pesan.nama"
                autofocus
              />
            </div>
            <button
              type="submit"
              class="btn btn-success float-right"
              @click="checkout"
            >
              <b-icon-cart></b-icon-cart> Pesan
            </button>
          </form>
        </div>
      </div>
      <!-- end form checkout -->
    </div>
  </div>
</template>

<script>
import NavbarVue from "@/components/Navbar.vue";
import axios from "axios";
export default {
  name: "CartViewVue",
  components: {
    NavbarVue,
  },
  data() {
    return {
      Jumlah_carts: [],
      pesan: {},
    };
  },
  methods: {
    setCarts(data) {
      this.Jumlah_carts = data;
    },
    deleteCart(id) {
      axios
        .delete("http://localhost:3000/keranjangs/" + id)
        .then(() =>
          // handle success
          alert("Berhasil Di Hapus")
        )

        .catch((error) =>
          // handle error
          console.log("gagal" + error)
        );
      //   update data
      axios
        .get("http://localhost:3000/keranjangs")
        .then((response) =>
          // handle success
          this.setCarts(response.data)
        )

        .catch((error) =>
          // handle error
          console.log("gagal" + error)
        );
    },
    checkout() {
      if (this.pesan.nama) {
        this.pesan.Jumlah_carts = this.Jumlah_carts;
        axios
          .post("http://localhost:3000/pesanans", this.pesan)
          .then(() => {
            //   hapus semua cart
            this.Jumlah_carts.map(function (item) {
                return axios
                .delete("http://localhost:3000/keranjangs/" + item.id)
                .catch((error) =>
                  // handle error
                  console.log("gagal" + error)
                );
            });
            this.$router.push({ path: "/" });
            alert("Success Buy Item");
          })
          .catch((err) => {
            console.log("gagal" + err);
          });
      } else {
        alert("GAGAL");
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) =>
        // handle success
        this.setCarts(response.data)
      )

      .catch((error) =>
        // handle error
        console.log("gagal" + error)
      );
  },
  computed: {
    totalHarga() {
      return this.Jumlah_carts.reduce(function (items, data) {
        return items + data.anime.harga * data.jumlah_order;
      }, 0);
    },
  },
};
</script>

<style>
</style>
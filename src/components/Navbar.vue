<template>
<div>
  <b-navbar toggleable="lg" type="light">
    <div class="container">
      <b-navbar-brand href="#">Nyoba VueJs2</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <li class="nav-item">
          <router-link class="nav-link text-waring" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/items">Items</router-link>
        </li>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/cart">Cart <b-icon icon="bag-plus-fill"></b-icon>
          <span class="badge badge-success ml-2">{{ updateCart? updateCart.length : jumlah_cart.length }}</span>
          </router-link>
        </li>
      </b-navbar-nav>
    </b-collapse>
    </div>
    
  </b-navbar>
</div>
  <!-- <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
      <div class="container-fluid">
    <a class="navbar-brand" href="#">Nyoba VueJs2</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link text-waring" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/items">Items</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/cart">Cart <b-icon icon="bag-plus-fill"></b-icon>
          <span class="badge badge-success ml-2">{{ updateCart? updateCart.length : jumlah_cart.length }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  </div>
</nav> -->
</template>

<script>
import axios from 'axios'
export default {
    name: 'NavbarVue',
    data() {
      return {
        jumlah_cart: []
      }
    },
    props: ['updateCart'],
    methods: {
      setCart(data) {
        this.jumlah_cart = data
      }
    },
    mounted() {
      axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => 
        // handle success
        this.setCart(response.data))

      .catch((error) =>
        // handle error
        console.log("gagal" + error)
      );
    }
}
</script>

<style>

</style>
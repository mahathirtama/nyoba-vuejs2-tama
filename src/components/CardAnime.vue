<template>
  <div class="card shadow card-anime" style="width: 18rem;">
    <img :src="'assets/image/' + anim.gambar" class="card-img-top" alt="..." style="height: 200px;"/>
    <div class="card-body">
      <h5 class="card-title">{{ anim.nama }}</h5>
      <p class="card-text">
        {{anim.harga}}
      </p>
      <router-link :to="'/items/' + anim.id" class="btn btn-success"><b-icon-cart></b-icon-cart> Pilih</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardAnimeVue",
  props: ["anim"],
};
</script>

<style>
</style>
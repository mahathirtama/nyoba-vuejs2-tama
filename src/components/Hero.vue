<template>
  <div class="hero">
    <!-- dekstop -->
    <div class="d-sm-block d-none">
      <div class="row mt-3">
        <div class="col">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Items List</strong> <br />
                Anime Image
              </h2>
              <p>Pilih Image Favorit Anda</p>
              <router-link class="btn btn-lg btn-success" to="/items">
                <b-icon-arrow-right></b-icon-arrow-right> Pilih
              </router-link>
            </div>
          </div>
        </div>
        <div class="col">
          <img src="../assets/image/best-anime-4.jpg" alt="hero" width="100%" />
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div class="d-md-none d-sm-block">
      <div class="row mt-3">
        <div class="col-md-6 mb-3">
          <img src="../assets/image/best-anime-4.jpg" alt="hero" width="100%" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Items List</strong> <br />
                Anime Image
              </h2>
              <p>Pilih Image Favorit Anda</p>
              <button class="btn btn-lg btn-success">
                <b-icon-arrow-right></b-icon-arrow-right> Pilih
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroVue",
};
</script>

<style>
</style>
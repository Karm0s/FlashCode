<template>
  <div id="home-page">
    <Header/>

    <div class="flex flex-col items-start mx-10 mt-20">
      <h1 class="text-xl text-gray-900 title tracking-tight">Components:</h1>

      <div class="ml-10 mt-5">
          <router-link to="/dragndrop" class="text-lg hover:underline">Drag n Drop <span class="fas fa-arrow-right"></span></router-link>
      </div>
      <div class="ml-10 mt-5">
          <router-link to="/actionbutton" class="text-lg hover:underline">Floating Action Button <span class="fas fa-arrow-right"></span></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/layout/Header";

export default {
  name: 'HomePage',
  components: {
    Header
  }
}
</script>

<style scoped>
</style>
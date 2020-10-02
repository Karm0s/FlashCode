<template>
  <div id="home-page">
    <nav class="flex justify-center">
      <div>
        <h1 class="text-3xl text-gray-900 title tracking-tight">Flash <span class="fas fa-bolt"></span> Code</h1>
      </div>
    </nav>

    <div class="flex flex-col items-start mx-10 mt-20">
      <h1 class="text-xl text-gray-900 title tracking-tight">Components:</h1>

      <li class="ml-10 mt-5">
        <ul>
          <a href="/dragndrop" class="text-lg hover:underline">Drag n Drop <span class="fas fa-arrow-right"></span> </a>
        </ul>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.title{
  font-weight: 500;
}
</style>
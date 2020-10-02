<template>
  <nav class="flex justify-center">
    <div>
      <h1 class="text-3xl text-gray-900 title tracking-tight hover:underline">
        <a href="/">
          Flash <span class="fas fa-bolt"></span> Code
        </a>
      </h1>
      <h3 class="text-xl text-gray-900 title tracking-tight">
        <slot/>
      </h3>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style></style>

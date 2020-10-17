<template>
  <div class="flex flex-col h-screen">
    <Header class="flex-shrink">Floating Action Button</Header>
    <div class="flex flex-1 items-center justify-center">
      <FloatingActionButton/>
    </div>
  </div>
</template>

<script>
import Header from "../components/layout/Header";
import FloatingActionButton from "../components/FloatingActionButton";

export default {
  name: "FloatingActionButtonPage",
  components: {
    Header,
    FloatingActionButton,
  }
};
</script>

<style></style>

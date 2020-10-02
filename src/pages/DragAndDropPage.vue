<template>
  <div class="h-screen flex flex-col">
    <Header class="flex-shrink">Drag And Drop</Header>
    <div class="flex flex-1 items-center justify-center">
      <Dropzone/>
    </div>
  </div>
</template>

<script>
import Header from "../components/layout/Header";
import Dropzone from "../components/Dropzone";

export default {
  name: 'DragAndDropPage',
  components: {
    Header,
    Dropzone,
  }
}
</script>

<style scoped>

</style>
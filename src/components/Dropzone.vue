<template>
  <div
    class=" w-full bg-gray-200 rounded-lg border-2 border-dashed dropzone"
    :class="{
      'border-red-500': fileOverDropArea,
      'border-gray-500': !fileOverDropArea,
    }"
    @drop.prevent="dropFile"
    @dragover.prevent
    @dragenter.prevent="fileOverDropArea = true"
    @dragleave.prevent="fileOverDropArea = false"
  >
    <div
      class="dropzone-child-elements"
    >
      <div class="mt-10 text-gray-500">
        Drag & Drop your image here
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropzone",
  data(){
    return{
      fileOverDropArea: false,
    }
  },
  methods: {
    dropFile(e) {
      let droppedFiles = e.dataTransfer.files;
      if (!droppedFiles) return;
      this.file = droppedFiles[0];
      alert(`File Name: ${this.file.name}`);
      this.fileOverDropArea = false;
    },
  }
};
</script>

<style scoped>
.dropzone{
  width: 450px;
  height: 500px;
}
.dropzone-child-elements {
  pointer-events: none;
}
</style>

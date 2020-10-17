<template>
  <div class="">
    <div class="fab-menu flex flex-col items-end" :class="{'fab-menu-active' : fabOpen}">
      <a class="fab-action mb-1 hover:underline" href="#">
        NEW <i class="fas fa-pen fa-fw"></i>
      </a>
      <a class="fab-action mb-1  hover:underline" href="#">
        EDIT <i class="fas fa-edit fa-fw"></i>
      </a>
      <a class="fab-action mb-1  hover:underline" href="#">
        DELETE <i class="fas fa-trash fa-fw"></i>
      </a>
    </div>

    <button class="fab-container bg-gray-900 hover:bg-gray-800 text-white" @click.prevent="fabOpen = !fabOpen">
      <label for="fab-checkbox" class="fab">
        <span class="fa-stack">
          <i class="fas fa-plus text-xl fab-icon fa-stack-1x" :class="{'hide' : fabOpen}"></i>
          <i class="fas fa-times text-xl fab-icon fa-stack-1x" :class="{ 'hide' : !fabOpen}"></i>
        </span>
      </label>
    </button>
  </div>
</template>

<script>
export default {
  name: "FloatingActionButton",
  data() {
    return {
      fabOpen: false,
    }
  }
}
</script>

<style>
  .fab-container{
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }
  .fab-icon{
    opacity: 1;
    visibility: visible;
    transition: opacity .2s ease-in-out, transform 0.2s ease-in-out;
  }
  .hide{
    opacity: 0;
    visibility: hidden;
    transform: rotate(70deg);
  }
  .fab-menu{
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
    position: relative;
    right: 50px;
    opacity: 0;
    pointer-events: none;
  }
  .fab-menu-active{
    transform: translateX(50px);
    opacity: 1;
    pointer-events: all;
  }
</style>
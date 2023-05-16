<template>
  <div class="test container bg-sky-200 p-5 rounded-md shadow-sm flex flex-col">
    <the-logs></the-logs>
    <the-keyboard></the-keyboard>
  </div>
</template>

<script setup>
import TheLogs from "./TheLogs.vue";
import TheKeyboard from "./TheKeyboard.vue";
</script>

<style scoped>
.test {
  min-height: 30rem;
}
</style>

<template>
  <li>
    <span>{{ id }}</span>
    <p>
      {{ message }}
    </p>
  </li>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
  },
  message: {
    type: String,
  },
});

const { id, message } = props;
</script>

<style scoped></style>

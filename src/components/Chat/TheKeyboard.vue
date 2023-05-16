<template>
  <form class="mt-auto" @click.prevent="submitMessage">
    <input
      type="text"
      v-model="message"
      name="message"
      placeholder="Your message"
    />
    <button type="submit">Send</button>
  </form>
</template>

<script setup>
import { db } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref } from "vue";
const message = ref("");

const submitMessage = async () => {
  if (message.value.length < 5) return;
  await addDoc(collection(db, "chatlogs"), {
    message: message.value,
  });
  message.value = "";
};
</script>

<style scoped></style>

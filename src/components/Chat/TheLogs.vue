<template>
  <div class="max-h-58 overflow-y-scroll">
    <ul class="flex flex-col gap-y-4">
      <message v-for="m in msg" :id="m.id" :message="m.message"></message>
    </ul>
  </div>
</template>

<script setup>
import { db } from "../../firebase/firebase";
import { ref, onMounted } from "vue";
import { collection, getDocs } from "firebase/firestore";
import Message from "./Message.vue";
const msg = ref([]);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "chatlogs"));
  const messages = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    messages.push({
      id: doc.id,
      message: doc.data().message,
    });
  });

  msg.value = messages;
});
</script>

<style scoped></style>

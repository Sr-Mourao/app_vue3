<template>
  <v-container>
    <div>Esqueci senha</div>

    <v-text-field v-model="email"></v-text-field>
    <v-btn @click="SolitiToken">Solicitar Token</v-btn>
  </v-container>
</template>
<script setup>
import { ref } from "vue";
import { useAuth } from "@/store/auth";

const email = ref();
function SolitiToken() {
  const authStore = useAuth();
  authStore.forgotPassword(email.value);
}
</script>

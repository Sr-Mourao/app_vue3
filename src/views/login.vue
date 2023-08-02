<template>
  <v-container>
    <v-text-field v-model="email"></v-text-field>
    <v-text-field v-model="password"></v-text-field>
    <v-btn @click="login">Login</v-btn>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useAuth } from "@/store/auth";
import { useRouter } from "vue-router";

const authStore = useAuth();
const router = useRouter();

const email = ref("test@example.com");
const password = ref("password");

function login() {
  authStore.login(email.value, password.value).then(() => {
    router.push({ name: "dashboard" });
  });
}
</script>

<template>
  <v-container>
    <v-template v-if="state === 'forgotPassword'">
      <div>Esqueci senha</div>

      <v-text-field v-model="email"></v-text-field>
      <v-btn @click="forgotPassword">Solicitar Token</v-btn>
    </v-template>

    <v-template v-else-if="state === 'resetPassword'">
    <div>Resetar senha</div>

    <v-text-field v-model="token"></v-text-field>
    <v-text-field type="password" v-model="password"></v-text-field>
      <v-btn @click="resetPassword">Redefinir Senha</v-btn>
      <a href="" @click.stop.prevent="changeToForgotPassword">Voltar</a>
    </v-template>

  </v-container>
</template>
<script setup>
import { ref } from "vue";
import { useAuth } from "@/store/auth";

const email = ref();
const token = ref();
const password = ref();
const state = ref("forgotPassword");

function forgotPassword() {
  const authStore = useAuth();
  authStore.forgotPassword(email.value)
  .then(() => {
    changeToResetPassword()
  })
  ;
}

function resetPassword() {
  const authStore = useAuth();
  authStore.resetPassword(token.value, password.value)
  .then(() => {
    changeToResetPassword()
  })
  ;
}

function changeToResetPassword() {
  state.value = "resetPassword";
}

function changeToForgotPassword() {
  state.value = "forgotPassword";
}
</script>

<template>
  <v-container>
    <div v-if="isLoading">Verificando...</div>
    <div v-else-if="!isReady">Ops! Token inválido!</div>
    <div v-else>Email Verificado!<br>
    Obrigado, {{ state.data.first_name }} por verificar o email!
    </div>
  </v-container>
</template>
<script setup>
import { useAuth } from "@/store/auth";
import { useRoute } from "vue-router";
import { useAsyncState } from "@vueuse/core";

const authStore = useAuth();
const route = useRoute();

const { state, isReady, isLoading } = useAsyncState(
  authStore.verifyEmail(route.query.token).then((r) => r.data)
);
</script>

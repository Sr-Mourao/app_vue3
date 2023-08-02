<template>
  <v-container>
   dashboard
   <v-btn @click="logout">Sair</v-btn>
   <br>
   <pre>
    {{  meStore.user }}
   </pre>
  </v-container>
</template>

<script setup>
import {useRouter} from 'vue-router';
import {useAuth} from '@/store/auth';
import { useMe } from '@/store/me';

const meStore = useMe();
const router = useRouter();
const authStore = useAuth();

function logout(){
  authStore.logout().then(() => {
    router.push({ name: 'login'})
  })
}
</script>

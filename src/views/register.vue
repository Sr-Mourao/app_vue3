<template>
   <v-container>
    <v-text-field v-model="firstName"></v-text-field>
    <v-text-field v-model="lastName"></v-text-field>
    <v-text-field type="email" v-model="email"></v-text-field>
    <v-text-field type="password" v-model="password"></v-text-field>
    <v-btn @click="register">Cadastrar</v-btn>
   </v-container>
</template>
<script setup>
import { ref } from 'vue';
import { useAuth } from '@/store/auth';


const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');

function register(){
    const authStore = useAuth();
    authStore.register(firstName.value, lastName.value, email.value, password.value)
}

</script>
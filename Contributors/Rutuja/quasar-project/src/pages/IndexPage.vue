
<template>
  <q-page class="q-pa-md">

    <h3>{{ message }}</h3>

    <q-btn
      color="primary"
      label="Change Text"
      @click="changeMessage"
    />

  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello Quasar')

function changeMessage() {
  message.value = 'Welcome to Vue!'
}
</script>
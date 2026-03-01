<template>
  <div class="container">
    <h1>🐾 Animal Spirit Finder</h1>
    <p>Discover your personality animal</p>

    <!-- INPUT -->
    <div v-if="!result">
      <input v-model="username" placeholder="Enter your name" />

      <br /><br />

      <button @click="findAnimal">Your Animal Spirit →</button>
    </div>

    <!-- RESULT -->
    <div v-if="result" class="card">
      <h2>
        Hello <span class="name">{{ username }}</span>
      </h2>

      <h3>Your spirit animal is:</h3>
      <h1 class="animal">{{ result.name }}</h1>

      <p>{{ result.spirit }}</p>

      <button @click="reset">Try Again</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const result = ref(null)

const animals = [
  { name: 'Tiger', spirit: 'Bravery and independence.' },
  { name: 'Bear', spirit: 'Strength and protection.' },
  { name: 'Lion', spirit: 'Leadership and courage.' },
  { name: 'Elephant', spirit: 'Wisdom and loyalty.' },
  { name: 'Rabbit', spirit: 'Quick thinking and creativity.' },
  { name: 'Fox', spirit: 'Intelligence and adaptability.' },
  { name: 'Horse', spirit: 'Freedom and strength.' },
  { name: 'Zebra', spirit: 'Individuality and balance.' },
  { name: 'Antelope', spirit: 'Agility and intuition.' },
]

const findAnimal = () => {
  if (!username.value) {
    alert('Please enter your name')
    return
  }

  const index = username.value.length % animals.length
  result.value = animals[index]
}

const reset = () => {
  result.value = null
  username.value = ''
}
</script>

<style>
.container {
  text-align: center;
  margin-top: 60px;
  font-family: Arial;
}

input {
  padding: 10px;
  width: 240px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  background: orange;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.card {
  margin-top: 30px;
  background: #f4e6cc;
  padding: 25px;
  border-radius: 10px;
  width: 320px;
  margin-left: auto;
  margin-right: auto;
}

.name {
  color: tomato;
}

.animal {
  color: orange;
  margin: 10px 0;
}
</style>

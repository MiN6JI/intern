<template>
  <div class="container">
    <h2>Animals Page</h2>

    <div 
      v-for="animal in animals" 
      :key="animal.id"
      class="card"
    >
      <h3>{{ animal.name }}</h3>
      <p>{{ animal.spirit }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animals: [
        { id: 1, name: "Tiger", spirit: "Represents bravery and strength." },
        { id: 2, name: "Lion", spirit: "Symbolizes courage and leadership." },
        { id: 3, name: "Elephant", spirit: "Shows wisdom and loyalty." }
      ]
    }
  }
}
</script>

<style>
.container {
  width: 60%;
  margin: auto;
  padding: 20px;
}
}

h2 {
  margin-bottom: 20px;
  color: darkgreen;
}

.card {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 10px;
  background-color: #f2f2f2;
  transition: 0.3s;
}

.card:hover {
  transform: scale(1.05);
  background-color: #e0ffe0;
}
</style>
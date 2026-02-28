<template>
  <div class="result">
    <h2>Name: {{ username }}</h2>

    <div class="card">
      <img :src="animal.image" width="200" />
      <div>
        <h3>{{ animal.name }}</h3>
        <p>{{ animal.description }}</p>
      </div>
    </div>

    <button @click="goBack">Go Back</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animals: [
        {
          name: "Alpaca",
          description: "You are kind and creative.",
          image: "https://i.imgur.com/4AiXzf8.jpeg"
        },
        {
          name: "Lion",
          description: "You are brave and confident.",
          image: "https://i.imgur.com/6o5VfZp.jpeg"
        },
        {
          name: "Elephant",
          description: "You are wise and loyal.",
          image: "https://i.imgur.com/fHyEMsl.jpeg"
        }
      ]
    }
  },
  computed: {
    username() {
      return this.$route.params.username
    },
    animal() {
      let index = this.username.length % this.animals.length
      return this.animals[index]
    }
  },
  methods: {
    goBack() {
      this.$router.push("/")
    }
  }
}
</script>

<style>
.result {
  text-align: center;
  padding: 50px;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: #f4f0dc;
  padding: 30px;
  margin: 30px auto;
  width: 60%;
  border-radius: 10px;
}

button {
  padding: 10px 20px;
  background-color: orange;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
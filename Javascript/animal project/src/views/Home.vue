<template>
  <div class="home">
    <h1>Let’s get this party started!</h1>
    <p>Find which animal matches your personality.</p>

    <div class="box">
      <input 
        type="text" 
        v-model="name" 
        placeholder="Enter your name"
      />
      <button @click="goToResult">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    }
  },
  methods: {
    goToResult() {
      if(this.name.trim() !== "") {
        this.$router.push({ 
          name: "result", 
          params: { username: this.name } 
        })
      }
    }
  }
}
</script>

<style>
.home {
  text-align: center;
  padding: 50px;
}

.box {
  margin-top: 30px;
}

input {
  padding: 10px;
  width: 250px;
  margin-right: 10px;
}

button {
  padding: 10px 20px;
  background-color: orange;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
<template>
  <div class="container">
    <h1>Counter: {{ count }}</h1>

    <button @click="increment" :disabled="count >= 10">
      Increment
    </button>

    <button @click="decrement" :disabled="count <= 0">
      Decrement
    </button>

    
  </div>
</template>

<script>
export default {
  name: "CounterApp",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      if (this.count < 10) {
        this.count++;
      }
    },
    decrement() {
      if (this.count > 0) {
        this.count--;
      }
    },
   
    }
  
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 20px;
  font-family: Arial;
}

button {
  margin: 5px;
  padding: 20px 15px;
  font-size: 17px;
}
</style>

    
     
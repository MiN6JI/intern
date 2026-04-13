<template>
  <div class="calculator">
    <div class="display">{{ display || '0' }}</div>

    <div class="buttons">
      <button @click="clear">AC</button>
      <button @click="deleteLast">←</button>
      <button @click="toggleSign">+/-</button>
      <button @click="append('/')">/</button>

      <button @click="append('7')">7</button>
      <button @click="append('8')">8</button>
      <button @click="append('9')">9</button>
      <button @click="append('*')">*</button>

      <button @click="append('4')">4</button>
      <button @click="append('5')">5</button>
      <button @click="append('6')">6</button>
      <button @click="append('-')">-</button>

      <button @click="append('1')">1</button>
      <button @click="append('2')">2</button>
      <button @click="append('3')">3</button>
      <button @click="append('+')">+</button>

      <button @click="percent">%</button>
      <button @click="append('0')">0</button>
      <button @click="append('.')">.</button>
      <button @click="calculate">=</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: ""
    };
  },
  methods: {
    append(value) {
      this.display += value;
    },
    clear() {
      this.display = "";
    },
    deleteLast() {
      this.display = this.display.slice(0, -1);
    },
    toggleSign() {
      if (this.display) {
        this.display = String(-Number(this.display));
      }
    },
    percent() {
      if (this.display) {
        this.display = String(Number(this.display) / 100);
      }
    },
    calculate() {
      try {
        this.display = eval(this.display);
      } catch {
        this.display = "Error";
      }
    }
  }
};
</script>

<style scoped>
.calculator {
  width: 300px;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.display {
  height: 60px;
  background:white;
  color: Black;
  font-size: 24px;
  text-align: right;
  padding: 15px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

button {
  padding: 15px;
  font-size: 18px;
}
</style>
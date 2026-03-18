<template>
  <div>
    <h1>Get checkbox and radio button value</h1>

    <!-- Checkbox inputs -->
    <label for="java">Java</label><br>
    <input type="checkbox" value="Java" v-model="technology" id="java"><br><br>

    <label for="php">PHP</label><br>
    <input type="checkbox" value="PHP" v-model="technology" id="php"><br><br>

    <label for="node">Node</label><br>
    <input type="checkbox" value="Node" v-model="technology" id="node"><br><br>

    <br><br>

    <h2>Who I am</h2>

    <label for="student">Student</label>
    <input type="radio" value="student" v-model="who" name="who" id="student">

    <label for="developer">Developer</label>
    <input type="radio" value="developer" v-model="who" name="who" id="developer">

    <br><br>

    <!-- Display selected values -->
    <h4>Selected technology: {{ technology }}</h4>
    <h4>I am: {{ who }}</h4>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      technology: [],
      who: null
    }
  }
}
</script>

<style scoped>
h1 {
  color: orange;
}
</style>
<template>
  <div id="app">
    <RegisterForm />
    <!-- <CounterApp /> -->
    <!-- <HomePage /> -->
    <!-- <Login /> -->
  </div>
</template>

<script>
import RegisterForm from "./components/RegisterForm.vue";
// import CounterApp from "./components/CounterApp.vue";

export default {
  name: "App",
  components: {
    RegisterForm,
    // CounterApp
  }
};
</script>


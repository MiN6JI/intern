<template>
  <h2>{{ name }}</h2>
  <h2>{{ user.name }}</h2>
  <button @click="getData">Call function</button>
</template>

<script>
export default {
  name: 'ChildData',
  props: {
    name: String,
    user: Object,
    getData: Function
  }
}
</script>
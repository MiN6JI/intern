<template>
  <div class="app">
    <h2>Todo App</h2>
    <input v-model="newTask" placeholder="Enter Task" />
    <button @click="addTask">Add</button>

    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <span :class="{ done: task.done }" @click="toggleTask(index)">
          {{ task.text }}
        </span>
        <button @click="deleteTask(index)">Wrong</button>
      </li>
    </ul>

    <p>Remaining: {{ remaining }}</p>
    <button @click="clearAll">Clear All</button>
  </div>
</template>

<script>
export default {
  name: "ToDo",
  data() {
    return {
      newTask: "",
      tasks: []
    };
  },
  computed: {
    remaining() {
      return this.tasks.filter(task => !task.done).length;
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        this.tasks.push({
          text: this.newTask,
          done: false
        });
        this.newTask = "";
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleTask(index) {
      this.tasks[index].done = !this.tasks[index].done;
    },
    clearAll() {
      this.tasks = [];
    }
  }
};
</script>

<style>
.app {
  width: 350px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  background: #f9f9f9;
  text-align: center;
}
input {
  padding: 8px;
  width: 65%;
}
button {
  padding: 8px;
  margin-left: 5px;
  cursor: pointer;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.done {
  text-decoration: line-through;
  color: grey;
}
</style>
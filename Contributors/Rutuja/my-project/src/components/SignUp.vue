<template>
  <div>
    <img class="logo" src="@/assets/food.jpg" />
    <h1>Sign Up</h1>

    <div class="register">
      <input type="text" placeholder="Enter Name" />
      <input type="text" placeholder="Enter Email" />
      <input type="password" placeholder="Enter Password" />
      <button>Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp'
}
</script>

<style>
.logo {
  width:100px;
  display:block;
  margin:20px auto;
  
}
h1{
    text-align:center;

}
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin: 10px auto;
  border: 1px solid skyblue;
}

.register button {
  width: 320px;
  height: 40px;
  color: white;
  background-color: skyblue;
  cursor: pointer;
  display: block;
  margin: 10px auto;
  border: none;
}
</style>
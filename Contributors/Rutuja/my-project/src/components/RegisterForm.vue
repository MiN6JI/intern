<template>
<div class="registration-container">
<h1>Registration Form</h1>


 <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" />
      </div>

      <div class="form-group">
      <label for="phone">Phone:</label>
      <input type="text" id="phone" v-model="form.phone" >
      </div>

      <div class="form-group">
      <label for="password">password:</label>
      <input type="text" id="password" v-model="form.password">
      </div>

      <div class="form-group">
      <label for="confirmpassword">ConfirmPassword</label>
      <input type="text" id="confirmpassword" v-model="form.confirmpassword">
      </div>

      <button type="submit">Submit</button>
       </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";


const form = reactive({
  name: "",
  phone: "",
  password: "",
  confirmpassword: ""
});


const submitForm = () => {
  console.log("Form Data:", form);
  alert(`Form submitted!\nName: ${form.name}\nPhone: ${form.phone}\npassword: ${form.password}\nconfirmpassword: ${form.confirmpassword}`);
};
</script>

<style scoped>
.register-container { max-width: 400px; 
margin: 50px auto; 
font-family: Arial, sans-serif;
 text-align:center;
  }

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 40%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 10px;
}
</style>

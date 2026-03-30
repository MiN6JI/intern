<template>
<div>
<input type="text" v-model="loginForm.username" name="username" placeholder="enter username"><br><br>
<input type="password" v-model="loginForm.password" name="password" placeholder="enter password"><br><br>
<button v-on:click="loginData">login</button>
</div>


</template>
<script>
export default
{
    name:'login',
    methods:loginData{
        //console.log("loginData",this.loginForm.username,this.loginForm.password)
    },
    return {loginForm{
    username:NULL,
    password:NULL,

    }
}
}
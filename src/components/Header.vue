<template>
<div>

<h1>Tourist Web</h1>
<ul>
    <router-link class="link" to="/"><li>Home</li></router-link>
    <router-link class="link" to="/places"><li>places</li></router-link>
    <router-link class="link" to="/todo"> <li>To-Do</li></router-link>
    <router-link  class="link" to="/aboutus"><li>About Us</li></router-link>
    <router-link class="link" to="/contactus"><li>Contact Us</li></router-link>
</ul>
</div>
</template>

<script>
export default {
name:'Header'
}
</script>

<style scoped>
div{
    display:flex;
    justify-content: space-between;
    background-color: black;
    height: 70px;
    align-items: center;
}
h1{
    color: white;
    padding:10px 20px ;
    flex: 1;
}
ul{
    margin:0;
    padding:0;
    background-color: black;
    color: white;
    list-style:none;
    display: flex;
    align-items: center;
    flex: 2;
    justify-content: space-around;
  

}
li{
    margin:4px 6px 4px 6px;
    padding:10px 20px;
    font-size: 20px;

    color: white;
    transition: background-color 0.5s;
}
li:hover{
    background-color: rgb(16, 117, 248);

}

</style>
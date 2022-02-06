<template>
  <div class="container">
      <p>{{ tasknew.value}}</p>
<div class="button">
    <button>D</button>
    <button @click="$emit('complete',tasknew)">C</button>
</div>
  </div>

</template>

<script>
export default {
name:'Task',
props:{tasknew:Object}
}
</script>

<style scoped>
.container{
    width:100%;
    height:50px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin:10px 3px;
    background-color: rgb(153, 221, 238);
 
}
p{
    flex:4;
    height:100%;
    display:flex;
    align-items:center;
    justify-content: flex-start;
    padding: 0px 10px;
}
.button{
flex:1;
height:100%;
}
button{
    width:50px;
    height:50px;
    background-color: rgb(60, 23, 223);
 cursor: pointer;
 border:none;
}
</style>
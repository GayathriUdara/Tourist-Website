<template>
  
 
<div class="maincontainer">
 
      <h1 > Todo List</h1>
    <div class="addTask">
        <input type="text" placeholder="Enter Task" v-model="inputValue">
         <button  @click="addtask">ADD</button>
    </div>
    <div class="newcontainer">
      <div class="notcompleted"> <h3 style="color:green; font-size:30px">Not Completed</h3>
      <div v-for="task in tasks" :key="task">
      <Task @complete="completed" :tasknew = "task"/></div>
      </div>
     
     <div class="completed"><h3 style="color:red; font-weight:bold; font-size:30px;">Completed</h3>
     <div v-for="task in completetask" :key="task">
      <Task @complete="completed" :tasknew = "task"/></div>
     </div>  
</div>
</div>

</template>
<script>
import Task from '../components/Task.vue'
export default {
name:'Todo',
data(){
return{
  inputValue:'', 
  tasks:[],
  completetask:[]
  

}
},
components:{Task
},
methods:{
addtask(){
 const taskitem={
   id:this.tasks.length+1,
   value:this.inputValue
 }

  this.tasks.push(taskitem)
  this.inputValue=''
   console.log(this.tasks)
},
completed(task){
 
this.completetask.push(task)
this.tasks = this.tasks.filter((item,index)=>{
  return item.id !== task.id
})
}

}}
</script>


<style scoped>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
 
}
h1{
  color:rgb(9, 9, 182);
  font-family:Arial, Helvetica, sans-serif;
  font-weight: bold;
}
.maincontainer{
  position: relative;
width: 100%;
height:100vh;
  padding:10px;
  text-align:center;
    background-image:url("https://lp-cms-production.imgix.net/2021-12/GettyImages-1311033137.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850");
    background-repeat: no-repeat; 
    background-size: cover;

}
.addTask{
  width: 100%;
  display: flex;
  padding:10px 0;
  height:90px;

}
.addTask > input[type="text"]{
  width:90%;
  color:rgb(29, 17, 17);
  border: rgb(241, 227, 227);
border-bottom:2px solid #666;
background:none;
padding:10px;
font-size: 22px;
outline: none;

}
.addTask button{
  margin: 0 10px;
  background:#222;
  color:white;
  font-size: 18px;
  text-transform: uppercase;
  padding:10px;
  border:none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
}
.newcontainer{
width:100%;
display:flex;
margin:30px 20px;
justify-content: space-between;

}
.notcompleted,.completed{
flex-basis: 50%;
margin:0px 8px;


}
.notcompleted{
  background-color:rgb(238, 161, 253);
}
.completed{
  background-color: rgb(213, 224, 109);
}


</style>
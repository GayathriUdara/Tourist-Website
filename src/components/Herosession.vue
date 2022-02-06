<template>
 


  <div class="container">
      <div class="inner_container">
        <div class="mini l">
            
            <div class="left_inner">
                <h2>Discover The Best Places <br> With Us<br > <i id="brn">Sri Lanka </i></h2>
                <div class="image">
                    <img src='../assets/new2.png' alt=''>
                </div>
            <p>A corner destination in the ancient Spice Trail, <mark>Sri Lanka is</mark> bursting with wonder. This tropical islet is notorious for its different
             geography from the blue littoral belt to green mountains within just hours of each other, 
                and the islet's lush verdure ranging from coconut win groves to paddy fields and tea colonies, stretched by over 200 natural falls. 
 This redounded in the islet being called the<mark>"Pearl of the Indian Ocean".</mark></p>
            </div>
        </div>
        <div class="mini r">
            <div class="right_inner">
                <div class="right_image">
                 
                </div>
                <div class="btn">
                    <button> Places</button> 
                    <button>About Us</button> 
                </div>
            </div>
        </div>
  </div>
 </div>
 
    
</template>

<script>
export default {
name:'Herosession'
}
</script>

<style scoped>
p{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
color: white;
    text-align: justify;
    text-decoration-style: solid;
    font-weight: bold;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container{
    width: 100%;
    height: 100vh;
    display: flex;
   background-color: rgb(10, 10, 10);
    justify-content: center;
    align-items: center;

}
.inner_container{
   width: 90%;
   height: 90%;
  
   display: flex;
}
.l{
    flex-basis: 60%;
 
overflow: hidden;
}

.left_inner{
    width: 90%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    opacity: 0;
transform: translateX(-10%);
animation: anim 1s forwards;


}

.image{
    width: 100%;
    height: 250px;
    
    
    margin-top: 30px;
    filter: blur(3px);
animation: anim2 0.5s forwards;
animation-delay: 2s;
}
.image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
h2{
    font-size: 50px;
    color: white;

}
.r{
    flex-basis: 40%;

}
.right_inner{
    width: 90%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
   
}
.right_image{
   
   width: 100%;
   height: 60%;
   background-image: url('../assets/new23.png');
   background-size: cover;
  

}

 .mini{
     height: 100%;

 }
 .btn{
     width: 100%;
     display: flex;
     justify-content: space-between;
     align-items: center;
 }
 button{
     padding:10px 20px;
     border: none;
     width: 170px;
     background-color: rgb(51, 51, 240);
     cursor: pointer;
     color: white;
     font-size: large;
     font-weight: bold;
     transition: all 0.5s ease-in;
     

 }
 #brn{
     font-family: inherit;
     font-size: 35px;
     
 }
 button:hover{
background-color: white;
color: black;
 }
 @keyframes anim{
     0%{
         transform: translateX(-20%);
         opacity: 0;
     }
     100%{
         transform: translateX(0%);
         opacity: 1;
     }
 }
  @keyframes anim2{
     0%{
         filter: blur(3px);
     }
     100%{
        filter: blur(0px);
     }
 }
</style>
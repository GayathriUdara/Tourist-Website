<template>
  <div class="container">
      <h2>Best Tourist Places </h2>

      <div class="newcontainer">
          <div class="place">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvDA1SUrebh7TAL7bVJr-pp14zIGWfOiKviA&usqp=CAU">
              <h3 style="font-size:30px"><b>Temple Of The Tooth</b></h3>
              <p style="font-size:20px; color:black">The Temple of the Sacred Tooth Relic is a world-famed place of deification, where the left Doggy tooth of Gautama
    Buddha is elevated. The tabernacle which is reverenced by thousands of original & foreign addicts and excursionists
    daily was named as a world heritage by UNESCO in 1988.<br>Location:Sri dalada veediya,Kandy 20000.</p>
          </div>
      </div>
  </div>
</template>

<script>
import container from '../newplaces/turism.js'
export default {
name:'Places'
}

</script>

<style scoped>
*{
    margin:0;
    padding:0;
background-color:rgb(214, 166, 241);
}
h2{
    text-align: center;
    font-size: 40px;
    color:rgb(26, 19, 26);
    font-family:Georgia, 'Times New Roman', Times, serif;

}
img{
    width:100%;
    height:100%;
    display:flex;
}
h3{
    font-size: 20%;
    font-family:Arial, Helvetica, sans-serif;
    font-weight:bold;
    color:rgb(25, 9, 245);
}

</style>
<template>
  <section class="contact">
          <div class="content">
              <h2 style="font-weight:bold;">Contact Us</h2>  
              </div>
<div class="container">
      <div class="contactInfo">
          <div class="box">
              <div class="icon"><i class="fab fa-facebook-square" ></i></div>
                  <div class="text">
                      <h3>Address</h3>
                      <p>No:12/3<br>Colombo,<br>Malabe</p>
                  </div>

              </div>
              <div class="box">
              <div class="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i>
</div>
                  <div class="text">
                      <h3>Email</h3>
                      <p>shyama@gmail.com</p>
                  </div>

              </div>
              <div class="box">
              <div class="icon"><i class="fa fa-whatsapp" aria-hidden="true"></i></div>
                  <div class="text">
                      <h3>WhatsApp</h3>
                  </div>

              </div>
          </div>
          <div class="contactForm">
              <form>
                  <h2>Send Message.....</h2>
                  <div class="inputBox">
                      <input type="text" required="required">
                      <span>Full Name</span>
                  </div>
                  <div class="inputBox">
                      <input type="text" required="required">
                      <span>Email Address</span>
                  </div>
                  <div class="inputBox">
                      <textarea name="" id=""  required="required"></textarea>
                      <span>Enter Your message.....</span>
                  </div>
                  <div class="inputBox">
                      <input type="submit" value="Send">
                  </div>
              </form>
          </div>

          </div>       
</section>
</template>

<script>
export default {
name:'Contact'
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Lexend+Peta:wght@100&display=swap'); */
*{
   padding:0;
   margin:0;
   font-family: 'Lexend Peta', sans-serif;
box-sizing: border-box;
}
.contact{
    position:relative;
    min-height:100vh;
    padding:50px 100px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-size:cover;
    background-color: rgb(234, 220, 236);
    background-image:url("https://thumbs.dreamstime.com/b/contact-us-icon-wood-cube-wood-cube-phone-email-post-icons-white-table-over-blur-bokeh-light-background-copy-space-186905072.jpg");
     background-repeat: no-repeat; 
    background-size: cover;
}
.contact .content{
    max-width:800px;
    text-align:center;
    }
.contact .content h2{
font-size: 36px;
font-weight:500;
color:rgb(20, 19, 19);
margin-bottom:20px;

}
.contact .content p{
    font-weight:300;
    color:pink;
}
.container{
width:100%;
display:flex;
justify-content:center;
margin-top:30px;
}
 .container .contactInfo  {
     width:50%;
     display:flex;
     flex-direction:column;

 } 
 .container .contactInfo .box{
     position:relative;
     padding:20px 0;
     display:flex;

 }
 .container .contactInfo .box .icon{
     min-width:60px;
     height:60px;
     /* background:cyan; */
     justify-content:center;
     align-items: center;
     border-radius:50%;
     font-size:22px;
 }
  .container .contactInfo .box .text h3{
      display:flex;
      font-size:16px;
      margin-left:20px;
      color:rgb(236, 26, 11);
      /* flex-direction:column; */
font-weight:500;

  }
  .container .contactInfo .box .text p{
      display:flex;
      font-size:16px;
      margin-left:20px;
      color:rgb(55, 20, 209);
      /* flex-direction:column; */
font-weight:300;
  }
  .contactForm{
width:40%;
padding:40px;
background-color: rgb(218, 177, 236);

  }

.contactForm h2{
    font-size: 30px;
    color:black;
    font-weight:500;

}
.contactForm .inputBox{
    position:relative;
    width:100%;
    margin-top:10px;

}
.contactForm .inputBox input,
.contactForm .inputBox textarea
{
    width:100%;
    padding:5px 0;
    font-size:16px;
    margin:10px 0;
    border:none;
    border-bottom: 2px solid #333;
    outline:none;
    resize:none;
}
.contactForm .inputBox span{
    position:absolute;
    left:0;
     padding:5px 0;
    font-size:16px;
    margin:10px 0;
    pointer-events:none;
    transition:0.5s;
    color:darkcyan
}
.contactForm .inputBox input:focus ~ span,
.contactForm .inputBox input:valid ~ span,
.contactForm .inputBox textarea:focus ~ span,
.contactForm .inputBox textarea:valid ~ span
{
    color:red;
    font-size:12px;
    transform:translateY(-20px);

}
.contactForm .inputBox input[type="submit"]{
    width:100px;
    background-color:rgb(4, 111, 182);
    color:#fff;
    border:none;
    cursor:pointer;
    padding:10px;
    font-size:18px;
}




</style>
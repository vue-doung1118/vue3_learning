// console.log('hello ,vue,thank')


const app =Vue.createApp({

  //Vue is Capitalize （ Vue )

  //data and functions 
  // {template:'<h2>this is mount to the #app with id="app" </h2> '}

data() {
return { 
title:" teat" ,
author:"people",
age:"35", 
}} ,  

methods : {
  changeTitle(){
   this.title = "Barry of world "
  }
}

  })




app.mount('#app') 

//app透過mount傳送器() , index.html 內的 div id = "app "  和 ＃app match 可以互相對應

//test 

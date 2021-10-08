




var b = document.querySelector("body");

function change (){
    window.setTimeout(() =>  b.setAttribute("style","background-color:Teal"),1000*1);

    window.setTimeout(() => b.setAttribute("style","background-color:#FF865E"),1000*2);

    window.setTimeout(() => b.setAttribute("style","background-color:#EB92BE"),1000*3);
}
  
setInterval(() => change(), 1000*3);

   


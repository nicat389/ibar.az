a=-357;
var contactt;
l=0;
q=0;
var currency=[
"EUR",
"GBP",
"RUR",
"GEL",
"USD"
];

var buy=[
    "1.7973",
    "2.0617",
    "0.0286",
    "0.6915",
    "1.6700"
];

var sell=[
"1.8700",
"2.1680",
"0.0304",
"0.7000",
"1.7400"
];
clickCount=0;
   inpt=document.getElementsByClassName("clickInput")[0];
    txt=document.getElementById("header");
    hiddenMenu=document.getElementById("hiddenOption");
    
    // document.getElementsByClassName("personal")[0].style.clipPath="polygon(100% 0, 100% 0, 100% 100%, 100% 100%)";
    // document.getElementsByClassName("personal")[0].style.clipPath="polygon(68% 0, 100% 0, 100% 100%, 28% 100%)";


function currencyChange(){
setTimeout(function() {

        document.getElementsByClassName("currency")[0].innerHTML=currency[q];
        q+=1;
        if(q>=currency.length)
        q=0;
    currencyChange();
}, 1000);
}

currencyChange();

function contactUs(k){
// contactt=k;
// l=k.id;
// contact=document.getElementsByClassName("contactUs")[0];

// for(i=0;i<=5;i++){
//     document.getElementById(i).style.pointerEvents="none";
// }


// // contactt.style.pointerEvents="none";
// contactMove();
document.getElementsByClassName("main")[0].style.transform="scale(.9,.9)";
document.getElementsByClassName("main")[0].style.opacity=".8";
document.getElementsByClassName("modalDivContact")[0].style.right="0";
document.getElementsByClassName("personalText")[0].style.left="60px";
document.getElementsByClassName("corporativeText")[0].style.left="60px";
}

function contactMove(){
//     contactTime=setTimeout(function() {
//     document.getElementsByName(l)[0].style.right=a+"px";
//     contactMove();
//     a+=8.5;
//     if(a>0)
//     clearTimeout(contactTime);
//     console.log(a);
// }, 1);
}

function contactMoveBack(){
//     contactTimeBack=setTimeout(function() {
//     document.getElementsByName(l)[0].style.right=a+"px";
//     contactMoveBack();
//     a-=8.5;
//     if(a<-357)
//     clearTimeout(contactTimeBack);
    
// }, 1);
}

function contactBack(){
document.getElementsByClassName("main")[0].style.transform="scale(1,1)";
document.getElementsByClassName("main")[0].style.opacity="1";
document.getElementsByClassName("personalText")[0].style.left="0px";
document.getElementsByClassName("corporativeText")[0].style.left="0px";
// for(i=0;i<=5;i++){
//     document.getElementById(i).style.pointerEvents="auto";
// }
//     contactMoveBack();
// }

// document.getElementsByClassName("main")[0].onclick=function(event){
//     if(a>=0){
//         contactBack();
//     }

document.getElementsByClassName("modalDivContact")[0].style.right="-100%";

}


function contactBank(){
    document.getElementsByClassName("main")[0].style.transform="scale(1,1)";
document.getElementsByClassName("main")[0].style.opacity="1";
document.getElementsByClassName("modalDivBank")[0].style.right="-100%";
document.getElementsByClassName("personalText")[0].style.left="0px";
document.getElementsByClassName("corporativeText")[0].style.left="0px";

}
function contactNet(){
    document.getElementsByClassName("main")[0].style.transform="scale(1,1)";
document.getElementsByClassName("main")[0].style.opacity="1";
document.getElementsByClassName("modalDivInternet")[0].style.right="-100%";
document.getElementsByClassName("personalText")[0].style.left="0px";
document.getElementsByClassName("corporativeText")[0].style.left="0px";
}

function bankOnline(k){
document.getElementsByClassName("main")[0].style.transform="scale(.9,.9)";
document.getElementsByClassName("main")[0].style.opacity=".8";
document.getElementsByClassName("modalDivBank")[0].style.right="0";
document.getElementsByClassName("personalText")[0].style.left="60px";
document.getElementsByClassName("corporativeText")[0].style.left="60px";
}

function netBank(k){
document.getElementsByClassName("main")[0].style.transform="scale(.9,.9)";
document.getElementsByClassName("main")[0].style.opacity=".8";
document.getElementsByClassName("modalDivInternet")[0].style.right="0";
document.getElementsByClassName("personalText")[0].style.left="60px";
document.getElementsByClassName("corporativeText")[0].style.left="60px";
}

window.onclick = function(event) {
    if (event.target == document.getElementsByClassName("modalDivContact")[0]) {
        contactBack();
    }

        if (event.target == document.getElementsByClassName("modalDivBank")[0]) {
         contactBank();
    }
        if (event.target == document.getElementsByClassName("modalDivInternet")[0]) {
         contactNet();
    }


     if(inpt.value==""){
         clickCount+=1;
         console.log(clickCount);
         if(clickCount%2!=0){
         document.getElementById("header").style.top="25px";
     document.getElementsByClassName("images")[0].style.marginTop="15px";
      txt.style.fontSize="1em";
    hiddenMenu.style.display="none";
         }

    //  clickCount++;
    //  if(clickCount%2!=0)
    //  inpt.style.height="0px";
    //      txt.style.fontSize="1em";
    // hiddenMenu.style.display="none";
    // document.getElementById("header").style.top="25px";
    //  document.getElementsByClassName("images")[0].style.marginTop="15px";
     }




}


function personal(){
      document.getElementsByClassName("corporativeText")[0].style.display="none";

      document.getElementsByClassName("slider")[0].style.top="-500px";
      document.getElementsByClassName("slider")[0].style.transition="all 1.2s ease";
    
    persTime=setTimeout(function() {
        

personalTime=setTimeout(function() {
      document.getElementsByClassName("personalText")[0].style.display="block";
      
}, 300);
       document.getElementsByClassName("personalCorporative")[0].style.clipPath="polygon(68% 0, 100% 0, 100% 100%, 38% 100%)";
       document.getElementsByClassName("personalMain")[0].style.top="0";
    
       document.getElementsByClassName("corporativeMain")[0].style.top="100%";
     
        }, 1000);
}

function corporative(){
      document.getElementsByClassName("personalText")[0].style.display="none";
            document.getElementsByClassName("slider")[0].style.top="-500px";
      document.getElementsByClassName("slider")[0].style.transition="all 1.2s ease";

      corpTime=setTimeout(function() {
          
   
personalTime=setTimeout(function() {
      document.getElementsByClassName("corporativeText")[0].style.display="block";
}, 300);
       document.getElementsByClassName("personalCorporative")[0].style.clipPath="polygon(68% 0, 100% 0, 100% 100%, 38% 100%)";
              document.getElementsByClassName("personalMain")[0].style.top="-100%";
    
       document.getElementsByClassName("corporativeMain")[0].style.top="0";
         }, 1000);
}


function resetFunction(){
          
          document.getElementsByClassName("personalText")[0].style.display="none";
      document.getElementsByClassName("corporativeText")[0].style.display="none";
       document.getElementsByClassName("personalCorporative")[0].style.clipPath="polygon(100% 0, 100% 0, 100% 100%, 100% 100%)";
   
      resetTime=setTimeout(function() {
      document.getElementsByClassName("slider")[0].style.top="50px";
      document.getElementsByClassName("slider")[0].style.transition="all .3s ease";
      }, 1300);
    

       
          
           
}




var photos=[
    "img/slider1.jpg",
    "img/slider2.jpg",
    "img/slider3.jpg"
];


function inputFunc(event){
  clickCount=1;
  if (clickCount%2!==0) {
    document.getElementsByClassName("images")[0].style.marginTop="50px";
     document.getElementsByClassName("images")[0].style.transition="all .1se ease"
    span=event.target;
    document.getElementById("header").style.top="-10px";
    hiddenMenu.style.transition="all 1s ease";
 
    inpt.style.height="40px";
    txt.style.fontSize="0.6em";
    hiddenMenu.style.display="block";
    inpt.focus();
  }
  else{
    //   if(inpt.value=="")
    // inpt.style.height="0px";
       document.getElementById("header").style.top="25px";
     document.getElementsByClassName("images")[0].style.marginTop="15px";
    txt.style.fontSize="1em";
    hiddenMenu.style.display="none";
    inpt.value="";
  }

  
}


//end search input function


//slider div function
function change(event){
  dot=document.getElementsByClassName('dot');
  clickDiv=event.target;
  for(i=0;i<dot.length;i++){
    dot[i].style.backgroundColor="white";
    dot[i].style.border="none";
  }
  clickDiv.style.backgroundColor="transparent";
  clickDiv.style.border="2px solid white";
  mainDiv=document.querySelector(".images .col4 .photos");
  src=clickDiv.getAttribute("value");
  console.log(src);
  mainDiv.style.backgroundImage="url("+photos[src-1]+")";
  mainDiv.style.transition="none ";

}
//end slider div function


//search list item function
function searchItem(event){
  var listItem=event.target;
  inpt.value=listItem.innerHTML;
}


function up() {
  scrollTo(document.body, 0, 600);
}
var scrollme;
scrollme = document.querySelector("#scrollme");
scrollme.addEventListener("click",runScroll,false)

function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop == to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}


function bars(){
document.getElementsByClassName("modalDivBars")[0].style.right="0";
}
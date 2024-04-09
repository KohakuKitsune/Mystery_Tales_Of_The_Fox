var currURL=window.location.href;
console.log(currURL);

sessionStorage.setItem("currURL",currURL);

var MC_Name = sessionStorage.getItem("currMC_Name");
console.log(MC_Name);

var choice_2_1=sessionStorage.getItem("currchoice_2_1");
var choice_2_1_3=sessionStorage.getItem("currchoice_2_1_3");

var item1 = sessionStorage.getItem("currItem 1");
console.log(item1);

var item1_1 = sessionStorage.getItem("currItem 1_1");

var content = document.body.innerHTML;
console.log(content);

var res = content.replaceAll("小狐狸",String(MC_Name));
console.log(res);

document.body.innerHTML = res;
console.log(document.body.innerHTML);



document.body.onload = function(){
  initialFunction()
  initialFunction2()
}

function initialFunction(){
  if(item1 === "none"){
    document.getElementById("Chapter2-1-1").style.display = "block";
    document.getElementById("Chapter2-endpart1").style.display = "block";
    document.getElementById("Choicecontinue").style.display = "block";
    sessionStorage.setItem("currItem 1_1","none");
  }
  else if(item1 === "A"){
    document.getElementById("Chapter2-1-2").style.display = "block";
    document.getElementById("Choiceitem1").style.display = "block";
  }
  else if(item1 ==="a"){
    document.getElementById("Chapter2-1-3").style.display = "block";
    document.getElementById("Chapter2-endpart1").style.display = "block";
    document.getElementById("Choicecontinue").style.display = "block";
    sessionStorage.setItem("currItem 1_1","a");
  }
}
function initialFunction2(){
  if(choice_2_1 == 1){
    Chapter2_item1_1Choice()
  }
  else if(choice_2_1 == 2){
    Chapter2_item1_2Choice()
  }
  else if(choice_2_1 == 3){
    Chapter2_item1_3Choice()
    if(choice_2_1_3 == 1){
      Chapter2_item1_3_1Choice()
    }
    else if(choice_2_1_3 == 2){
      Chapter2_item1_3_2Choice()
    }
  }
}


function Chapter2_item1_1Choice(){
  var text = document.getElementById("Chapter2-item1-1");
  var button = document.getElementById("Choiceitem1");
  if(text.style.display === "none"){
    text.style.display = "block";
    button.style.display = "none";
    sessionStorage.setItem("currItem 1_1","A_1");
    choice_2_1=1;
    document.getElementById("Chapter2-endpart1").style.display = "block";
    document.getElementById("Choicecontinue").style.display = "block";
  }
  
} 

function Chapter2_item1_2Choice(){
  var text = document.getElementById("Chapter2-item1-2");
  var button = document.getElementById("Choiceitem1");
  if(text.style.display === "none"){
    text.style.display = "block";
    button.style.display = "none";
    sessionStorage.setItem("currMana_points",10);
    sessionStorage.setItem("currItem 1_1","none");
    choice_2_1=2;
    document.getElementById("Chapter2-endpart1").style.display = "block";
    document.getElementById("Choicecontinue").style.display = "block";
  }
  
} 

function Chapter2_item1_3Choice(){
  var text = document.getElementById("Chapter2-item1-3");
  var button = document.getElementById("Choiceitem1");
  var button2 = document.getElementById("Choiceitem1_3");
  if(text.style.display === "none"){
    text.style.display = "block";
    button.style.display = "none";
    button2.style.display = "block";
    choice_2_1=3;
  }
} 

function Chapter2_item1_3_1Choice(){
  var text = document.getElementById("Chapter2-item1-3-1");
  var button = document.getElementById("Choiceitem1_3");
  if(text.style.display === "none"){
    text.style.display = "block";
    button.style.display = "none";
    sessionStorage.setItem("currfriend",1);
    choice_2_1_3=1;
    sessionStorage.setItem("currItem 1_1","none");
    document.getElementById("Chapter2-endpart1").style.display = "block";
    document.getElementById("Choicecontinue").style.display = "block";
  }
} 

function Chapter2_item1_3_2Choice(){
  var text = document.getElementById("Chapter2-item1-3-2");
  var button = document.getElementById("Choiceitem1_3");
  if(text.style.display === "none"){
    text.style.display = "block";
    button.style.display = "none";
    sessionStorage.setItem("currfriend",0);
    sessionStorage.setItem("currItem 1_1","none");
    choice_2_1_3=2;
    document.getElementById("Chapter2-endpart1").style.display = "block";
    document.getElementById("Choicecontinue").style.display = "block";
  }
} 


function Chapter2_nextpart(){
  sessionStorage.setItem("currchoice_2_1",choice_2_1);
  sessionStorage.setItem("currchoice_2_1_3",choice_2_1_3);
  window.location='第一章：出山-1.html';
}

function Fox_Stats(){
  sessionStorage.setItem("currchoice_2_1",choice_2_1);
  sessionStorage.setItem("currchoice_2_1_3",choice_2_1_3);
  window.location='Fox_Stats.html';
}

function returnHomePage(){
  var r = window.confirm("是否確認回到首頁?\n離開前請記得到神社憶之境儲存游戲進度，否則您將會失去的您當前的游戲進度。");
    if (r) {
      alert("感謝您玩這款游戲");
      window.location='index.html';
    } 
}

function Load_Save_Menu(){
  sessionStorage.setItem("currchoice_2_1",choice_2_1);
  sessionStorage.setItem("currchoice_2_1_3",choice_2_1_3);
  window.location='進入神社憶之境.html';
}

function credit(){
  sessionStorage.setItem("currchoice_2_1",choice_2_1);
  sessionStorage.setItem("currchoice_2_1_3",choice_2_1_3);
  window.location='credits.html';
}

function Aboutfoxes(){
  sessionStorage.setItem("currchoice_2_1",choice_2_1);
  sessionStorage.setItem("currchoice_2_1_3",choice_2_1_3);
  window.location='Aboutfoxes.html';
}

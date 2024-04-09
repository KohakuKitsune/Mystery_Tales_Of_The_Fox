var currURL=window.location.href;
console.log(currURL);

sessionStorage.setItem("currURL",currURL);

var MC_Name = sessionStorage.getItem("currMC_Name");
console.log(MC_Name);

var choice_1_1 =sessionStorage.getItem("currchoice_1_1");
var choice_1_2 =sessionStorage.getItem("currchoice_1_2");
var choice_1_3 =sessionStorage.getItem("currchoice_1_3");
var content = document.body.innerHTML;
console.log(content);

var res = content.replaceAll("小狐狸",String(MC_Name));
console.log(res);

document.body.innerHTML = res;
console.log(document.body.innerHTML);

document.body.onload = function(){initialFunction()};

function initialFunction(){
  if(choice_1_1 == 1){
    Chapter1_1Choice();
    if(choice_1_2 ==1){
      Chapter1_2_1Choice();
    }
    else if(choice_1_2 ==2){
      Chapter1_2_2Choice();
      if(choice_1_3 ==1){
        Chapter1_3_1Choice();
      }
      else if(choice_1_3 ==2){
        Chapter1_3_2Choice()
      }
      else if(choice_1_3 ==3){
        Chapter1_3_3Choice()
      }
    }
  
  }
}


function Chapter1_1Choice(){
  var text = document.getElementById("Chapter1-2");
  var choice =document.getElementById("Choice1");
  var nextchoice =document.getElementById("Choice2");
 choice_1_1 = 1;
  if(text.style.display === "none"){
    text.style.display = "block";
    choice.style.display= "none" ;
    nextchoice.style.display= "block" ;
    }
}

function Chapter1_2_1Choice(){
  var text = document.getElementById("Chapter1-2-1");
  var choice =document.getElementById("Choice2");
  var nextchoice =document.getElementById("Choice3");
 choice_1_2 = 1;
  if(text.style.display === "none"){
    text.style.display = "block";
    choice.style.display= "none" ;
    nextchoice.style.display= "block" ;
    }
}

function Chapter1_2_2Choice(){
  var text = document.getElementById("Chapter1-2-2");
  var choice =document.getElementById("Choice2");
  var nextchoice =document.getElementById("ChoiceEnd");
  sessionStorage.setItem("currItem 1","none");
 choice_1_2 = 2;
  if(text.style.display === "none"){
    text.style.display = "block";
    choice.style.display= "none" ;
    nextchoice.style.display= "block" ;
    }
}

function Chapter1_3_1Choice(){
  var text = document.getElementById("Chapter1-3-1");
  var choice =document.getElementById("Choice3");
  var nextchoice =document.getElementById("ChoiceEnd");
  sessionStorage.setItem("currItem 1","A");
  choice_1_3 = 1;
 
  if(text.style.display === "none"){
    text.style.display = "block";
    choice.style.display= "none" ;
    nextchoice.style.display= "block" ;
    }
}

function Chapter1_3_2Choice(){
  var text = document.getElementById("Chapter1-3-2");
  var choice =document.getElementById("Choice3");
  var nextchoice =document.getElementById("ChoiceEnd");
  sessionStorage.setItem("currItem 1","a");
  choice_1_3 = 2;
 
  if(text.style.display === "none"){
    text.style.display = "block";
    choice.style.display= "none" ;
    nextchoice.style.display= "block" ;
    }
}

function Chapter1_3_3Choice(){
  var text = document.getElementById("Chapter1-3-3");
  var choice =document.getElementById("Choice3");
  var nextchoice =document.getElementById("ChoiceEnd");
  sessionStorage.setItem("currItem 1","none");
  choice_1_3 = 3;
 
  if(text.style.display === "none"){
    text.style.display = "block";
    choice.style.display= "none" ;
    nextchoice.style.display= "block" ;
    }
}

function Fox_Stats(){
  sessionStorage.setItem("currchoice_1_1",choice_1_1);
  sessionStorage.setItem("currchoice_1_2",choice_1_2);
  sessionStorage.setItem("currchoice_1_3",choice_1_3);
  window.location='Fox_Stats.html';
}

function ChapterEndChoice(){
  sessionStorage.setItem("currchoice_1_1",choice_1_1);
  sessionStorage.setItem("currchoice_1_2",choice_1_2);
  sessionStorage.setItem("currchoice_1_3",choice_1_3);
  window.location='第一章：出山.html';
}

function returnHomePage(){
  var r = window.confirm("是否確認回到首頁?\n離開前請記得到神社憶之境儲存游戲進度，否則您將會失去的您當前的游戲進度。");
    if (r) {
      alert("感謝您玩這款游戲");
      window.location='index.html';
    } 
}

function Load_Save_Menu(){
  sessionStorage.setItem("currchoice_1_1",choice_1_1);
  sessionStorage.setItem("currchoice_1_2",choice_1_2);
  sessionStorage.setItem("currchoice_1_3",choice_1_3);
  window.location='進入神社憶之境.html';
}

function credit(){
  sessionStorage.setItem("currchoice_1_1",choice_1_1);
  sessionStorage.setItem("currchoice_1_2",choice_1_2);
  sessionStorage.setItem("currchoice_1_3",choice_1_3);
  window.location='credits.html';
}

function Aboutfoxes(){
  sessionStorage.setItem("currchoice_1_1",choice_1_1);
  sessionStorage.setItem("currchoice_1_2",choice_1_2);
  sessionStorage.setItem("currchoice_1_3",choice_1_3);
  window.location='Aboutfoxes.html';
}
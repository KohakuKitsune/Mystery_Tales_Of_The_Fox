var progressURL = sessionStorage.getItem("currURL");
console.log(progressURL);

var MC_Name = sessionStorage.getItem("currMC_Name");
var Hit_points = sessionStorage.getItem("currHit_points");
var Mana_points = sessionStorage.getItem("currMana_points");
var friend = sessionStorage.getItem("currfriend");
var item1 = sessionStorage.getItem("currItem 1");
var item1_1 = sessionStorage.getItem("currItem 1_1");

var choice_1_1 = sessionStorage.getItem("currchoice_1_1");
var choice_1_2 = sessionStorage.getItem("currchoice_1_2");
var choice_1_3 = sessionStorage.getItem("currchoice_1_3");

var choice_2_1 = sessionStorage.getItem("currchoice_2_1");
var choice_2_1_3 = sessionStorage.getItem("currchoice_2_1_3");

var QTA_start = sessionStorage.getItem("currQTA_start");

function Save1(){
  localStorage.setItem("1URL",progressURL);
  localStorage.setItem("1MC_Name",MC_Name);
  localStorage.setItem("1Hit_points",Hit_points);
  localStorage.setItem("1Mana_points",Mana_points);
  localStorage.setItem("1friend",friend);
  localStorage.setItem("1Item 1",item1);
  localStorage.setItem("1Item 1_1",item1_1);

  localStorage.setItem("1choice_1_1",choice_1_1);
  localStorage.setItem("1choice_1_2",choice_1_2);
  localStorage.setItem("1choice_1_3",choice_1_3);

  localStorage.setItem("1choice_2_1",choice_2_1);
  localStorage.setItem("1choice_2_1_3",choice_2_1_3);

  localStorage.setItem("1QTA_start",QTA_start);
  alert("記憶已儲存。");
}

function Save2(){
  localStorage.setItem("2URL",progressURL);
  localStorage.setItem("2MC_Name",MC_Name);
  localStorage.setItem("2Hit_points",Hit_points);
  localStorage.setItem("2Mana_points",Mana_points);
  localStorage.setItem("2friend",friend);
  localStorage.setItem("2Item 1",item1);
  localStorage.setItem("2Item 1_1",item1_1);

  localStorage.setItem("2choice_1_1",choice_1_1);
  localStorage.setItem("2choice_1_2",choice_1_2);
  localStorage.setItem("2choice_1_3",choice_1_3);

  localStorage.setItem("2choice_2_1",choice_2_1);
  localStorage.setItem("2choice_2_1_3",choice_2_1_3);

  localStorage.setItem("2QTA_start",QTA_start);
  alert("記憶已儲存。");
}

function Save3(){
  localStorage.setItem("3URL",progressURL);
  localStorage.setItem("3MC_Name",MC_Name);
  localStorage.setItem("3Hit_points",Hit_points);
  localStorage.setItem("3Mana_points",Mana_points);
  localStorage.setItem("3friend",friend);
  localStorage.setItem("3Item 1",item1);
  localStorage.setItem("3Item 1_1",item1_1);

  localStorage.setItem("3choice_1_1",choice_1_1);
  localStorage.setItem("3choice_1_2",choice_1_2);
  localStorage.setItem("3choice_1_3",choice_1_3);

  localStorage.setItem("3choice_2_1",choice_2_1);
  localStorage.setItem("3choice_2_1_3",choice_2_1_3);

  localStorage.setItem("3QTA_start",QTA_start);
  alert("記憶已儲存。");
}

function Save4(){
  localStorage.setItem("4URL",progressURL);
  localStorage.setItem("4MC_Name",MC_Name);
  localStorage.setItem("4Hit_points",Hit_points);
  localStorage.setItem("4Mana_points",Mana_points);
  localStorage.setItem("4friend",friend);
  localStorage.setItem("4Item 1",item1);
  localStorage.setItem("4Item 1_1",item1_1);

  localStorage.setItem("4choice_1_1",choice_1_1);
  localStorage.setItem("4choice_1_2",choice_1_2);
  localStorage.setItem("4choice_1_3",choice_1_3);

  localStorage.setItem("4choice_2_1",choice_2_1);
  localStorage.setItem("4choice_2_1_3",choice_2_1_3);

  localStorage.setItem("4QTA_start",QTA_start);
  alert("記憶已儲存。");
}

function Load1(){
 progressURL = localStorage.getItem("1URL"); 
 MC_Name = localStorage.getItem("1MC_Name");
 Hit_points = localStorage.getItem("1Hit_points");
 Mana_points = localStorage.getItem("1Mana_points");
 friend = localStorage.getItem("1friend");
 item1 = localStorage.getItem("1Item 1");
 item1_1 = localStorage.getItem("1Item 1_1");

 choice_1_1 = localStorage.getItem("1choice_1_1");
 choice_1_2 = localStorage.getItem("1choice_1_2");
 choice_1_3 = localStorage.getItem("1choice_1_3");

 choice_2_1 = localStorage.getItem("1choice_2_1");
 choice_2_1_3 = localStorage.getItem("1choice_2_1_3");

 QTA_start = localStorage.getItem("1QTA_start");

 sessionStorage.setItem("currURL",progressURL);
 sessionStorage.setItem("currMC_Name",MC_Name);
 sessionStorage.setItem("currHit_points",Hit_points);
 sessionStorage.setItem("currMana_points",Mana_points);
 sessionStorage.setItem("currfriend",friend);
 sessionStorage.setItem("currItem 1",item1);
 sessionStorage.setItem("currItem 1_1",item1_1);

 sessionStorage.setItem("currchoice_1_1",choice_1_1);
 sessionStorage.setItem("currchoice_1_2",choice_1_2);
 sessionStorage.setItem("currchoice_1_3",choice_1_3);

 sessionStorage.setItem("currchoice_2_1",choice_2_1);
 sessionStorage.setItem("currchoice_2_1_3",choice_2_1_3);

 sessionStorage.setItem("currQTA_start",QTA_start);

 window.location= progressURL;

}

function Load2(){
  progressURL = localStorage.getItem("2URL"); 
  MC_Name = localStorage.getItem("2MC_Name");
  Hit_points = localStorage.getItem("2Hit_points");
  Mana_points = localStorage.getItem("2Mana_points");
  friend = localStorage.getItem("2friend");
  item1 = localStorage.getItem("2Item 1");
 item1_1 = localStorage.getItem("2Item 1_1");
 
  choice_1_1 = localStorage.getItem("2choice_1_1");
  choice_1_2 = localStorage.getItem("2choice_1_2");
  choice_1_3 = localStorage.getItem("2choice_1_3");
 
  choice_2_1 = localStorage.getItem("2choice_2_1");
  choice_2_1_3 = localStorage.getItem("2choice_2_1_3");
 
  QTA_start = localStorage.getItem("2QTA_start");
 
  sessionStorage.setItem("currURL",progressURL);
  sessionStorage.setItem("currMC_Name",MC_Name);
  sessionStorage.setItem("currHit_points",Hit_points);
  sessionStorage.setItem("currMana_points",Mana_points);
  sessionStorage.setItem("currfriend",friend);
  sessionStorage.setItem("currItem 1",item1);
  sessionStorage.setItem("currItem 1_1",item1_1);
 
  sessionStorage.setItem("currchoice_1_1",choice_1_1);
  sessionStorage.setItem("currchoice_1_2",choice_1_2);
  sessionStorage.setItem("currchoice_1_3",choice_1_3);
 
  sessionStorage.setItem("currchoice_2_1",choice_2_1);
  sessionStorage.setItem("currchoice_2_1_3",choice_2_1_3);
 
  sessionStorage.setItem("currQTA_start",QTA_start);
 
  window.location= progressURL;
 
}

function Load3(){
  progressURL = localStorage.getItem("3URL"); 
  MC_Name = localStorage.getItem("3MC_Name");
  Hit_points = localStorage.getItem("3Hit_points");
  Mana_points = localStorage.getItem("3Mana_points");
  friend = localStorage.getItem("3friend");
  item1 = localStorage.getItem("3Item 1");
 item1_1 = localStorage.getItem("3Item 1_1");
 
  choice_1_1 = localStorage.getItem("3choice_1_1");
  choice_1_2 = localStorage.getItem("3choice_1_2");
  choice_1_3 = localStorage.getItem("3choice_1_3");
 
  choice_2_1 = localStorage.getItem("3choice_2_1");
  choice_2_1_3 = localStorage.getItem("3choice_2_1_3");
 
  QTA_start = localStorage.getItem("3QTA_start");
 
  sessionStorage.setItem("currURL",progressURL);
  sessionStorage.setItem("currMC_Name",MC_Name);
  sessionStorage.setItem("currHit_points",Hit_points);
  sessionStorage.setItem("currMana_points",Mana_points);
  sessionStorage.setItem("currfriend",friend);
  sessionStorage.setItem("currItem 1",item1);
  sessionStorage.setItem("currItem 1_1",item1_1);
 
  sessionStorage.setItem("currchoice_1_1",choice_1_1);
  sessionStorage.setItem("currchoice_1_2",choice_1_2);
  sessionStorage.setItem("currchoice_1_3",choice_1_3);
 
  sessionStorage.setItem("currchoice_2_1",choice_2_1);
  sessionStorage.setItem("currchoice_2_1_3",choice_2_1_3);
 
  sessionStorage.setItem("currQTA_start",QTA_start);
 
  window.location= progressURL;
 
}

function Load4(){
  progressURL = localStorage.getItem("4URL"); 
  MC_Name = localStorage.getItem("4MC_Name");
  Hit_points = localStorage.getItem("4Hit_points");
  Mana_points = localStorage.getItem("4Mana_points");
  friend = localStorage.getItem("4friend");
  item1 = localStorage.getItem("4Item 1");
 item1_1 = localStorage.getItem("4Item 1_1");
 
  choice_1_1 = localStorage.getItem("4choice_1_1");
  choice_1_2 = localStorage.getItem("4choice_1_2");
  choice_1_3 = localStorage.getItem("4choice_1_3");
 
  choice_2_1 = localStorage.getItem("4choice_2_1");
  choice_2_1_3 = localStorage.getItem("4choice_2_1_3");
 
  QTA_start = localStorage.getItem("4QTA_start");
 
  sessionStorage.setItem("currURL",progressURL);
  sessionStorage.setItem("currMC_Name",MC_Name);
  sessionStorage.setItem("currHit_points",Hit_points);
  sessionStorage.setItem("currMana_points",Mana_points);
  sessionStorage.setItem("currfriend",friend);
  sessionStorage.setItem("currItem 1",item1);
  sessionStorage.setItem("currItem 1_1",item1_1);
 
  sessionStorage.setItem("currchoice_1_1",choice_1_1);
  sessionStorage.setItem("currchoice_1_2",choice_1_2);
  sessionStorage.setItem("currchoice_1_3",choice_1_3);
 
  sessionStorage.setItem("currchoice_2_1",choice_2_1);
  sessionStorage.setItem("currchoice_2_1_3",choice_2_1_3);
 
  sessionStorage.setItem("currQTA_start",QTA_start);
 
  window.location= progressURL;
 
}



function returnHomePage(){
  var r = window.confirm("是否確認回到首頁?離開前請記得儲存游戲進度，否則您將會失去的您當前的游戲進度。");
    if (r) {
      alert("感謝您玩這款游戲");
      window.location='index.html';
    } 
}

function returnStory(){
  window.location= progressURL;
}

function SaveProgress(){
  if(document.getElementById("Text").style.display == "block"){
  document.getElementById("Text").style.display = "none";
  document.getElementById("Save").style.display = "block";
  document.getElementById("Loadbutton").disabled = true  ;
  }
  else{
    document.getElementById("Text").style.display = "block";
    document.getElementById("Save").style.display = "none";  
    document.getElementById("Loadbutton").disabled = false  ;
  }

}

function LoadProgress(){
  if(document.getElementById("Text").style.display == "block"){
  document.getElementById("Text").style.display = "none";
  document.getElementById("Load").style.display = "block";
  document.getElementById("Savebutton").disabled = true  ;
  }
  else{
    document.getElementById("Text").style.display = "block";
    document.getElementById("Load").style.display = "none";  
    document.getElementById("Savebutton").disabled = false  ;
  }

}
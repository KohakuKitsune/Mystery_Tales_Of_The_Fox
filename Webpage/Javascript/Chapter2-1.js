var currURL=window.location.href;
console.log(currURL);

sessionStorage.setItem("currURL",currURL);

var MC_Name = sessionStorage.getItem("currMC_Name");
console.log(MC_Name);

var item1_1 = sessionStorage.getItem("currItem 1_1");
console.log(item1_1);

var mana = sessionStorage.getItem("currMana_points");
console.log(mana);

var friends = sessionStorage.getItem("currfriend");
console.log(friends);

var content = document.body.innerHTML;
console.log(content);

var hurt_state=0;

var ending=0;

var res = content.replaceAll("小狐狸",String(MC_Name));
console.log(res);

document.body.innerHTML = res;
console.log(document.body.innerHTML);

var QTA_start=sessionStorage.getItem("currQTA_start");

document.body.onload = function(){
  initialFunction()
}

function initialFunction(){
  if(QTA_start == 1){
    QTAchoice_start()
  }
}


function QTAchoice_start(){
  document.getElementById("QTAchoice").style.display = "none";
  QTA_start=1;
  if(item1_1 === "A_1"){
    document.getElementById("Chapter2-2-1-1").style.display = "block";
    hurt_state=1;
  }
  else if(item1_1 ==="a"){
    document.getElementById("Chapter2-2-1-2").style.display = "block";
    mana+=5;
  }
  document.getElementById("Chapter2-2-2").style.display = "block";
  
  setTimeout(ShowChoices,3000)
}

var i=0;
var choicemade=0;

function ShowChoices(){
  document.getElementById("QTAchoices").style.display = "block";
  document.getElementById("Timer").style.display = "block";
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("TimerBar");
    var width = 90;
    var id = setInterval(frame, 10);
    function frame() {
      if (width <= 0 && choicemade==0) {
        clearInterval(id);
        i = 0;
        if(mana>=10){
        document.getElementById("QTAchoices").style.display = "none"; 
        document.getElementById("Timer").style.display = "none";
        document.getElementById("Chapter2-2-QTA-timeup-1").style.display = "block";
        document.getElementById("ChoiceEnd").style.display = "block";
        ending=1;
        }
        else if(friends==1){
        document.getElementById("QTAchoices").style.display = "none"; 
        document.getElementById("Timer").style.display = "none";
        document.getElementById("Chapter2-2-QTA-timeup-2").style.display = "block";
        document.getElementById("ChoiceEnd").style.display = "block";
        ending=5;
        }
        else{
          window.location ='BADEND(1).html'  
        }
      } 
      else if(choicemade==1){
        return;
      }
      else {
        width-=0.2;
        elem.style.width = width + "%";
      }
    }
  }
}

function QTAchoice1(){
  choicemade=1;
  document.getElementById("QTAchoices").style.display = "none"; 
  document.getElementById("Timer").style.display = "none";
  if(hurt_state==0){
    if(friends==1){
      document.getElementById("Chapter2-2-QTA-1-2").style.display = "block";
      document.getElementById("ChoiceEnd").style.display = "block";
      ending=4;
    }
    else{
    document.getElementById("Chapter2-2-QTA-1-1").style.display = "block";
    document.getElementById("ChoiceEnd").style.display = "block";
    ending=3;
    }
  }
  else{
  document.getElementById("Chapter2-2-QTA-1-3").style.display = "block";
  document.getElementById("ChoiceEnd").style.display = "block";
  ending=-1;
  }
}

function QTAchoice2(){
  choicemade=2;
  document.getElementById("QTAchoices").style.display = "none"; 
  document.getElementById("Timer").style.display = "none";
  if(hurt_state == 0){
    document.getElementById("Chapter2-2-QTA-2").style.display = "block";
    document.getElementById("ChoiceEnd").style.display = "block";
    ending=1;
  }
  else{
  document.getElementById("Chapter2-2-QTA-2").style.display = "block";
  document.getElementById("ChoiceEnd").style.display = "block";
  ending=2;
  }
}

function Fox_Stats(){
  sessionStorage.setItem("currQTA_start",QTA_start);
  window.location='Fox_Stats.html';
}


function Ending(){
  if(ending==1){
    window.location='GoodEnd(1).html';
  }
  else if(ending==2){
    window.location='GoodEnd(2).html';
  }
  else if(ending==3){
    window.location='GoodEnd(3).html';
  }
  else if(ending==4){
    window.location='GoodEnd(4).html';
  }
  else if(ending==5){
    window.location='GoodEnd(5).html';
  }
  else if(ending==-1){
    window.location='BADEND(1).html';
  }
}

function returnHomePage(){
  var r = window.confirm("是否確認回到首頁?\n離開前請記得到神社憶之境儲存游戲進度，否則您將會失去的您當前的游戲進度。");
    if (r) {
      alert("感謝您玩這款游戲");
      window.location='index.html';
    } 
}

function Load_Save_Menu(){
  sessionStorage.setItem("currQTA_start",QTA_start);
  window.location='進入神社憶之境.html';
}

function credit(){
  sessionStorage.setItem("currQTA_start",QTA_start);
  window.location='credits.html';
}

function Aboutfoxes(){
  sessionStorage.setItem("currQTA_start",QTA_start);
  window.location='Aboutfoxes.html';
}
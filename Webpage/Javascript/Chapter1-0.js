var currURL=window.location.href;
console.log(currURL);

sessionStorage.setItem("currURL",currURL);
sessionStorage.setItem("currHit_points",10);
sessionStorage.setItem("currMana_points",0);
sessionStorage.setItem("currfriend",0);
sessionStorage.setItem("currItem 1","0");
sessionStorage.setItem("currItem 1_1","0");

sessionStorage.setItem("currchoice_1_1",0);
sessionStorage.setItem("currchoice_1_2",0);
sessionStorage.setItem("currchoice_1_3",0);

sessionStorage.setItem("currchoice_2_1",0);
sessionStorage.setItem("currchoice_2_1_3",0);

sessionStorage.setItem("currQTA_start",0);

var MC_Name = "小狐狸";
console.log(MC_Name);


function getName(){
  MC_Name = document.getElementById("MC_Name").value; 
    var r = window.confirm(`是否確認命名小狐狸為'${MC_Name}'?`);
    if (r) {
      if(MC_Name==" "){
        Store_MC_NameDefault();
       console.log(MC_Name);
        alert("名字已設定好，請點擊'Ok'開始旅程。");
       window.location='序章：蘇醒-1.html';
      }
      else{
       Store_MC_Name();
       console.log(MC_Name);
        alert("名字已設定好，請點擊'Ok'開始旅程。");
       window.location='序章：蘇醒-1.html';
      }
      } else {
        alert("名字重設中。。。");
        str="";
      }
}

function Store_MC_NameDefault() {
  sessionStorage.setItem("currMC_Name", "小狐狸");
}

function Store_MC_Name() {
  sessionStorage.setItem("currMC_Name", MC_Name);
}

function returnHomePage(){
  var r = window.confirm("是否確認回到首頁?\n離開前請記得到神社憶之境儲存游戲進度，否則您將會失去的您當前的游戲進度。");
    if (r) {
      alert("感謝您玩這款游戲");
      window.location='index.html';
    } 
}

function Load_Save_Menu(){
  window.location='進入神社憶之境.html';
}

function credit(){
  window.location='credits.html';
}

function Aboutfoxes(){
  window.location='Aboutfoxes.html';
}
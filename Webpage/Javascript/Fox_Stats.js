var progressURL = sessionStorage.getItem("currURL");
console.log(progressURL);

var MC_name = sessionStorage.getItem("currMC_Name");

var Hit_points=sessionStorage.getItem("currHit_points");

var Mana_points=sessionStorage.getItem("currMana_points");

var item1 = sessionStorage.getItem("currItem 1");

var item_1_1 =sessionStorage.getItem("currItem 1_1");

document.getElementById("MC_Name").innerHTML=MC_name;
document.getElementById("Hit_points").innerHTML=Hit_points;
document.getElementById("Mana_points").innerHTML=Mana_points;

if(item1 !="0"&&item1 !="none"){
  document.getElementById("Item_1").innerHTML="生長在森林裏的發光蘑菇，在黑暗裏很容易被發現。能吸收森林裏的天地精華儲存在自身裏。";
  document.getElementById("Item1img").src="Icons/glowing_mushroom.png"
}
else{
  document.getElementById("Item_1").innerHTML="";
}


function returnHomePage(){
  var r = window.confirm("是否確認回到首頁?\n離開前請記得到神社憶之境儲存游戲進度，否則您將會失去的您當前的游戲進度。");
    if (r) {
      alert("感謝您玩這款游戲");
      window.location='index.html';
    } 
}

function returnStory(){
  window.location= progressURL;
}
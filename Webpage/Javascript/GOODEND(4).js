var currURL=window.location.href;
console.log(currURL);

sessionStorage.setItem("currURL",currURL);

var MC_Name = sessionStorage.getItem("MC_Name");
console.log(MC_Name);


var content = document.body.innerHTML;
console.log(content);

var res = content.replaceAll("小狐狸",String(MC_Name));
console.log(res);

document.body.innerHTML = res;
console.log(document.body.innerHTML);


function returnHomePage(){
    window.location='index.html';
}

function Load_Save_Menu(){
  window.location='進入神社憶之境.html';
}

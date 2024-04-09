var currURL=window.location.href;
console.log(currURL);
sessionStorage.setItem("currURL",currURL);

function credit(){
    window.location='credits.html';
}

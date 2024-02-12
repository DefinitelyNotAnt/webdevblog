var getThis = document.getElementById("getThis");
if (localStorage.refreshCount == undefined || localStorage.refreshCount == NaN){
    localStorage.refreshCount = 0;
}
else{
    localStorage.refreshCount++;
    getThis.innerText = "Get this and change it to localStorage for refresh count = "+localStorage.refreshCount;
}
var colorlist = [
    "red",
    "blue",
    "yellow",
    "green",
    "purple",
    "orange",
    "grey",
    "black",
    "white"
]
var count = 0
window.onclick = e => {
    count += 1;
    if (count == 8){
        count = 0;
    }
    document.body.style.backgroundColor = colorlist[count];
}
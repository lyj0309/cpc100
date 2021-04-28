let carousel_map = document.getElementsByClassName("carousel_map");
let currentIndex = 0;
carousel_map[0].children[currentIndex].style.display = "block";
setInterval(change, 2000);

function change() {
    clean();
    carousel_map[0].children[currentIndex%4].style.display = "block";
    currentIndex++;
    
}
function clean() {
    for (let index = 0; index < 4; index ++) {
        carousel_map[0].children[index].style.display = "none";
    }
}
function az() {
    this.className === "overflow off" ? this.className = "overflow on" :this.className = "overflow off";
    
}
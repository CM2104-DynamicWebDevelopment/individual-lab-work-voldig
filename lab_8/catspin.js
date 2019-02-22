var cat = document.querySelector("img");
var x = 150 / 2;
var y = 300 - 30;
var dx = 2;
var dy = -2;
function animate(time) {
    // if (lastTime != null)
    //     angle += (time - lastTime) * 0.001;
    if(y + dy > 300 || y + dy < 0){
      dy = -dy;
    }
    if(x + dx > 300 || x + dx < 0) {
      dx = -dx;
    }
    x += dx;
    y += dy;
    cat.style.top = (x ) +"px";
    cat.style.left = (y ) + "px";
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

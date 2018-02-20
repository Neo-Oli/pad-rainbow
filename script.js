colors = ["#FF0000", "#FF5900", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#FF00FF"];
i=0;
function rainbow(){
    newColor=colors[i];
    i=i+1;
    if(i>colors.length-1){
        i=0;
    }
    pad.myUserInfo.colorId = newColor;
    pad.notifyChangeColor(newColor);
    setTimeout(rainbow,200);
}
rainbow();

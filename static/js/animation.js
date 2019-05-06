//图片轮播，鼠标悬停，轮播停止
function AHIbanner(){
var screen= document.getElementsByClassName("big-banner");
var imgWidth = screen.offsetWidth;
var ul = screen.firstElementChild || screen.firstChild;
var ol = screen.children[1];
var div = screen.lastElementChild || screen.lastChild;
var spanArr = div.children;
var ulNewLi=ul.children[0].cloneNode(true);
    ul.appendChild(ulNewLi);
    for(var i=0;i<ul.children.length-1;i++){
        var olNewLi=document.createElement("li");
        olNewLi.innerHTML=i+1;
        ol.appendChild(olNewLi);
    }
    var olLiArr = ol.children;
    olLiArr[0].className="current";
    for(var i = 0;i<olLiArr.length;i++){
        olLiArr[i].index = i;     
        olLiArr[i].onmouseover = function(){
            for(var j = 0;j<olLiArr.length;j++){
            olLiArr[j].className = "";
        }
            uniformMotion(ul,-this.index*imgWidth);
            this.className = "current";
            key = square = this.index;
        }
    }
    //这个控制图片滑动的间隔,
    var timer = setInterval(autoPlay,2000);
    var key = 0;
    var square = 0;
    screen.onmouseover = function(){
        div.style.display = "block";
        clearInterval(timer);
    }
    screen.onmouseout = function(){
        div.style.display = "none";
        timer = setInterval(autoPlay,1000);
    }
    spanArr[0].onclick = function(){
        key--;
        if(key<0){
            ul.style.left =-imgWidth*(olLiArr.length)+"px";
            key = olLiArr.length-1;
        }
        uniformMotion(ul,-key*imgWidth);
        square--;
        if(square<0){
            square = olLiArr.length-1;
        }
        for(var i = 0;i<olLiArr.length;i++){
            olLiArr[i].className = "";
        }
        olLiArr[square].className = "current";
    }
    spanArr[1].onclick = function(){
        setInterval(autoPlay(),1000);
        
    }
 //自动播放
function autoPlay(){ 
        key++;
        if(key>olLiArr.length){
            ul.style.left = 0;
            key = 1;
        }
        uniformMotion(ul,-key*imgWidth);
        square++;
        if(square>olLiArr.length-1){
            square = 0;
        }
        for(var i = 0;i<olLiArr.length;i++){
            olLiArr[i].className = "";
        }
        olLiArr[square].className = "current";
    }

}
//缓动动画
function uniformMotion(obj,target) {
    clearInterval(obj.timer)
    //这个放在定时器里面好像也没有问题
    var step = obj.offsetLeft < target ? 15 : -15;
    obj.timer = setInterval(function () {
        var result = target - obj.offsetLeft;
        obj.style.left = obj.offsetLeft + step + "px";
        if(Math.abs(result) <= Math.abs(step) ){
            clearInterval(obj.timer);
            obj.style.left = target + "px";
        }

    },10);
}
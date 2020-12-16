var time = document.getElementById("time");
var banner = document.getElementById("banner");
// var bannerimglist = banner.getElementsByClassName("banner-img");
var bannerimg = document.getElementById("bannerimg");
var bannermove = document.getElementsByClassName("banner-move");
var bannerdot = document.getElementsByClassName("banner-dot");
var next = document.getElementById("next");
var prev = document.getElementById("prev");

var hanfuimg1 = document.getElementById("hanfuimg1");
var hanfuimg2 = document.getElementById("hanfuimg2");
var lolitaimg1 = document.getElementById("lolitaimg1");
var lolitaimg2 = document.getElementById("lolitaimg2");
var jkimg1 = document.getElementById("jkimg1");
var jkimg2 = document.getElementById("jkimg2");


//生成现在日期时间的函数
function convertTime(timer){
    return timer <10 ? ("0" + timer) : timer;
}
function nowTime(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getUTCDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var second = date.getSeconds();
    month = month + 1;
    hour = convertTime(hour);
    min = convertTime(min);
    var timerStr = year + "/" + month + "/" + day + "   " + hour + ":" + min + ":" + second;
    return timerStr;
}
var nowtime = setInterval(function(){
    time.innerText = nowTime();
},1000);


//轮播
var arrimg = ["./images/jk1.png","./images/lolita1.png", "./images/hanfu1.png"]
var num = 1;
setInterval(function(){
    bannerimg.src = arrimg[num];
    num++;
    if(num == arrimg.length){
        num = 1;
    }
},3000);



//点击左箭头


//点击右箭头





//定义轮播定位函数
// function locationbanner(imgs,len){
//     imgs.style.display = "block";
//     imgs.style.top = "510px";
// }
// var banners = setInterval(function(){
//     for(var i = 1; i < imglist.length; i++){
//         imglist[i].style.display = "block";
//         imglist[i].style.top = "510px";
//     }
// },3000);








//classify的图片移动
var i = 1;
var j = 1;
var l = 1;
//汉服移动
setInterval(function(){
    var len = 250 + 10 * i;
    hanfuimg1.style.left = len + "px";
    hanfuimg2.style.left = len + "px";
    i++;
    if(i == 50)
    {
        hanfuimg1.style.left = "220px";
        hanfuimg2.style.left = "220px";
        i = 1;
    }
},500);

//Lolita移动
setInterval(function(){
    var len = 250 + 10 * j;
    lolitaimg1.style.left = len + "px";
    lolitaimg2.style.left = len + "px";
    j++;
    if(j == 35)
    {
        lolitaimg1.style.left = "220px";
        lolitaimg2.style.left = "220px";
        j = 1;
    }
},500);

//jk移动
setInterval(function(){
    var len = 250 + 10 * j;
    jkimg1.style.left = len + "px";
    jkimg2.style.left = len + "px";
    l++;
    if(l == 35)
    {
        jkimg1.style.left = "220px";
        jkimg2.style.left = "220px";
        l = 1;
    }
},500);

















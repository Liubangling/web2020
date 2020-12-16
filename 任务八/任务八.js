var denglu = document.getElementById("denglu");
var time = document.getElementById("time");
var catalog = document.getElementById("catalog");
var catalogimg = catalog.getElementsByTagName("img");
var banner = document.getElementById("banner");
var bannerimg = document.getElementById("bannerimg");
var bannermove = document.getElementsByClassName("banner-move");
var bannerdot = document.getElementsByClassName("banner-dot");
var hanfuimg1 = document.getElementById("hanfuimg1");
var hanfuimg2 = document.getElementById("hanfuimg2");
var lolitaimg1 = document.getElementById("lolitaimg1");
var lolitaimg2 = document.getElementById("lolitaimg2");
var jkimg1 = document.getElementById("jkimg1");
var jkimg2 = document.getElementById("jkimg2");

//点击登录弹出账户密码框
denglu.onclick = function(){
    var a = window.prompt("账户：");
    var b = window.prompt("密码：");
    if(a.value != "" && b.value != ""){
        alert("登陆成功！");
    }else{
        alert("登录失败！");
    }
}

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


//点击目录页面滚动到相应位置
catalogimg[0].onclick = function(){
    document.documentElement.scrollTop = 1370;
}
catalogimg[1].onclick = function(){
    document.documentElement.scrollTop = 2330;
}
catalogimg[2].onclick = function(){
    document.documentElement.scrollTop = 1850;
}

//轮播
var arrimg = ["./images/jk1.png","./images/lolita1.png", "./images/hanfu1.png"]
var num = 0;
setInterval(function(){
    bannerimg.src = arrimg[num];
    num++;
    if(num == arrimg.length){
        num = 0;
    }
},3000);

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

















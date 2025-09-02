var time=60;
 const timeout=setInterval(function() {
    time=time-1;
    // console.log(parseInt(time/60),":", time%60);
    document.getElementsByClassName("minutes")[0].innerText=parseInt(time/60);
    document.getElementsByClassName("seconds")[0].innerText=parseInt(time%60);

}, 1000);
setTimeout(function(){
    clearInterval(timeout)
},60000)

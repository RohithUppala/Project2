var hour=0;
var min=0;
var secs=0;
var millisecs=0;
var timer=false;


function start(){
   timer=true;
   stopwatch();

}

function stop(){
timer=false;

}

function reset(){
timer=false;

}

function stopwatch(){
    if(timer==true){
       millisecs=millisecs+1;

       if(millisecs==100){
        secs=secs+1;
        millisecs=0;
       }
        if(secs == 60){
            min= min+1;
            secs=0;
        }

        if(min==60){
            hr=hr+1;
            min=0;
            secs=0;
        }
        document.getElementById("hours").innerHTML=hrs;
        document.getElementById("min").innerHTML=min;
        document.getElementById("secs").innerHTML=secs;
        document.getElementById("millisecs").innerHTML=millisecs;
       
       
      
        setTimeout("stopwatch()", 10)

    }
}
var now = new Date()
document.getElementById("demo").innerText= "1) "+now

var monh =["January","Feburary","March","April","May","June","July","August","September","October","November","December"]
var mont = now .getMonth()
document.getElementById("demo1").innerText = " 2)  Current Month is "+monh[mont]
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sat"]
var day = now.getDay()
document.getElementById("demo2").innerText = "3)  Today is  "+days[day]
if(day==6||day==0){
    document.getElementById("demo3").innerText = "4) It's Fun day  "
}else{
    document.getElementById("demo3").innerText = "4) It's Weekday "
    
}
var dat = now.getDate()

if(dat<16){
    document.getElementById("demo4").innerText ="5) First fifteen days of the Month"
}else{
    document.getElementById("demo4").innerText = " 5) last fifteen days of the Month"
}
var new1 = new Date("1 Jan 1970")
var now1 = now - new1
document.getElementById("demo5").innerText=" 6) Millisecond passed from jan 1 1970,  " + now1
document.getElementById("demo6").innerText=" 7) Minutes passed from jan 1 1970, " + now1/(1000*60)


var now1 = new Date()

var time1 = now1.getHours()
// document.write(time1)
if(time1<12){
document.getElementById("demo7").innerText =" 8) "+time1 +" AM"
}else{
    document.getElementById("demo7").innerText = "8)  "+time1 +" PM"

}
var ramdan = new Date("20 march 2024")
var daypassed = now1 - ramdan
document.getElementById("demo8").innerText = "9) "+Math.round(daypassed/(1000*3600*24))+"  days have passed since 1st Ramadan 2024"

var start = new Date("1 January 2024")
var diff = now1 - start
var second = Math.round(diff/(1000))

document.getElementById("demo9").innerText = "10) "+second+ " Seconds passed from the beginnig of 1st January 2024"

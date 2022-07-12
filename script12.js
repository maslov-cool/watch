const clock=document.getElementById('clock')
const color=document.getElementById('color')
const btn=document.getElementsByName('button')

function colorTime() {
    let time=new Date()
    let h=time.getHours().toString()
    let m=time.getMinutes().toString()
    let s=time.getSeconds().toString()
    if(h<10){
        h='0'+h
    }
    if(m<10){
        m='0'+m
    }
    if(s<10){
        s='0'+s
    }
console.log(h,m,s)

let timeString=h+':'+m+':'+s
let colorString='#'+h+m+s

clock.textContent=timeString
color.textContent=colorString
    document.body.style.background=colorString
}
colorTime()
setInterval(colorTime,1000);

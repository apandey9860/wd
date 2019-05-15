var step=1
function slideit(){
if (!document.images)
return
document.images.slide.src=eval("image"+step+".src")
if (step<24)
step++
else
step=1
setTimeout("slideit()",1000)
}
slideit()
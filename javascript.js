today = new Date() 
if(today.getMinutes() < 10){ 
pad = "0"} 
else 
pad = ""; 
document.write ;if((today.getHours() >=6) && (today.getHours() <=9)){ 
document.write("¡Buenos días!") 
} 
if((today.getHours() >=10) && (today.getHours() <=11)){ 
document.write("¡Buenos días!") 
} 
if((today.getHours() >=12) && (today.getHours() <=19)){ 
document.write("¡Buenas tardes!") 
} 
if((today.getHours() >=20) && (today.getHours() <=23)){ 
document.write("¡Buenas noches!") 
} 
if((today.getHours() >=0) && (today.getHours() <=3)){ 
document.write("¡Buenas noches!") 
} 
if((today.getHours() >=4) && (today.getHours() <=5)){ 
document.write("¡Buenas noches!") 
} 
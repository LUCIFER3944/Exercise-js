function creatCard(title,cName,views,monthsOld,duration,thumbnail){
    let viewStr;
    if(views<1000){
        viewStr=views;
    }else if(views>1000000){
     viewStr =views/1000000+"m"
    }else{
        viewStr=views/1000+"k"
    }
   let html= `<div class="card">
   <div class="image">
       <img src="${thumbnail}" alt="">
       <div class="capsule">${duration}</div>
   </div>
   <div class="text">
<h1>${title} </h1>
<p>${cName} .${viewStr} views .${monthsOld}months ago</p>
   </div>
</div>  `

document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html;


}

creatCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial","codewithHarry",560000,7,"31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ")
creatCard("lorem kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk","codewithHarry",760000,4,"31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ")
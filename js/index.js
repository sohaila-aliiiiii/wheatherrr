"use strict"

let input=document.getElementById('findinput')
let button=document.getElementById('findbutton')
 let  contaner=``
async function getday1()
{
    

   let respons= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=57a1ed6659fb4c85a2b164513242206&q=${input.value}?cairo&days=3&aqi=no&alerts=no`)
   let data=await respons.json()
   let town=data.location.name
   let d1state=data.current.condition.text
   let temp1=data.current.temp_c
   let icon1=data.current.condition.icon
   let d=new Date();
    let arrday= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



   contaner=`<div class="col-md-4 card3 " >
              <div class=" d-flex justify-content-between text-white cl">
                <p>${arrday[d.getDay()]}</p>
                <p>${d.getDate()}${mL[d.getMonth()]}</p>
              </div>
              <div class="text-white pt-4 ps-4 pb-4">
                <h6 class="fs-4">${town}</h6>
                <h1 class="fs-9">${temp1}oC</h1>
                <img src='https:${icon1}' class="">
                <p class="clor">${d1state}</p>
                <img src="image/icon-umberella.png"><span class="p-2">20%</span>
                <img src="image/icon-wind.png" class="ps-4"><span class="ps-1">18km/h </span>
                <img src="image/icon-compass.png" class="ps-4"><span class="ps-1">East </span>

              </div>
            </div>`
        document.getElementById('days').innerHTML=contaner
        let days= data.forecast.forecastday
   displayy(days);
  
  
   console.log(days)

   console.log(data)
} 







function displayy(list)
{
    


    for(var i=1 ;i<list.length;i++)
        {
            let d=new Date();
            let arrday= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
           contaner+=` <div class="col-md-4 card${i} ">
              <div class=" d-flex justify-content-center text-white cl${i} align-items-center">
                <p>${arrday[d.getDay()+i]}</p>
              </div>
              <div class="text-white pt-4 ps-4 pb-4 text-center">
                
                <img src='https:${list[i].day.condition.icon}' class="">
                <h4>${list[i].day.maxtemp_c}oC</h4>
                <p>${list[i].day.mintemp_c}o</p>
                <p class="clor">${list[i].day.condition.text}</p>
                

              </div>
            </div>`
        }
            document.getElementById('days').innerHTML=contaner
}
(async function(){
    await getday1()
 })();

button.addEventListener('click',function(){
    
(async function(){
     await getday1()
  })();
})



  

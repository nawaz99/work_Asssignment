// get hours minutes seconds using SECONDS


// 1) Get number of hours, minutes and seconds from number of seconds.
// For example :  If number of seconds provided are 129 , then number of hours will be 0 , minutes 2, seconds 9.
// Input :  Number of seconds.
// Output : “Hours = ‘number of hours’, minutes = ‘number of minutes’ , seconds = ‘number of seconds’ ”


function getHoursMinutesSeconds(sec){
    sec = Math.abs(sec)
   const _1second  = 1;
   const _1minute = 60*_1second;
   const _1hour = 60*_1minute;

   let Hours = sec/_1hour;
    sec =sec%_1hour; 
    let Minutes = sec/_1minute;
    sec =sec%_1minute
    let Seconds =sec/_1second;
return `Hours=${Math.floor(Hours)},Minutes=${Math.floor(Minutes)},Seconds=${Math.floor(Seconds)}`;    
}
const seconds =23455;

console.log(getHoursMinutesSeconds(seconds));

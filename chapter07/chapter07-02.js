// **************************** //
// Exercise Chapter 07 - Exercise 02 
// **************************** //

// 2. Create a function that will transform a U.S style date format into a format of a different language/region. 
//    If that date is a holiday in the target locale (language & region), it should be mentioned. 
//    Preferably, use a different language from that of the example. Example:
//    English-US: 09/16/2014 → Spanish-MX: 16/09/2014 (Dia de la independencia) 
//    Spanish-MX: 1/4/2014 → English-US: 4/1/2014 (April fools day)
//    Use of regular expressions, and lookup tables
//    Estimated Time: 1 hr.

const calendarMx = [
  {Day: 1, Month: 1, Hollyday: "New Year's Day"},
  {Day: 5, Month: 2, Hollyday: "Constitution Day"},
  {Day: 14, Month: 3, Hollyday: "Benito Juarez Day"},
  {Day: 14, Month: 3, Hollyday: "Holy Thursday"},
  {Day: 15, Month: 4, Hollyday: "Good Friday"},
  {Day: 1, Month: 5, Hollyday: "Labor Day"},
  {Day: 5, Month: 5, Hollyday: "Anniversary of the Battle of Puebla"},
  {Day: 16, Month: 9, Hollyday: "Independence Day"},
  {Day: 12, Month: 10, Hollyday: "Day of the Race"},
  {Day: 2, Month: 11, Hollyday: "All Souls' Day"},
  {Day: 14, Month: 11, Hollyday: "Revolution Day"},
  {Day: 12, Month: 12, Hollyday: "Lady of Guadalupe Day"},
  {Day: 25, Month: 12, Hollyday: "Christmas Day"}
];
const lookupMapMx = {};
const arrayLengthMx = calendarMx.length;

for (let i = 0; i < arrayLengthMx; i++) {           // Creates the LookUp Table
    let recordMx = calendarMx[i];
    if (typeof lookupMapMx[recordMx.Day] === 'undefined'){
        lookupMapMx[recordMx.Day] = {};}
        lookupMapMx[recordMx.Day][recordMx.Month] = recordMx.Hollyday;
}

const calendarEU = [
    {Day: 1, Month: 1, Hollyday: "New Year's Day"},
    {Day: 15, Month: 4, Hollyday: "Good Friday"},
    {Day: 18, Month: 4, Hollyday: "Easter Monday"},
    {Day: 1, Month: 5, Hollyday: "Labour Day"},
    {Day: 8, Month: 5, Hollyday: "Victory Day"},
    {Day: 26, Month: 5, Hollyday: "Ascension Day"},
    {Day: 5, Month: 6, Hollyday: "Whit Sunday"},
    {Day: 6, Month: 6, Hollyday: "Whit Monday"},
    {Day: 14, Month: 7, Hollyday: "Bastille Day"},
    {Day: 15, Month: 8, Hollyday: "Assumption Day"},
    {Day: 1, Month: 11, Hollyday: "All Saints' Day"},
    {Day: 11, Month: 11, Hollyday: "Armistice Day"},
    {Day: 25, Month: 12, Hollyday: "Christmas Day"},
    {Day: 26, Month: 12, Hollyday: "St Stephen's Day"}
  ];
  const lookupMapEU = {};
  
  const arrayLengthEU = calendarEU.length;
  for (let i = 0; i < arrayLengthEU; i++) {          // Creates the LookUp Table
        let recordEU = calendarEU[i];
        if (typeof lookupMapEU[recordEU.Day] === 'undefined'){
            lookupMapEU[recordEU.Day] = {};}
        lookupMapEU[recordEU.Day][recordEU.Month] = recordEU.Hollyday;
  }

function dateUSto(to, dateUS) {   // The function accepts the US Format. The first argument is a string with "mx" or "eu".
    let [_, month, day, year] = /(\d{1,2})\/(\d{1,2})\/(\d{4})/.exec(dateUS);   // Get the month, day and year 
    let  hollyday=null;
    let date = new Date(year, month - 1, day);      // I obtain the date 
    if (to=='mx'){  
        try { hollyday=lookupMapMx[day][month];}catch(err) {hollyday = null;}
        date = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear(); // (MX format) 
    }
    if (to=='eu'){
        try { hollyday=lookupMapEU[day][month];}catch(err) {hollyday = null;}     
        date = date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate(); // (EU format)
     }
     if (hollyday == undefined){hollyday=null;}  
     return {date, hollyday};
 }
  
console.log(dateUSto("eu","8/15/2003"));    // The first argument is a string with "mx" or "eu".  
console.log(dateUSto("mx","8/15/2003"));      

// The formats utilized are as follows:
// USA format (US):        MM-DD-YYYY
// Mexican Format (MX):    DD-MM-YYYY
// France European Format(EU):    YYYY-MM-DD
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

let holidayCalendarMX=[       // Is created an array with the information of the holydays in Mexico  dd/mm
    [1, 1, "New Year's Day"], 
    [5, 2, 'Constitution Day'],
    [14, 3, 'Benito Juarez Day'],
    [14, 4, 'Holy Thursday'],
    [15, 4, 'Good Friday'],
    [1, 5, 'Labor Day'],
    [5, 5, 'Anniversary of the Battle of Puebla'],
    [16, 9, 'Independence Day'],
    [12, 10, 'Day of the Race'],
    [2, 11, "All Souls' Day"],
    [14, 11, 'Revolution Day'],
    [12, 12, 'Lady of Guadalupe Day'],
    [25, 12, 'Christmas Day']
];

let holidayCalendarEU=[         // Is created an array with the information of the holydays in France  dd/mm
    [1, 1, "New Year's Day"],
    [15, 4, 'Good Friday'],
    [18, 4, 'Easter Monday'],
    [1, 5, 'Labour Day'],
    [8, 5, 'Victory Day'],
    [26, 5, 'Ascension Day'],
    [5, 6, 'Whit Sunday'],
    [6, 6, 'Whit Monday'],
    [14, 7, 'Bastille Day'],
    [15, 8, 'Assumption Day'],
    [1, 11, "All Saints' Day"],
    [11, 11, 'Armistice Day'],
    [25, 12, 'Christmas Day'],
    [26, 12, "St Stephen's Day"],
];

function dateUSto(to, dateUS) {     // The function accepts the US Format
    let dest=to;
    let result =[];
    result.push(dateUS);
    let [_, month, day, year] =
      /(\d{1,2})\/(\d{1,2})\/(\d{4})/.exec(dateUS);   // Get the month, day and year 
     let hollyday;
     if (dest=='mx'){
        hollyday=null;
        var i = 0;
        while (i < holidayCalendarMX.length){
            if (holidayCalendarMX[i][0]==day){         // Coincide the day of holyday in the Mexican calendar
                if (holidayCalendarMX[i][1]==month){     // Coincide the month of holyday in the Mexican calendar
                    hollyday=holidayCalendarMX[i][2];
                    break;
                }
            }
            i++;
         }
         var dateMX = new Date(year, month - 1, day);      // I obtain the date with a new format  
         var dateMX = dateMX.getDate()+'/'+(dateMX.getMonth()+1)+'/'+dateMX.getFullYear(); // I get the day, month and year in order of the MX format 
         return {
            dateMX, hollyday
          };
     }
     
     if (dest=='eu'){
        hollyday=null;
        var i = 0;
        while (i < holidayCalendarEU.length){
            if (holidayCalendarEU[i][0]==day){        // Coincide the day of holyday in the France calendar
                if (holidayCalendarEU[i][1]==month){    // Coincide the month of holyday in the France calendar
                    hollyday=holidayCalendarEU[i][2];
                    break
                }
            }
            i++;
         }
         var dateEU = new Date(year, month - 1, day);      // I obtain the date with a new format  
         var dateEU = dateEU.getFullYear()+'/'+(dateEU.getMonth()+1)+'/'+dateEU.getDate(); // I get the day, month and year in order of the EU format
         return {
            dateEU, hollyday
          };
     }
    
    
 } 
 // This is the function
 // the first argument is a string with "mx" or "eu" if we choose meaxican or eauropean format convertion.  
 // The second argument will be the date in USA format. 
 // dateUSto("eu","08/15/2003");  
 
 console.log(dateUSto("mx","08/15/2003"));       // The result is displayed as [MX Format] or [EU Format] 
 console.log(dateUSto("eu","08/15/2003"));  
// The formats displayed are as follows:
// USA format (US):        MM-DD-YYYY
// Mexican Format (MX):    DD-MM-YYYY
// France European Format(EU):    YYYY-MM-DD
// ***************************************************
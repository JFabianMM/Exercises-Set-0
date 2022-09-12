// **************************** //
// Exercise Chapter 07 - Exercise 01 
// **************************** //

// 1. Create a function that will transform a hex number into an rgb format.
//     Example:
//     “#3020ff” → “rgb ( 48, 32, 255)”
//     Use of regular expressions
//     Estimated Time: 30 min<.

// function hexRgb(hexnum) {
//     var hextorgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexnum);
//     let rgb = [parseInt(hextorgb[1], 16), parseInt(hextorgb[2], 16), parseInt(hextorgb[3], 16)]; 
//     return rgb; 
//   }

//   console.log(hexRgb("#3020ff"));

// **************************** //
// Exercise Chapter 07 - Exercise 01 
// **************************** //

// 2. Create a function that will transform a U.S style date format into a format of a different language/region. 
//    If that date is a holiday in the target locale (language & region), it should be mentioned. 
//    Preferably, use a different language from that of the example. Example:
//    English-US: 09/16/2014 → Spanish-MX: 16/09/2014 (Dia de la independencia) 
//    Spanish-MX: 1/4/2014 → English-US: 4/1/2014 (April fools day)
//    Use of regular expressions, and lookup tables
//    Estimated Time: 1 hr.

// var  holidayCalendarUS = [        // Is created an array with the information of the holydays in USA  dd/mm
//     [31, 12, 'New Years Day'],
//     [17, 1, 'Birthday of Martin Luther King, Jr.'],
//     [21, 2, 'Washington’s Birthday'],
//     [30, 5, 'Memorial Day'],
//     [20, 6, 'Juneteenth National Independence Day'],
//     [4, 7, 'Independence Day'],
//     [5, 9, 'Labor Day'],
//     [10, 10, 'Columbus Day'],
//     [11, 11, 'Veterans Day'],
//     [24, 11, 'Thanksgiving Day'],
//     [26, 12, 'Christmas Day']
// ];

// let holidayCalendarMX=[       // Is created an array with the information of the holydays in Mexico  dd/mm
//     [1, 1, "New Year's Day"], 
//     [5, 2, 'Constitution Day'],
//     [14, 3, 'Benito Juarez Day'],
//     [14, 4, 'Holy Thursday'],
//     [15, 4, 'Good Friday'],
//     [1, 5, 'Labor Day'],
//     [5, 5, 'Anniversary of the Battle of Puebla'],
//     [16, 9, 'Independence Day'],
//     [12, 10, 'Day of the Race'],
//     [2, 11, "All Souls' Day"],
//     [14, 11, 'Revolution Day'],
//     [12, 12, 'Lady of Guadalupe Day'],
//     [25, 12, 'Christmas Day']
// ];

// let holidayCalendarEU=[         // Is created an array with the information of the holydays in France  dd/mm
//     [1, 1, "New Year's Day"],
//     [15, 4, 'Good Friday'],
//     [18, 4, 'Easter Monday'],
//     [1, 5, 'Labour Day'],
//     [8, 5, 'Victory Day'],
//     [26, 5, 'Ascension Day'],
//     [5, 6, 'Whit Sunday'],
//     [6, 6, 'Whit Monday'],
//     [14, 7, 'Bastille Day'],
//     [15, 8, 'Assumption Day'],
//     [1, 11, "All Saints' Day"],
//     [11, 11, 'Armistice Day'],
//     [25, 12, 'Christmas Day'],
//     [26, 12, "St Stephen's Day"],
// ];

// function dateUStoMXandEU(dateUS) {     // The function accepts the US Format
//     let result =[];
//     result.push(dateUS);
//     let [_, mes, dia, año] =
//       /(\d{1,2})\/(\d{1,2})\/(\d{4})/.exec(dateUS);   // Get the month, day and year 
 
//     for (var i = 0; i < holidayCalendarUS.length; i++) {   
//         if (holidayCalendarUS[i][0]==dia){        // Coincide the day of holyday in the US calendar
//             if (holidayCalendarUS[i][1]==mes){    // Coincide the month of holyday in the US calendar
//                 console.log('USA Holiday is: ' + holidayCalendarUS[i][2]);
//             }
//         }
//      }
//      for (var i = 0; i < holidayCalendarMX.length; i++) {
//         if (holidayCalendarMX[i][0]==dia){         // Coincide the day of holyday in the Mexican calendar
//             if (holidayCalendarMX[i][1]==mes){     // Coincide the month of holyday in the Mexican calendar
//                 console.log('Mexico Holiday is: ' + holidayCalendarMX[i][2]);
//             }
//         }
//      }
//      for (var i = 0; i < holidayCalendarEU.length; i++) {
//         if (holidayCalendarEU[i][0]==dia){        // Coincide the day of holyday in the France calendar
//             if (holidayCalendarEU[i][1]==mes){    // Coincide the month of holyday in the France calendar
//                 console.log('France Holiday is: ' + holidayCalendarEU[i][2]);
//             }
//         }
//      }

//     var dateMX = new Date(año, mes - 1, dia);      // I obtain the date with a new format  
//     var dateMX = dateMX.getDate()+'/'+(dateMX.getMonth()+1)+'/'+dateMX.getFullYear(); // I get the day, month and year in order of the MX format 
//     result.push(dateMX);

//     var dateEU = new Date(año, mes - 1, dia);      // I obtain the date with a new format  
//     var dateEU = dateEU.getFullYear()+'/'+(dateEU.getMonth()+1)+'/'+dateEU.getDate(); // I get the day, month and year in order of the EU format
//     result.push(dateEU); 
//     return result;
//  }
//  console.log(dateUStoMXandEU("8/15/2003"));   // The result is displayed as [US Format, MX Format, EU France Format]

// The formats displayed are as follows:
// USA format (US):        DD-MM-YYYY
// Mexican Format (MX):    DD-MM-YYYY
// France European Format(EU):    YYYY-MM-DD
// ***************************************************
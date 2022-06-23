module.exports = function toReadable (number) {
  digital = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
  teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  desyatki = ['0', 'ten', 'twenty', 'thirty', 'forty','fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
    if (number === 0) {  /*Если число 0 то выводим zero*/
        result = 'zero';
    }

    if(number < 10 && number > 0){ /*Если число до 10 и больше 0 выводим название цифры из массива*/
    result = digital[number % 10];
    }

    if(number >= 10 && number <= 99){ /*Если число от 10 и до 99*/
        if (number >= 20 && number % 10 != 0){/*Выведем десяток и цифру если число больше 20 и не круглое*/       
            result = desyatki[Math.floor(number/10)] + ' ' + digital[number % 10];
        } else if (number >= 20 && number % 10 == 0){/*выведем название десятка если число круглое*/
            result = desyatki[Math.floor(number/10)];
        } else {/*Если число от 10 и 12*/   
             result = teen[number % 10]; 
        } 
    }
    if (number >= 100) {
        if (number % 100 == 0){                              /*это результат если у нас только сотни: 100, 200, 300 */
            result = digital[number/100] + ' hundred'
        } else if ((number % 10 == 0) && (number % 100 >= 20)){   /*это результат если у нас только сотни и десятки: 110, 220, 330 */
            result = digital[Math.floor(number/100)] + ' hundred' + ' ' + desyatki[(number % 100) / 10]
        } else if ((number % 100 >= 10) && (number % 100 <= 20)){ /*Если число от 100 и содержит в себе от 10 до 19 на конце*/
            result = digital[Math.floor(number/100)] + ' hundred' + ' ' + teen[number % 10]
        } else if (number % 100 <= 10) { /*Если число от 100 и содержит в себе еденицы без десятков*/
            result = digital[Math.floor(number/100)] + ' hundred ' + digital[number % 10]
        } else {/*Если число от 100 и содержит в себе еденицы и десятки, без 10 до 19 на конце*/
            result = digital[Math.floor(number/100)] + ' hundred '+ desyatki[Math.floor((number % 100) / 10)] + ' ' + digital[number % 10]
        }
    }
  return (result)
}




































//   if (number / 100 > 1){
//     sotni = digital[Math.floor(number/100)] + ' hundred';
//   } else {sotni = ''};
//   if (number % 100 == 10){
//     dvaznaka = 'ten'
//   };
//   if (number % 100 == 11){
//     dvaznaka = 'eleven'
//   };
//   if (number % 100 == 12){
//     dvaznaka = 'twelve'
//   };
//   if (number % 100 == 13){
//     dvaznaka = 'thirteen'
//   };
//   if (number % 100 == 14){
//     dvaznaka = 'forteen'
//   };
//   if (number % 100 == 15){
//     dvaznaka = 'fifteen'
//   };
//   if (number % 100 == 16){
//     dvaznaka = 'sixteen'
//   };
//   if (number % 100 == 17){
//     dvaznaka = 'seventeen'
//   };
//   if (number % 100 == 18){
//     dvaznaka = 'eighteen'
//   };
//   if (number % 100 == 19){
//     dvaznaka = 'nineteen'
//   };

//   edenici = '';
//   if ((number % 100 < 10) || (number % 100 > 19)) {
//     edenici = digital[number % 10];
//   } else {edinici = ''};

// return(sotni + ' ' + dvaznaka + ' ' + edenici)

// }

// console.log(toReadable(1));
module.exports = function toReadable(number) {
   let arrTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
   let arrTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   let arrDozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   if (number < 10) {
      return arrTen[number];
   } else if (number >= 10 && number < 20) {
      return arrTwenty[number % 10];
   } else if (number >= 20 && number < 100) {
      if (number % 10 === 0) {
         return `${arrDozens[Math.floor(number / 10) - 2]}`;
      } else {
         return `${arrDozens[Math.floor(number / 10) - 2]} ${arrTen[number % 10]}`;
      }
   } else if (number >= 100 && number < 1000) {
      if (number % 100 === 0) {
         return `${arrTen[Math.floor(number / 100)]} hundred`;
      } else if (Math.floor(number / 10) % 10 === 0) {
         return `${arrTen[Math.floor(number / 100)]} hundred ${arrTen[Math.floor(number % 10)]}`;
      } else if (Math.floor(number / 10) % 10 === 1) {
         return `${arrTen[Math.floor(number / 100)]} hundred ${arrTwenty[Math.floor(number % 10)]}`;
      } else {
         if (number % 10 === 0) {
            return `${arrTen[Math.floor(number / 100)]} hundred ${arrDozens[(Math.floor(number / 10) % 10) - 2]}`;
         } else {
            return `${arrTen[Math.floor(number / 100)]} hundred ${arrDozens[(Math.floor(number / 10) % 10) - 2]} ${arrTen[Math.floor(number % 10)]}`;
         }
      }
   }
}

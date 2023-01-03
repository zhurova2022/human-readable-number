module.exports = function toReadable (number) {
  let num = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
  10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty'};

  let tens= {2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'};

  if(number === 0){return 'zero'};

  if (number>=0 && number<=20){return num[number];}

  if (number > 20 && number < 100){
    if (number % 10 == 0){
      return tens[number.toString()[0]];
    } else {
      return tens[number.toString()[0]] + " " + num[number.toString()[1]];
    }
  }

  if (number > 99 && number < 1000){
    if (number % 10 == 0 && number % 100 == 0){
      return num[number.toString()[0]] + " hundred";
    }
    if (number % 100 < 20){
      return num[number.toString()[0]] + " hundred " + num[number % 100];
    }
    if (number % 10 ===0){
      return num[number.toString()[0]] + " hundred " + tens[number.toString()[1]];
    } 
    else{
      return num[number.toString()[0]] + " hundred " + tens[number.toString()[1]] + " " + num[number.toString()[2]];
    }
  }
}

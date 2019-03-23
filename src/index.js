module.exports = function getZerosCount(number, base) {
  // your implementation
  if(number>=1 && number<=10^7 && base>=2 && base<=256){
    
    var divides = [];
    var j = 1;
    var i = 2;
    for(j;i<base&&j<20;j++){
    if(base % 2 === 1){
      i++;
      if(i<20){
        for(var k=3;base/k % 2 === 0;k+=2){
        divides.push(base/k);
        break;
        }
      }
      else if(i>=20){
        divides.push(base);
      }
    
    }else{
      base = Math.floor(base/i);
      divides.push(i);
    }
    }
    let countOfTwo = 0;
    for(two=2;two<=number;two*=2){
    
      countOfTwo+= Math.floor(number/two);
    } 

    const srsa = Math.floor(countOfTwo/1);//Полученное число(29строка) из цикла делим на кол-во двоек с base
    let countOfAnother = 0;
    for(another=divides[1];another<=number;another*=divides[1]){
      countOfAnother+= Math.floor(number/another);
    }
    srsb = countOfAnother;

    const numbers = [srsa, srsb];

    numbers.sort(function(a, b) {
      return b - a;
    });

    return numbers[0];
}
}

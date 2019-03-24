module.exports = function getZerosCount(number, base) {
  // your implementation
 if(number>=1 && number<=10^7 && base>=2 && base<=256){
    
    var divides = [];
    var j = 1;
    var i = 2;
    for(var countOfTwo = 0,j;i<base&&j<20;j++){
    if(base % 2 === 1){
      i++;
      if(j<=19){
        for(var k=3;
          base/k===1 || base/k===2 || base/k===3 || 
          base/k===4 || base/k===5 || base/k===6 || 
          base/k===7 || base/k===8 || base/k===9 || 
          base/k===10 || base/k===11 || base/k===12 ||
          base/k===13 || base/k===14 || base/k===15 || 
          base/k===16 || base/k===17 || base/k===18 || base/k===19;k+=2){
          base = base/k;   
          divides.push(i);
          divides.push(base);
          break;
        }
      }
    }
    else{
      if(divides.length>1){
        divides.pop();
      }
      base = Math.floor(base/i);
      divides.push(i);
      divides.push(base);
      countOfTwo++;
    }
    }

    var countMultiplyOfTwo = 0;
    for(two=2;two<=number;two*=2){
    
      countMultiplyOfTwo+= Math.floor(number/two);
    } 
    divides.sort(function(a, b) {
      return b - a;
    });
    const srsa = Math.floor(countMultiplyOfTwo/countOfTwo);//Полученное число(29строка) из цикла делим на кол-во двоек с base
    let countOfAnother = 0;
    
    for(another=divides[0];another<=number;another*=divides[0]){
      countOfAnother+= Math.floor(number/another);
    }
    srsb = countOfAnother;

    const numbers = [srsa, srsb];

    numbers.sort(function(a, b) {
      return b - a;
    });

    return numbers[1];
}
}

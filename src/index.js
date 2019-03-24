module.exports = function getZerosCount(number, base) {
  // your implementation
 if(number>=1 && number<=10^7 && base>=2 && base<=256){
    const originalBase = base;
    var divides = [];
    var j = 1;
    var i = 2;
    let t = 2;
    for(var countOfTwo = 0,j;i<base&&j<21&&t<base;j++){
    if(base % 2 === 1){
      t++;
      
      if(j<=19){
        for(t;(base/t) >= 1 && (base/t) <= 61 && ((base/t) % 1) === 0;t++){
          divides.pop();
          base = base/t;   
          divides.push(t);
          divides.push(base);
          t = 2;
          break;
        }
      }
      else if(j===20 && divides.length===0){
        divides.push(base);
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
    if(base === 1){
      divides.pop();
    }
    }
    if(base === 2){
      divides.push();
      countOfTwo++;
    }
    var countMultiplyOfTwo = 0;
    for(two=2;two<=number;two*=2){
    
      countMultiplyOfTwo+= Math.floor(number/two);
    } 
    divides.sort(function(a, b) {
      return b - a;
    });

    for(h=1, gh=1;gh<=divides.length;gh++){
      if(divides[0] === divides[gh]){
        h++;
      }
    }

    const srsa = Math.floor(countMultiplyOfTwo/countOfTwo);//Полученное число(29строка) из цикла делим на кол-во двоек с base
    let countOfAnother = 0;
    
    for(anotherNumbers=divides[0];anotherNumbers<=number;anotherNumbers*=divides[0]){
      countOfAnother+= Math.floor(number/anotherNumbers);
    }
    if(h>=2){
      srsb = Math.floor(countOfAnother/h);
    }else{
      srsb = countOfAnother;
    }

    const numbers = [srsa, srsb];

    numbers.sort(function(a, b) {
      return b - a;
    });
    if(originalBase === 2){
      return numbers[0];
    }
    return numbers[1];
}
}

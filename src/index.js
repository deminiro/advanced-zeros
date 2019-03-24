module.exports = function getZerosCount(number, base) {
  // your implementation
 if(number>=1 && number<=10^7 && base>=2 && base<=256){
    
    var divides = [];
    var j = 1;
    var i = 2;
    let t = 2;
    for(var countOfTwo = 0,j;i<base&&j<21&&t<base;j++){
    if(base % 2 === 1){
      t++;
      
      if(j<=19){
        for(t;
          base/t===1 || base/t===2 || base/t===3 || 
          base/t===4 || base/t===5 || base/t===6 || 
          base/t===7 || base/t===8 || base/t===9 || 
          base/t===10 || base/t===11 || base/t===12 ||
          base/t===13 || base/t===14 || base/t===15 || 
          base/t===16 || base/t===17 || base/t===18 ||
          base/t===19 || base/t===20 || base/t===21 ||
          base/t===22 || base/t===23 || base/t===24 || 
          base/t===25 || base/t===26 || base/t===27 ||
          base/t===28 || base/t===29 || base/t===30;t++){
          divides.pop();
          base = base/t;   
          divides.push(t);
          divides.push(base);
          t = 2;
          break;
        }
      }
      else if(j===20&&divides.length===0){
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

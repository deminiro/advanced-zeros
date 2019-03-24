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
          base/t===28 || base/t===29 || base/t===30 ||
          base/t===31 || base/t===32 || base/t===33 ||
          base/t===34 || base/t===35 || base/t===36 || 
          base/t===37 || base/t===38 || base/t===39 ||
          base/t===40 || base/t===41 || base/t===42 ||
          base/t===43 || base/t===44 || base/t===45 || 
          base/t===46 || base/t===47 || base/t===48 ||
          base/t===49 || base/t===50 || base/t===51;t++){
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
    if(originalBase === 2){
      return numbers[0];
    }
    return numbers[1];
}
}

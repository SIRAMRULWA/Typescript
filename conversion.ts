function convertPounds(pounds: number):number{
    return pounds/2.2046;
}
convertPounds(100);
console.log(`100 pound is equivalent to ${convertPounds(100)} KG`);

function convertInchesToCent(inches: number):number{
    return inches*2.54;
}
convertInchesToCent(100);
console.log(`100 inches is equal to ${convertInchesToCent(100)} CM`)
function convertFahToCelsiu(fah: number):number{
    return (fah-32)/1.8;
}
convertFahToCelsiu(100);
console.log(`100 fah if equal to ${convertFahToCelsiu(100)} Celsius`);
function convertFeetToCentimeter(feet: number):number{
    return feet/0.0022046;
}
convertFeetToCentimeter(100);
console.log(`100 Feet is equal to ${convertFeetToCentimeter(100)} Meters`);

function isEven(n:number):boolean {
    n = Number(n);
    return n === 0 || !!(n && !(n%2));
  }
  isEven(5);
  console.log(`5 is a ${isEven(5)}`);
  
  function isOdd(n: number):boolean {
    return isEven(Number(n) + 1);
  }
  isOdd(4);
  console.log(`5 is a ${isOdd(5)}`);

function fizzFunction(n:number){
    if (n%3===0 && n%5===0){
        return "FizzBuzz!";
    }
    else if(n%3===0){
        return "Fizz";
    }
    else if(n%3===0){
        return "Fizz";
    }
    else if(n%5===0){
        return "Buzz";
    }
    else {
        return n;
    }

}
fizzFunction(1);
console.log(fizzFunction(1));




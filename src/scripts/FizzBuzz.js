export default class FizzBuzz{
    constructor(){

    }
  isDivisible(num){
    if(num % 3 === 0) return 'Fizz'
    if(num % 5 === 0) return 'Buzz'
   
  }
  isDivisibleAll(num){
   return (num % 3 === 0 && num % 5 === 0? "FizzBuzz":"false")
  }
}
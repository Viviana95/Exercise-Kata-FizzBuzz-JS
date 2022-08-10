import FizzBuzz from "../scripts/FizzBuzz.js";

describe('FizzBuzz', () => {
    test('should return Fizz if the number is divisible for 3 ', () => {
        //given
        const num =3
        const fizzBuzz = new FizzBuzz;
        //when
        const result=fizzBuzz.isDivisible(num);
        //then
        expect(result).toBe('Fizz');
    });

    test('should return Buzz ', () => {
        //given
        const num =5
        const fizzBuzz = new FizzBuzz;
        //when
        const result=fizzBuzz.isDivisible(num);
        //then
        expect(result).toBe('Buzz');
    });
    test('should return FizzBuzz ', () => {
        //given
        const num =15
        const fizzBuzz = new FizzBuzz;
        //when
        const result=fizzBuzz.isDivisibleAll(num);
        //then
        expect(result).toBe('FizzBuzz');
    });
});
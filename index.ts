// import * as _ from 'lodash';

// console.log("Hellow world")

// async function hello() {
//     return 'world'
// }

// .pickBy() 

// let lucky = 23;

// let lucky: any = 23;

// lucky = '23';

// let lucky: number = 23;

// type Style = 'bold' | 'italic' | 23;

// let font: Style

// font = 23;

interface Person {
    first: string;
    last: string;
    [key: string]: any //aditional parameter not to be so strict
}

const person: Person = {
    first: 'Jeff',
    last: 'Delaney'
}

const person2: Person = {
    first: 'Jeff',
    last: 'Delaney',
    fast: false
}

type MyList = [number?, string?, boolean?]
// const arr: Person[] = []
// const arr: number[] = []
const arr: MyList = []

arr.push(1)
arr.push('23')
arr.push(false)

function pow(x: number, y: number): string {
    return Math.pow(x, y).toString();
}


//Generics 
// RXJS observable
class Observable<T>{
     constructor(public value: T) {
     }
}

let x: Observable<number>;
let y: Observable<Person>;

let z = new Observable(23) //implicitly have that internal number type

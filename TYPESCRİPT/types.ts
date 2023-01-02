let a: number = 5;
let b: string = `a`;
let c: boolean = true;
let d: any;
let e: number[] = [1,2,3];  //number  üzerinde dizi tanımlaması yaptık.
let f: Array<number> = [1,2,3];
let g: any[] = [1,`a`,true]; // herhangi bir değer atanabilri any de.
let h: [string,number,boolean] = [`a`,7,false]; // let in içindeki sıralamaya göre eşitliğin diğer tarafını yazmalısın

const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;

enum Payment {kredi=0, havale=1, kapidaodeme=2, eft=3};

let kredi = Payment.kredi; // gelecek olan değer kredi için 0 ataması
let havale = Payment.havale; // 1
let kapidaodeme = Payment.kapidaodeme; // 2
let eft = Payment.eft; // 3
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangleSqare(a,b,) {
//     return(a*b)
// }
// let sqr = rectangleSqare(2,4);
// console.log(sqr);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function sqrcircle(r) {
//     let pi=3.14;
//     sqr=pi*(r**2)
//     return(sqr)
// }
// let r = 10;
// document.write(sqrcircle(r))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r  S= 2πRH
// function sqrCylinder(h,r) {
//     let pi = 3.14;
//     return(2*pi*r*h)
// }
// console.log(sqrCylinder(50,10));

// - створити функцію яка приймає масив та виводить кожен його елемент
// function arr(array) {
//     for (let i = 0; i < array.length; i++) {
//         document.write(array[i])
//     }
// }
// let mas = [1,2,3,4,5,6,7,8,9,true];
// arr(mas);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let txt = 'asadsffdgggklhjfklghjflg';
// function pargrafTxt(text) {
//     document.write(`<p>${text}</p>`);
// }
// pargrafTxt(txt);
//

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//     let txt = 'odnakovyj text';
//
//     function createUL(txt) {
//         document.write(`<ul>`);
//         document.write(`<li>${txt}</li>`);
//         document.write(`<li>${txt}</li>`);
//         document.write(`<li>${txt}</li>`);
//         document.write(`</ul>`);
//     }
// createUL(txt);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//         function createLI(txt,num) {
//             document.write(`<ul>`);
//             for (let i = 0; i < num; i++) {
//                document.write(`<li>${txt}</li>`)
//             }
//             document.write(`</ul>`);
//         }
// createLI('asd',5);

//     - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//     let array = [1,2,3,true,false,'vasya','yra'];
//
//     function listCreate(arr) {
//         document.write(`<ol>`)
//         for (let i = 0; i < arr.length; i++) {
//             document.write(`<li>${arr[i]}</li>`)
//         }
//         document.write(`</ol>`)
//     }
// listCreate(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. ' +
// 'Для кожного об'єкту окремий блок.
//
// let mas = [{id:1, name:'naz',age:34},{id:2, name:'taras',age:30},{id:3, name:'ryslan',age:25}];
// function masObject(arr) {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`)
//     }
// }
// masObject(mas);
// Array.prototype.reduce2 = function (callback, result){
//     for (let i=0; i< this.length;i++){
//         result = callback(result,this[i],i,this)
//     }
//     return result ;
// }

// Array.prototype.forEach2 = function (callback, result){
//     for (let i=0; i< this.length;i++){
//         result = callback(result,this[i],i,this)
//     }
//     return result ;
// }

// const numbers= [10,5,15,20]

// let result = numbers.forEach2(function(number, index){
//     console.log(number,index)
// });

// let aElements = document.links ;

// for (let i = 0 ; i < aElements.length ; ++i ) {
//     aElements[i].onclick = function (e) {
//         if (!e.target.href.startsWith('http://fb.com/')) {
//             e.preventDefault();
//         }
//         console.log(e.target.href)
//     }
// }

// let btn = document.getElementById('btn');
// function work1(){
//     console.log('WORK 1');
// }

// btn.addEventListener('click', work1);


//     setTimeout(function() {
//         btn.removeEventListener('click', work1)
//     }, 3000 );
    // event Listener

// let promise1 = new Promise (
//     function (resolve) {
//         setTimeout(function() {
//             resolve([1]);
//         },1000);
//     }
// )

// let promise2 = new Promise (
//     function (resolve) {
//         setTimeout(function(){
//             resolve([2,3]);
//         },2000);
//     }
// )

// Promise.all([promise1,promise2])
//    .then(function([result1, result2]){
//        console.log(result1.concat(result2))
//    }) 
        // promise

let users = [
    {
        id : 1,
        name : ' Anh Ha '
    },
    {
        id : 2,
        name : ' Ha Anh '
    }
];
let comments = [
    {
    id : 1,
    user_id : 1,
    content : ' Ra video '
    },
    {
        id : 2,
        user_id : 2,
        content : ' Ra video nao '
    }];

 
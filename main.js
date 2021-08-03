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

let aElements = document.links ;

for (let i = 0 ; i < aElements.length ; ++i ) {
    aElements[i].onclick = function (e) {
        if (!e.target.href.startsWith('http://fb.com/')) {
            e.preventDefault();
        }
        console.log(e.target.href)
    }
}


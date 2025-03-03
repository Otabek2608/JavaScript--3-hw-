// let son1 = +prompt("Sonni kiriting: ")
// let son2 = +prompt("Darajani kiritng:")
// let natija = son1 && son2

// for (let i = 1; i <= 10; i++) {
//    for (let j = 1; j <=10; j++) {
//     if(isNaN(son1) || isNaN(son2)){
//         alert("Xato! Sonni kiriting!")
//     }else if (son1 === 0 && son2 === 0){
//         alert("Xato! 0 dan bowqa sonni kiritng!")
//     }else if(i % 2 == 0 || i % 2 != 0 && j % 2 == 0 || j % 2 != 0){
//         alert(`${son1} ning ${son2}-darajasi: ${natija}`)
//     }else{
//         alert("Xato!")
//     }
//    }
// }

let son1 = +prompt("Sonni kiriting: ");  
let son2 = +prompt("Darajani kiriting: ");  

if (isNaN(son1) || isNaN(son2)) {
    alert("Xato! Sonni kiriting!");
} else if (son1 === 0 && son2 === 0) {
    alert("Xato! 0 dan bowqa sonni kiritng!");
} else {
    let natija = Math.pow(son1, son2);
    alert(`${son1} ning ${son2} -darajasi: ${natija}`);
}

 

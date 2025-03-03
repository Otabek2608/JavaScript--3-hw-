let son = +prompt("Sonni kiriting: ")

for (let i = 0; i < 10; i++) {
    if (son === "  " || isNaN(son)){
        alert("Sonni kiriting!")
    }
     else if (son % 2 == 0) {
        alert("Siz Juft raqam kiritiz");
    } else {
        alert("Siz Toq raqam kiritiz");
    }
}





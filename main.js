
number = +prompt("Введіть число від 0 до 100")
for (let i = 1; i <= number ; i++) {
    if(i %5 ===0){
    console.log(i);
    }
}
if (number < 5){
    console.log("sorry no numbers");
}

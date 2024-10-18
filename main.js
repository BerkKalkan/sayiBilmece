let randInt =(Math.floor(Math.random() * 20));
let userReply = 5;

function game(){
    while (userReply != 0) {
        let userGuess = Number(prompt("1 ile 20 arasinda bir sayi tahmin et \n kalan cevap hakkı: " + userReply));
    
        if (userGuess == randInt) {
            alert("tebrikler dogru bildin")
            userReply = 5;
            return;
        }else if (userGuess > randInt){
            userReply --;
            console.log("yanlis cevap daha dusuk bir sayi dene")
        }else if (userGuess < randInt){
            userReply --;
            console.log("yanlis cevap daha yuksek bir sayi dene")
        }
    }
    if (userReply == 0) {
        alert("cevap hakkin doldu sayiyi bilemedin tekrar dene")
        userReply = 5;
    }
}
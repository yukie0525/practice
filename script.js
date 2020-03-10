// console.log("Hello world");

// let variable = 1; let Example = 5;
// console.log(Example ) ; //これは当たり前
// Example = variable ;
// console.log(Example ); //これはvariable で上書きされてる

// const constant = 1; //定数という意味 
// console.log(constant); //変数と同様に表示される 
// // constant = 3; //定数は上書きができない!(エラー)

// for(let i = 1; i <= 3 ; i++) {
//     console.log(i); }

// let n = 0;
// let x = 1; 
// while (n < 3) {
//     n++;
//     x += n; 
//     console.log(x);
//     }

// let i = 1; 
//     if(i == 2){
//         console.log("Hello!World");
//     }
//     else if(i > 2){
//         console.log("Good morning");
//     } 
//     else{
//         console.log("Good evening");
//     }

// let weather = "晴れ"; 
// switch(weather) {
//     case "晴れ":
//         console.log("今日は晴れです!");
//     break; case "雨":
//         console.log("今日は雨です!");
//     break; default:
//         console.log("今日は雪です!"); 
//     break;
//     }

// let array= ["リンゴ","バナナ","イチゴ"];
//     for(let i=0; i < array.length; i++){ 
//         console.log(array[i]);
//     }
    


    // let random = Math.floor(Math.random() * 7 ); //0〜6までの数字
    // console.log(random);

    // let randomnum = 1 + Math.floor(Math.random() * 6 ); //1〜6までの数字
    // console.log(randomnum);

    
    // サイコロ
    document.addEventListener("DOMContentLoaded",function () {   
    
    const dices = document.getElementById("dice");

    function number(){
        const rundomnum = 1 + Math.floor(Math.random() * 6 );
        dices.innerHTML = rundomnum;
    }    
        
     dices.addEventListener("click", number, false);
});


    //おみくじ
    document.addEventListener("DOMContentLoaded",function () {   
    
    const fortunes = document.getElementById("fortune");
    const list = ["大吉","中吉","吉","小吉","末吉","凶"]

    function　draw(){
        const result = Math.floor(Math.random() * list.length );
        fortunes.innerHTML = list[result];
    }    
        
    fortunes.addEventListener("click",draw, false);
    
});
   
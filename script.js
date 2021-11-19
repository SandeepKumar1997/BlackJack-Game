let cards=[];
let sum=0;
let message="";
let isAlive=false;
let hasBlackJack=false;
let resultEl=document.getElementById("result-el");
let cardEl=document.getElementById("card-el");
let sumEl=document.getElementById("sum-el");

function cardPicker(){
    let cardDrawn=Math.floor(Math.random()*13)+1;
    if(cardDrawn>10){
        return 10;
    }else if(cardDrawn===1){
        return 11;
    }else{
        return cardDrawn;
    }
}

function startgame(){
    isAlive=true;
    let firstCard=cardPicker();
    let secondCard=cardPicker();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
    rendergame();
}

function rendergame(){
    cardEl.textContent="Cards :"+" ";
    for(let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+" ";
    }

    sumEl.textContent="Sum :"+sum;
    if(sum<21){
        message="Pick next card you are still in the game!";
    }else if(sum===21){
        message="Yeah !!! It's a blackjack";
        hasBlackJack=true;
    }else{
        message="Sorry !! You are out of the game ";
        isAlive=false;
    }

    resultEl.textContent=message;
}

function nextcard(){
    if(isAlive===true && hasBlackJack===false){
        let nextC=cardPicker();
    sum+=nextC;
    cards.push(nextC);
    rendergame();
    }
}
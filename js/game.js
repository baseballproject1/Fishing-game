// ========================
// 낚시왕 메인 게임
// game.js
// ========================


let level = 1;
let gold = 1000;
let power = 10;

let caughtFish = [];



const fishBtn = document.getElementById("fishBtn");

const message = document.getElementById("message");

const catchFish = document.getElementById("catchFish");

const levelText = document.getElementById("level");

const goldText = document.getElementById("gold");

const powerText = document.getElementById("power");

const bookCount = document.getElementById("bookCount");



fishBtn.addEventListener("click", fishing);



function fishing(){


    message.innerHTML = "🎣 낚시 중...";


    fishBtn.disabled = true;


    setTimeout(()=>{


        let fish = getRandomFish();


        let weight = random(
            fish.min,
            fish.max
        );


        let reward =
        Math.floor(
            fish.price * weight
        );


        gold += reward;


        addBook(fish);


        levelUp();


        updateUI();



        message.innerHTML =
        "🎉 잡았다!";


        catchFish.innerHTML =
        `
        🐟 ${fish.name}<br>
        등급 : ${fish.grade}<br>
        무게 : ${weight.toFixed(1)}kg<br>
        판매가격 : ${reward}G
        `;


        fishBtn.disabled=false;



        saveGame();


    },1000);


}





// 물고기 랜덤 선택

function getRandomFish(){


    let chance =
    Math.random();


    let list;


    if(chance < 0.01){

        list =
        fishes.filter(
            f=>f.grade==="신화"
        );

    }

    else if(chance < 0.10){

        list =
        fishes.filter(
            f=>f.grade==="전설"
        );

    }

    else if(chance < 0.30){

        list =
        fishes.filter(
            f=>f.grade==="희귀"
        );

    }

    else{

        list =
        fishes.filter(
            f=>f.grade==="일반"
        );

    }


    return list[
        Math.floor(
            Math.random()*list.length
        )
    ];

}





// 도감 추가

function addBook(fish){


    let exist =
    caughtFish.find(
        f=>f.name===fish.name
    );


    if(!exist){

        caughtFish.push(fish);

    }


}





// 랜덤 숫자

function random(min,max){

    return Math.random()
    *(max-min)+min;

}





// 레벨업

function levelUp(){


    if(gold >= level*5000){


        level++;

        power += 5;


    }


}





// 화면 업데이트

function updateUI(){


    levelText.innerHTML =
    level;


    goldText.innerHTML =
    gold;


    powerText.innerHTML =
    power;


    bookCount.innerHTML =
    caughtFish.length;


}



// 시작 불러오기

loadGame();

updateUI();

// ========================
// 낚시왕 저장 시스템
// save.js
// ========================


function saveGame(){


    const data = {

        level: level,

        gold: gold,

        power: power,

        caughtFish: caughtFish

    };


    localStorage.setItem(
        "FishingKingSave",
        JSON.stringify(data)
    );


}




function loadGame(){


    const save =
    localStorage.getItem(
        "FishingKingSave"
    );


    if(save){


        const data =
        JSON.parse(save);


        level =
        data.level || 1;


        gold =
        data.gold || 1000;


        power =
        data.power || 10;


        caughtFish =
        data.caughtFish || [];


    }



}



// 데이터 초기화 함수

function resetGame(){


    localStorage.removeItem(
        "FishingKingSave"
    );


    location.reload();


}

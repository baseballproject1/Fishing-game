// ========================
// 낚시왕 상점 시스템
// shop.js
// ========================


let rodLevel = 1;

let baitLevel = 1;



const rods = [

    {
        name:"낡은 낚싯대",
        power:10,
        price:0
    },

    {
        name:"강철 낚싯대",
        power:30,
        price:5000
    },

    {
        name:"황금 낚싯대",
        power:70,
        price:30000
    },

    {
        name:"전설의 낚싯대",
        power:150,
        price:200000
    }

];



const baits = [

    {
        name:"일반 미끼",
        bonus:0,
        price:0
    },

    {
        name:"고급 미끼",
        bonus:5,
        price:5000
    },

    {
        name:"희귀 미끼",
        bonus:15,
        price:20000
    },

    {
        name:"전설 미끼",
        bonus:30,
        price:100000
    }

];





function buyRod(){


    let next =
    rods[rodLevel];


    if(!next){

        alert("최고 등급 낚싯대입니다!");

        return;

    }



    if(gold >= next.price){


        gold -= next.price;


        power += next.power;


        rodLevel++;


        alert(
        next.name+
        " 구매 완료!"
        );


        updateUI();

        saveGame();


    }

    else{


        alert(
        "골드가 부족합니다."
        );


    }


}







function buyBait(){


    let next =
    baits[baitLevel];


    if(!next){

        alert(
        "최고 등급 미끼입니다!"
        );

        return;

    }



    if(gold >= next.price){


        gold -= next.price;


        power += next.bonus;


        baitLevel++;


        alert(
        next.name+
        " 구매 완료!"
        );


        updateUI();

        saveGame();


    }

    else{


        alert(
        "골드가 부족합니다."
        );


    }


}







function getFishingPower(){


    return power;


}





function saveShop(){


    localStorage.setItem(

        "FishingKingShop",

        JSON.stringify({

            rodLevel:rodLevel,

            baitLevel:baitLevel

        })

    );


}





function loadShop(){


    let data =
    localStorage.getItem(
        "FishingKingShop"
    );


    if(data){


        data =
        JSON.parse(data);


        rodLevel =
        data.rodLevel || 1;


        baitLevel =
        data.baitLevel || 1;


    }


}


loadShop();
